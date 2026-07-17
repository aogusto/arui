# Theming + tinted glass + Tabs glass variant (v0.2.0) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax.

**Goal:** Adicionar ao `@aogusto/arui` um `AruiThemeProvider` que re-tinge a lib via um `tint`, um prop `tint` no `GlassSurface`, e um variant `glass` no `Tabs` com pill de vidro animado (spring, framer-motion) colorido pelo tint; lançar como 0.2.0.

**Architecture:** Um util de cor puro (`src/lib/color.ts`) alimenta `AruiThemeProvider`, que injeta `--primary`/`--primary-foreground`/`--ring`/`--glass-tint` no `document.documentElement` (portais herdam). Componentes já consomem `--primary`/`--ring`; `GlassSurface` e o pill do Tabs passam a usar o tint. O Tabs é reescrito no padrão do clser (context + `motion.span layoutId` + spring) e corrige o bug `data-active`→`data-[state=active]`.

**Tech Stack:** React 19, Tailwind 4, radix-ui (Tabs primitive), framer-motion (vira dependency), tsup, TanStack Router (docs).

## Global Constraints

- Branch `feat/theming-tabs`. Node 20+: `. ~/.nvm/nvm.sh && nvm use 22` antes de npm/tsc/tsx/vite.
- Versão passa a **0.2.0** (minor; inclui os fixes já em master do 0.1.1).
- Retrocompat: sem `AruiThemeProvider` e sem props novas, tudo idêntico ao 0.1.x. Só adiciona.
- Provider injeta em `document.documentElement` (portais). Escopo = tint/highlight; NÃO gerencia light/dark. `--accent` permanece neutro.
- framer-motion = **dependency** (não devDep); tsup deve externalizá-lo (não bundlar no `dist`).
- Copy sem travessões; "glassmorphism", nunca "liquid glass".
- Sem `any`. Componentes novos/reescritos seguem o estilo dos existentes (`data-slot`, `cn`, cva).

---

### Task 1: Util de cor + token `--glass-tint`

**Files:**
- Create: `src/lib/color.ts`
- Modify: `src/theme.css` (adicionar `--glass-tint` default + registrar no `@theme inline`)

**Interfaces:**
- Produces: `parseColor(input: string) => Rgb | null`, `relativeLuminance(rgb: Rgb) => number`, `toRgbString(rgb: Rgb) => string`, `type Rgb = { r: number; g: number; b: number }`. Consumido pela Task 2.

- [ ] **Step 1: Criar `src/lib/color.ts`**

```ts
export type Rgb = { r: number; g: number; b: number }

const HEX = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i

export function parseColor(input: string): Rgb | null {
  const s = input.trim()
  const hex = s.match(HEX)
  if (hex) {
    let h = hex[1]
    if (h.length === 3) h = h.split("").map((c) => c + c).join("")
    const n = parseInt(h, 16)
    return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 }
  }
  const rgb = s.match(/^rgba?\(\s*([\d.]+)[ ,]+([\d.]+)[ ,]+([\d.]+)/i)
  if (rgb) return { r: Number(rgb[1]), g: Number(rgb[2]), b: Number(rgb[3]) }
  return null
}

export function relativeLuminance({ r, g, b }: Rgb): number {
  const lin = (c: number) => {
    const x = c / 255
    return x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4
  }
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b)
}

export function toRgbString({ r, g, b }: Rgb): string {
  return `${Math.round(r)} ${Math.round(g)} ${Math.round(b)}`
}
```

- [ ] **Step 2: Adicionar `--glass-tint` no `src/theme.css`**

No bloco de tokens raiz (onde estão `--glass-regular` etc.), adicionar um default neutro:
```css
--glass-tint: transparent;
```
E no `@theme inline` (junto de `--color-glass-regular`), registrar:
```css
--color-glass-tint: var(--glass-tint);
```
(Não alterar `--primary`/`--ring` existentes: eles são o tint default.)

- [ ] **Step 3: Verificar typecheck**

```bash
. ~/.nvm/nvm.sh && nvm use 22 && npx tsc -b
```
Expected: exit 0.

- [ ] **Step 4: Commit**

```bash
git add src/lib/color.ts src/theme.css
git commit -m "feat(theme): util de cor puro + token --glass-tint"
```

---

### Task 2: `AruiThemeProvider` + `applyAruiTint`

**Files:**
- Create: `src/components/theme/aruiThemeProvider.tsx`
- Modify: `src/index.ts` (exportar `AruiThemeProvider`, `applyAruiTint`, `AruiTint`)

**Interfaces:**
- Consumes: `parseColor`, `relativeLuminance`, `toRgbString` (Task 1).
- Produces: `AruiThemeProvider({ tint?: AruiTint, children })`, `applyAruiTint(tint: string, target?: HTMLElement) => () => void`, `type AruiTint`. Consumido por docs (Task 6).

- [ ] **Step 1: Criar `src/components/theme/aruiThemeProvider.tsx`**

```tsx
"use client"

import * as React from "react"
import { parseColor, relativeLuminance, toRgbString } from "@/lib/color"

export type AruiTint =
  | "blue"
  | "indigo"
  | "violet"
  | "pink"
  | "rose"
  | "green"
  | "teal"
  | "orange"
  | "red"
  | (string & {})

const TINT_PRESETS: Record<string, string> = {
  blue: "#3b82f6",
  indigo: "#6366f1",
  violet: "#8b5cf6",
  pink: "#ec4899",
  rose: "#f43f5e",
  green: "#22c55e",
  teal: "#14b8a6",
  orange: "#f97316",
  red: "#ef4444",
}

const MANAGED_VARS = ["--primary", "--primary-foreground", "--ring", "--glass-tint"]

function resolveTint(tint: string): string {
  return TINT_PRESETS[tint] ?? tint
}

/**
 * Applies a tint (preset name or CSS color) to `target` by setting the arui
 * highlight custom properties. Returns a cleanup that removes them.
 */
export function applyAruiTint(
  tint: string,
  target: HTMLElement = document.documentElement
): () => void {
  const color = resolveTint(tint)
  const rgb = parseColor(color)
  target.style.setProperty("--primary", color)
  target.style.setProperty("--ring", color)
  if (rgb) {
    target.style.setProperty("--glass-tint", `rgb(${toRgbString(rgb)})`)
    // Foreground contrast: light tint gets dark text, dark tint gets white.
    const fg = relativeLuminance(rgb) > 0.55 ? "oklch(0.21 0.006 285.885)" : "oklch(1 0 0)"
    target.style.setProperty("--primary-foreground", fg)
  } else {
    // Non-parseable input (e.g. oklch()): tint the glass with the raw color, keep white fg.
    target.style.setProperty("--glass-tint", color)
    target.style.setProperty("--primary-foreground", "oklch(1 0 0)")
  }
  return () => {
    for (const v of MANAGED_VARS) target.style.removeProperty(v)
  }
}

export function AruiThemeProvider({
  tint,
  children,
}: {
  tint?: AruiTint
  children: React.ReactNode
}) {
  React.useEffect(() => {
    if (!tint) return
    return applyAruiTint(tint)
  }, [tint])
  return <>{children}</>
}
```

- [ ] **Step 2: Exportar no barrel `src/index.ts`**

Adicionar (junto dos outros exports):
```ts
export { AruiThemeProvider, applyAruiTint } from "@/components/theme/aruiThemeProvider"
export type { AruiTint } from "@/components/theme/aruiThemeProvider"
```

- [ ] **Step 3: Verificar typecheck + build da lib**

```bash
. ~/.nvm/nvm.sh && nvm use 22 && npx tsc -b && npm run build
node -e "import('./dist/index.js').then(m => console.log('AruiThemeProvider:', typeof m.AruiThemeProvider, '| applyAruiTint:', typeof m.applyAruiTint))"
```
Expected: `tsc -b` + `tsup` exit 0; o node imprime `AruiThemeProvider: function | applyAruiTint: function`.

- [ ] **Step 4: Commit**

```bash
git add src/components/theme/aruiThemeProvider.tsx src/index.ts
git commit -m "feat(theme): AruiThemeProvider + applyAruiTint (injeta tint em documentElement)"
```

---

### Task 3: `GlassSurface` prop `tint`

**Files:**
- Modify: `src/components/ui/glass-surface.tsx`

**Interfaces:**
- Consumes: nada novo (usa `var(--primary)` / cor inline).
- Produces: `GlassSurfaceProps` ganha `tint?: "accent" | (string & {})`.

- [ ] **Step 1: Adicionar `tint` ao `GlassSurface`**

Editar o componente (o arquivo hoje tem `variant`, `dim`, e renderiza `<div isolate><div glass>{children}</div></div>`). Adicionar `tint` ao tipo e uma camada de cor sobre o material quando `tint` estiver definido:

```tsx
type GlassSurfaceProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "regular" | "thick" | "clear"
  dim?: boolean
  tint?: "accent" | (string & {})
}

function GlassSurface({
  variant = "regular",
  dim = false,
  tint,
  className,
  children,
  ...props
}: GlassSurfaceProps) {
  const tintColor = tint === "accent" ? "var(--primary)" : tint
  return (
    <div className={cn("relative isolate rounded-2xl", className)} {...props}>
      {dim && variant === "clear" && (
        <div aria-hidden className="absolute inset-0 rounded-[inherit] bg-black/35" />
      )}
      <div className={cn("relative rounded-[inherit]", glass[variant])}>
        {tintColor && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit]"
            style={{ backgroundColor: tintColor, opacity: 0.16 }}
          />
        )}
        {children}
      </div>
    </div>
  )
}
```
> Nota: o overlay de tint fica DENTRO do div `glass` (herda o rounded e cobre a superfície), com `opacity: 0.16` para tingir sem matar o frost. `pointer-events-none` para não bloquear cliques. O `relative` no div glass garante o empilhamento do overlay abaixo dos `children`.

- [ ] **Step 2: Verificar build da lib + tipo**

```bash
. ~/.nvm/nvm.sh && nvm use 22 && npx tsc -b && npm run build
```
Expected: exit 0.

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/glass-surface.tsx
git commit -m "feat(glass-surface): prop tint (accent | cor) tinge o material"
```

---

### Task 4: Tabs — variant `glass` (spring pill) + fix `data-[state=active]` + framer-motion dep

**Files:**
- Modify: `src/components/ui/tabs.tsx` (reescrever no padrão do clser, adaptado)
- Modify: `package.json` (framer-motion: devDep → dependency)

**Interfaces:**
- Consumes: `var(--primary)` (pill tint), `var(--shadow-glass-sm)` (theme.css).
- Produces: `TabsList` aceita `variant="default" | "line" | "segmented" | "glass"`.

Referência (ler antes): `/home/augustoribeiro/espaco/clser-frontend/src/components/ui/tabs.tsx`. Adaptar tokens ao arui (não copiar `--glass-nav-*`/`--glass-pill-*` do clser).

- [ ] **Step 1: Mover framer-motion para dependencies**

Editar `package.json`: remover `framer-motion` de `devDependencies` e adicioná-lo em `dependencies` com `"framer-motion": "^12.42.2"` (a versão já usada). Depois `. ~/.nvm/nvm.sh && nvm use 22 && npm install`.

- [ ] **Step 2: Reescrever `src/components/ui/tabs.tsx`**

```tsx
"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Tabs as TabsPrimitive } from "radix-ui"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

type TabsVariant = "default" | "line" | "segmented" | "glass"

interface TabsRootContextValue {
  activeValue: string | undefined
  pillId: string
}
const TabsRootContext = React.createContext<TabsRootContextValue | null>(null)
const TabsListContext = React.createContext<{ variant: TabsVariant }>({ variant: "default" })

function Tabs({
  className,
  orientation = "horizontal",
  value,
  defaultValue,
  onValueChange,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  const pillId = React.useId()
  const [internalValue, setInternalValue] = React.useState<string | undefined>(
    value ?? defaultValue
  )
  const activeValue = value ?? internalValue
  const handleValueChange = React.useCallback(
    (next: string) => {
      setInternalValue(next)
      onValueChange?.(next)
    },
    [onValueChange]
  )
  return (
    <TabsRootContext.Provider value={{ activeValue, pillId }}>
      <TabsPrimitive.Root
        data-slot="tabs"
        data-orientation={orientation}
        orientation={orientation}
        value={value}
        defaultValue={defaultValue}
        onValueChange={handleValueChange}
        className={cn("group/tabs flex gap-2 data-horizontal:flex-col", className)}
        {...props}
      />
    </TabsRootContext.Provider>
  )
}

const tabsListVariants = cva(
  "group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-horizontal/tabs:h-9 group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col data-[variant=line]:rounded-none",
  {
    variants: {
      variant: {
        default: "bg-muted",
        line: "gap-1 bg-transparent",
        segmented: "bg-muted/60 supports-backdrop-filter:backdrop-blur-md",
        glass:
          "relative overflow-hidden rounded-2xl p-1 group-data-horizontal/tabs:h-10 " +
          "bg-glass-regular/60 supports-[backdrop-filter]:bg-glass-regular/40 backdrop-blur-glass backdrop-saturate-150 " +
          "border border-white/15 dark:border-white/10 shadow-glass-sm",
      },
    },
    defaultVariants: { variant: "default" },
  }
)

function TabsList({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> & VariantProps<typeof tabsListVariants>) {
  const resolved: TabsVariant = variant ?? "default"
  return (
    <TabsListContext.Provider value={{ variant: resolved }}>
      <TabsPrimitive.List
        data-slot="tabs-list"
        data-variant={resolved}
        className={cn(tabsListVariants({ variant: resolved }), className)}
        {...props}
      />
    </TabsListContext.Provider>
  )
}

// Active-item lens for the glass variant: a translucent tint of --primary plus glass shine.
const GLASS_PILL_STYLE: React.CSSProperties = {
  background: "color-mix(in oklch, var(--primary) 22%, transparent)",
  boxShadow: "var(--shadow-glass-sm)",
}

function TabsTrigger({
  className,
  value,
  children,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  const root = React.useContext(TabsRootContext)
  const { variant } = React.useContext(TabsListContext)
  const isGlass = variant === "glass"
  const isActive = isGlass && root != null && root.activeValue === value

  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      value={value}
      className={cn(
        "relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap text-foreground/60 transition-colors group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "group-data-[variant=default]/tabs-list:data-[state=active]:bg-background group-data-[variant=default]/tabs-list:data-[state=active]:shadow-sm data-[state=active]:text-foreground dark:group-data-[variant=default]/tabs-list:data-[state=active]:border-input dark:group-data-[variant=default]/tabs-list:data-[state=active]:bg-input/30",
        "group-data-[variant=segmented]/tabs-list:data-[state=active]:bg-background group-data-[variant=segmented]/tabs-list:data-[state=active]:shadow-xs group-data-[variant=segmented]/tabs-list:data-[state=active]:text-foreground",
        "group-data-[variant=glass]/tabs-list:z-10 group-data-[variant=glass]/tabs-list:rounded-xl group-data-[variant=glass]/tabs-list:font-semibold group-data-[variant=glass]/tabs-list:data-[state=active]:text-foreground",
        "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100",
        className
      )}
      {...props}
    >
      {isActive && root && (
        <motion.span
          layoutId={`tabs-glass-pill-${root.pillId}`}
          aria-hidden="true"
          className="absolute inset-0 rounded-xl border border-white/20"
          style={GLASS_PILL_STYLE}
          initial={false}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
      <span className="relative z-10 inline-flex items-center justify-center gap-1.5">
        {children}
      </span>
    </TabsPrimitive.Trigger>
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 text-sm outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants }
```
> Mudança-chave vs. o atual: TODO estado ativo agora usa `data-[state=active]` (o Radix seta `data-state`), corrigindo o bug em que o ativo não se destacava. O variant `glass` adiciona o pill animado. `default`/`line`/`segmented` preservados.

- [ ] **Step 3: Verificar build + framer-motion externalizado**

```bash
. ~/.nvm/nvm.sh && nvm use 22 && npx tsc -b && npm run build
grep -c "from \"framer-motion\"\|require(\"framer-motion\")\|framer-motion" dist/index.js | head -1
node -e "const p=require('./package.json'); console.log('dep:', p.dependencies['framer-motion'], '| still devDep:', !!(p.devDependencies||{})['framer-motion'])"
```
Expected: build exit 0; `dist/index.js` referencia `framer-motion` como import externo (bare import presente, NÃO o código do framer-motion in-lined — o arquivo deve continuar na casa dos ~190KB, não pular pra MBs). `dep:` mostra `^12.42.2` e `still devDep: false`. Se o `dist` inflar (framer-motion bundlado), adicionar `external: ["framer-motion"]` em `tsup.config.ts` e rebuildar.

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/tabs.tsx package.json package-lock.json
git commit -m "feat(tabs): variant glass com pill de vidro animado (spring) + fix data-[state=active]; framer-motion vira dependency"
```

---

### Task 5: Bump 0.2.0

**Files:** Modify `package.json` (version).

- [ ] **Step 1: Bump**

```bash
. ~/.nvm/nvm.sh && nvm use 22 && npm version minor --no-git-tag-version
node -e "console.log(require('./package.json').version)"
```
Expected: `0.2.0`.

- [ ] **Step 2: Commit**

```bash
git add package.json
git commit -m "chore(release): 0.2.0"
```

---

### Task 6: Docs — Theming page + exemplos (glass tinted, tabs glass) + manifest + guia

**Files:**
- Create: `preview/docs/ThemingPage.tsx`
- Modify: `preview/router.tsx` (rota `theming`), `preview/docs/DocsLayout.tsx` (link "Theming" no grupo Guides)
- Create: `preview/docs/components/glass-surface/examples/tinted.tsx`
- Modify: `preview/docs/components/glass-surface/page.tsx` (adicionar o Demo `tinted`)
- Create: `preview/docs/components/tabs/examples/glass.tsx`
- Modify: `preview/docs/components/tabs/page.tsx` (adicionar o Demo `glass`)
- Modify: `mcp/knowledge/design-guide.md` (seção de tint/theming)
- Regenera: `mcp/manifest.json` (via `npm run build:manifest`)

**Interfaces:** Consumes `AruiThemeProvider`/`applyAruiTint` (Task 2), `GlassSurface tint` (Task 3), Tabs `glass` (Task 4).

- [ ] **Step 1: `preview/docs/ThemingPage.tsx`**

Página "Theming" explicando o `AruiThemeProvider` + presets + hex + o caminho CSS-only. Estrutura igual ao `McpPage.tsx` (header "Guides" + seções + `CopyButton`). Conteúdo mínimo obrigatório:
- Bloco de uso: `import { AruiThemeProvider } from "@aogusto/arui"` + `<AruiThemeProvider tint="pink">…</AruiThemeProvider>`.
- Lista de presets (blue, indigo, violet, pink, rose, green, teal, orange, red) + "ou qualquer cor CSS (hex/rgb/oklch)".
- O que o tint afeta: primary, ring/foco, `GlassSurface tint="accent"`, o pill do Tabs glass.
- Caminho CSS-only: setar `--primary`/`--ring`/`--glass-tint` no `:root`.
- **Um mini-demo ao vivo (opcional mas recomendado):** um seletor de tint (botões blue/pink/green) que chama `applyAruiTint(color)` num container-alvo e mostra alguns componentes re-tingindo. Se incluir, usar um `ref` de container e `applyAruiTint(color, ref.current)` (escopo local, não o documentElement inteiro, pra não afetar o site).
- Copy em inglês, sem travessões.

- [ ] **Step 2: Rota + nav**

`preview/router.tsx`: importar `ThemingPage`, criar `themingRoute` (path `"theming"`, parent `docsRoute`) e anexar em `docsRoute.addChildren([...])` (junto de mcpRoute/designRoute).
`preview/docs/DocsLayout.tsx`: no grupo "Guides" da `SidebarNav`, adicionar `<Link to="/docs/theming" …>Theming</Link>`.

- [ ] **Step 3: Exemplo glass tinted**

`preview/docs/components/glass-surface/examples/tinted.tsx` (autocontido, importa de `@aogusto/arui`):
```tsx
import { GlassSurface } from "@aogusto/arui"

export default function Example() {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-indigo via-purple to-pink p-10">
      <div className="relative flex flex-wrap items-center justify-center gap-4">
        <GlassSurface tint="accent">
          <div className="w-40 space-y-1 p-4 text-center">
            <p className="text-subhead font-semibold text-foreground">Accent tint</p>
            <p className="text-caption-2 text-foreground/70">Follows the theme primary</p>
          </div>
        </GlassSurface>
        <GlassSurface tint="#22c55e">
          <div className="w-40 space-y-1 p-4 text-center">
            <p className="text-subhead font-semibold text-foreground">Custom tint</p>
            <p className="text-caption-2 text-foreground/70">Any CSS color</p>
          </div>
        </GlassSurface>
      </div>
    </div>
  )
}
```
Em `glass-surface/page.tsx`: importar `Tinted` + `tintedCode` (`?raw`) e adicionar um `<Demo title="Tinted" code={tintedCode}><Tinted /></Demo>` na lista. Adicionar a linha de prop `tint` na tabela de props do `meta.ts` do glass-surface (`{ prop: "tint", type: '"accent" | (string & {})', description: "Tints the material with the theme accent or any CSS color." }`).

- [ ] **Step 4: Exemplo tabs glass**

`preview/docs/components/tabs/examples/glass.tsx`:
```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@aogusto/arui"

export default function Example() {
  return (
    <Tabs defaultValue="overview" className="w-full max-w-md">
      <TabsList variant="glass">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="activity">Activity</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="p-3 text-subhead text-label-secondary">
        The active pill glides between tabs with a spring, tinted by the theme.
      </TabsContent>
      <TabsContent value="activity" className="p-3 text-subhead text-label-secondary">
        Activity content.
      </TabsContent>
      <TabsContent value="settings" className="p-3 text-subhead text-label-secondary">
        Settings content.
      </TabsContent>
    </Tabs>
  )
}
```
Em `tabs/page.tsx`: importar `Glass` + `glassCode` (`?raw`) e adicionar `<Demo title="Glass" code={glassCode}><Glass /></Demo>`. Se a tabela de props do Tabs documenta `variant` da `TabsList`, adicionar `glass` à lista de valores em `meta.ts`.

- [ ] **Step 5: Guia de design + manifest**

- `mcp/knowledge/design-guide.md`: adicionar uma subseção curta em Materials/Color sobre o tint (o `AruiThemeProvider`/`--primary`/`--glass-tint`) e o pill do Tabs glass. Sem travessões; glassmorphism.
- Regerar o manifest: `. ~/.nvm/nvm.sh && nvm use 22 && npm run build:manifest` (pega os exemplos novos automaticamente).

- [ ] **Step 6: Verificar**

```bash
. ~/.nvm/nvm.sh && nvm use 22 && npm run build:preview && npm run build:manifest
```
Expected: build:preview exit 0; manifest regenerado. `/docs/theming` na sidebar; glass-surface e tabs com os Demos novos.

- [ ] **Step 7: Commit**

```bash
git add preview/ mcp/knowledge/design-guide.md mcp/manifest.json
git commit -m "docs: página Theming + exemplos glass tinted e tabs glass + guia/manifest"
```

---

### Task 7: Fechamento + verificação visual

- [ ] **Step 1: Build completo**

```bash
. ~/.nvm/nvm.sh && nvm use 22 && npx tsc -b && npm run build && npm run build:preview && npm run build:manifest
```
Expected: todos exit 0.

- [ ] **Step 2: Verificação visual (Playwright, dev server)**

Subir `npm run dev`, e verificar:
- **Tabs glass:** o pill desliza com spring ao trocar de tab; ativo destacado (claro e escuro).
- **Fix data-state:** os variants default/line/segmented agora mostram o ativo distinto (claro e escuro) — antes saíam iguais.
- **Tint em portal:** montar um `AruiThemeProvider tint="pink"` (ou `applyAruiTint("pink")` no documentElement via console) e abrir um Dialog — o conteúdo do Dialog (portal) deve refletir o tint (ex.: um Button primário rosa).
- **GlassSurface tint:** o exemplo tinted mostra a coloração.

- [ ] **Step 3: Smoke do MCP** (o manifest mudou)

```bash
cd mcp && . ~/.nvm/nvm.sh && nvm use 22 && node -e "const m=require('./manifest.json'); console.log('components:', m.components.length, '| version:', m.version)"
```
Expected: components = 57 (theming é provider, não component doc); version = 0.2.0.

- [ ] **Step 4:** Review final + decisão de merge/publish (0.2.0) com o usuário (publish precisa do 2FA).

## Self-Review

**Spec coverage:** AruiThemeProvider (T2) ← color util+token (T1); GlassSurface tint (T3); Tabs glass + data-state fix + framer-motion dep (T4); versão 0.2.0 (T5); docs theming+exemplos+manifest+guia (T6); verificação incl. portal/spring/data-state (T7).
**Placeholders:** código concreto nas tasks de lib (color, provider, glass, tabs). Task 6 referencia padrões já existentes (McpPage/Demo/meta) com os exemplos concretos dados. Sem "TBD".
**Type/nome consistência:** `Rgb`/`parseColor`/`relativeLuminance`/`toRgbString` (T1) usados em T2; `AruiTint`/`AruiThemeProvider`/`applyAruiTint` exportados (T2) e consumidos em T6; `GlassSurfaceProps.tint` (T3); `TabsList variant="glass"` (T4) usado nos exemplos (T6); `--glass-tint`/`--primary`/`--shadow-glass-sm` consistentes entre theme.css (T1), provider (T2), glass (T3) e pill (T4).
**Riscos cobertos:** framer-motion externalização verificada (T4 Step 3); portal herda tint via documentElement (T2/T7); data-state fix coberto em todos variants (T7); retrocompat (defaults inalterados).
