# arui docs site (branded) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transformar o showcase do arui num site de documentação branded: a landing atual vira a home, e `/docs/*` traz uma página por componente com vários exemplos ao vivo (com código copiável) e tabelas de props curadas, no visual glassmorphism/HIG existente.

**Architecture:** Roteamento client-side com TanStack Router dentro do mesmo app Vite (`preview/`). Um `DocsLayout` com sidebar por categoria e ⌘K (dogfood do `command` da arui) envolve as páginas de docs. Cada componente tem um diretório `preview/docs/components/<slug>/` com `meta.ts`, `examples/*.tsx` e `page.tsx`; as páginas são auto-descobertas por `import.meta.glob`, então o fan-out só adiciona diretórios. O componente `<Demo>` mostra o exemplo ao vivo mais o fonte cru (`import code from "./ex.tsx?raw"`), sem duplicar código.

**Tech Stack:** Vite 7, React 19, Tailwind 4, `@tanstack/react-router` (devDep, só showcase), `@aogusto/arui` (a própria lib, via alias de dogfood).

## Global Constraints

- Publicado como `@aogusto/arui`; o showcase importa `from "@aogusto/arui"` (alias vite → `src/index.ts`).
- **Copy sem travessões ("—")** e naturalizada. Nunca chamar o CSS de "liquid glass"; a técnica é **glassmorphism** (inspirada no Liquid Glass da Apple).
- **Props: TODAS curadas à mão** por componente. Nada de auto-gen.
- Build do showcase: `npm run build:preview` (tsc -b + vite build) → `showcase-dist/`. Node 20+ (usar `. ~/.nvm/nvm.sh && nvm use 22` antes de qualquer npm/tsc/vite).
- Nada nesta feature toca `src/`, `tsup.config.ts` ou o pacote publicado. É tudo em `preview/`, `package.json` (devDep do router) e `vercel.json`.
- Cada exemplo é um `.tsx` autocontido que importa de `@aogusto/arui` (o código exibido tem que ser copiável e correto).
- 3 a 6 exemplos por componente. No topo da página do componente, só o import (a instalação completa fica no `/docs` getting started).

---

### Task 1: Fundação de roteamento + home preservada

**Files:**
- Modify: `package.json` (devDep `@tanstack/react-router`)
- Create: `preview/vite-env.d.ts` (tipos do Vite, habilita `?raw`)
- Create: `preview/router.tsx` (árvore de rotas)
- Create: `preview/pages/HomePage.tsx` (o conteúdo atual de `App.tsx`)
- Modify: `preview/main.tsx` (montar `<RouterProvider>`)
- Delete: `preview/App.tsx` (vira HomePage)
- Modify: `vercel.json` (rewrite SPA)

**Interfaces:**
- Produces: `router` (de `preview/router.tsx`), `rootRoute`, `docsRoute` (para as tasks seguintes anexarem rotas filhas). `HomePage` default export.

- [ ] **Step 1: Instalar o router**

```bash
cd ~/workspace/arui && . ~/.nvm/nvm.sh && nvm use 22
npm install -D @tanstack/react-router
```

- [ ] **Step 2: Habilitar tipos do Vite (inclui `?raw`)**

Criar `preview/vite-env.d.ts`:
```ts
/// <reference types="vite/client" />
```
(`vite/client` já declara `declare module "*?raw"`, então `import x from "./f.tsx?raw"` tipa como `string`.)

- [ ] **Step 3: Mover `App.tsx` para `preview/pages/HomePage.tsx`**

Copiar o conteúdo atual de `preview/App.tsx` para `preview/pages/HomePage.tsx`, renomear o componente para `HomePage`, ajustar os imports relativos (passam a subir um nível: `../lib/useTheme`, `../components/Nav`, etc.), e **corrigir o título** (sem travessão, glassmorphism):
```tsx
useEffect(() => {
  document.title = "Arui: React components with glassmorphism"
}, [])
```
Depois `git rm preview/App.tsx`.

- [ ] **Step 4: Criar a árvore de rotas `preview/router.tsx`**

```tsx
import { createRootRoute, createRoute, createRouter, Outlet } from "@tanstack/react-router"
import { HomePage } from "./pages/HomePage"

export const rootRoute = createRootRoute({ component: () => <Outlet /> })

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
})

// docsRoute e suas filhas são anexadas nas Tasks 2/3 via routeTree abaixo.
// Task 2 exporta docsRoute e docsChildren; aqui deixamos a home pronta.
const routeTree = rootRoute.addChildren([homeRoute])

export const router = createRouter({ routeTree })

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}
```
> As Tasks 2 e 3 vão editar este arquivo para anexar `docsRoute` (layout) com as filhas `/docs` (index) e `/docs/components/$slug`. Deixe `rootRoute` exportado.

- [ ] **Step 5: Montar o RouterProvider em `preview/main.tsx`**

```tsx
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { RouterProvider } from "@tanstack/react-router"
import { router } from "./router"
import "./preview.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
```

- [ ] **Step 6: Rewrite SPA no `vercel.json`**

Adicionar `rewrites` para que refresh em rotas profundas não dê 404:
```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "buildCommand": "npm run build:preview",
  "outputDirectory": "showcase-dist",
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

- [ ] **Step 7: Verificar**

```bash
. ~/.nvm/nvm.sh && nvm use 22 && npm run build:preview
```
Expected: exit 0. A home (`/`) renderiza igual a antes (Hero + Material + Playground + Install). `preview/App.tsx` não existe mais.

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "feat(docs): roteamento TanStack Router + home preservada + rewrite SPA"
```

---

### Task 2: Registry de navegação + DocsLayout + getting started

**Files:**
- Create: `preview/docs/registry.ts` (taxonomia dos 57)
- Create: `preview/docs/DocsLayout.tsx` (topbar + sidebar + Outlet)
- Create: `preview/docs/GettingStarted.tsx` (página `/docs`)
- Modify: `preview/router.tsx` (anexar `docsRoute` + index)

**Interfaces:**
- Consumes: `rootRoute` (Task 1).
- Produces: `DOCS_REGISTRY: DocEntry[]` e `DOCS_CATEGORIES: string[]` (de `registry.ts`); `docsRoute` (layout, exportado de `router.tsx`) para a Task 3 anexar `/components/$slug`.

- [ ] **Step 1: Criar `preview/docs/registry.ts`**

Fonte única da navegação. Ordem e categorias fixas.
```ts
export type DocCategory =
  | "Signature"
  | "Forms & Inputs"
  | "Overlays"
  | "Navigation"
  | "Data & Display"
  | "Feedback & Utilities"

export type DocEntry = { slug: string; name: string; category: DocCategory }

export const DOCS_CATEGORIES: DocCategory[] = [
  "Signature",
  "Forms & Inputs",
  "Overlays",
  "Navigation",
  "Data & Display",
  "Feedback & Utilities",
]

export const DOCS_REGISTRY: DocEntry[] = [
  { slug: "glass-surface", name: "Glass Surface", category: "Signature" },
  { slug: "button", name: "Button", category: "Forms & Inputs" },
  { slug: "button-group", name: "Button Group", category: "Forms & Inputs" },
  { slug: "input", name: "Input", category: "Forms & Inputs" },
  { slug: "input-group", name: "Input Group", category: "Forms & Inputs" },
  { slug: "input-otp", name: "Input OTP", category: "Forms & Inputs" },
  { slug: "textarea", name: "Textarea", category: "Forms & Inputs" },
  { slug: "label", name: "Label", category: "Forms & Inputs" },
  { slug: "field", name: "Field", category: "Forms & Inputs" },
  { slug: "form", name: "Form", category: "Forms & Inputs" },
  { slug: "checkbox", name: "Checkbox", category: "Forms & Inputs" },
  { slug: "radio-group", name: "Radio Group", category: "Forms & Inputs" },
  { slug: "switch", name: "Switch", category: "Forms & Inputs" },
  { slug: "select", name: "Select", category: "Forms & Inputs" },
  { slug: "native-select", name: "Native Select", category: "Forms & Inputs" },
  { slug: "slider", name: "Slider", category: "Forms & Inputs" },
  { slug: "toggle", name: "Toggle", category: "Forms & Inputs" },
  { slug: "toggle-group", name: "Toggle Group", category: "Forms & Inputs" },
  { slug: "combobox", name: "Combobox", category: "Forms & Inputs" },
  { slug: "calendar", name: "Calendar", category: "Forms & Inputs" },
  { slug: "dialog", name: "Dialog", category: "Overlays" },
  { slug: "alert-dialog", name: "Alert Dialog", category: "Overlays" },
  { slug: "sheet", name: "Sheet", category: "Overlays" },
  { slug: "drawer", name: "Drawer", category: "Overlays" },
  { slug: "popover", name: "Popover", category: "Overlays" },
  { slug: "tooltip", name: "Tooltip", category: "Overlays" },
  { slug: "hover-card", name: "Hover Card", category: "Overlays" },
  { slug: "dropdown-menu", name: "Dropdown Menu", category: "Overlays" },
  { slug: "context-menu", name: "Context Menu", category: "Overlays" },
  { slug: "menubar", name: "Menubar", category: "Overlays" },
  { slug: "command", name: "Command", category: "Overlays" },
  { slug: "tabs", name: "Tabs", category: "Navigation" },
  { slug: "breadcrumb", name: "Breadcrumb", category: "Navigation" },
  { slug: "pagination", name: "Pagination", category: "Navigation" },
  { slug: "navigation-menu", name: "Navigation Menu", category: "Navigation" },
  { slug: "sidebar", name: "Sidebar", category: "Navigation" },
  { slug: "table", name: "Table", category: "Data & Display" },
  { slug: "badge", name: "Badge", category: "Data & Display" },
  { slug: "avatar", name: "Avatar", category: "Data & Display" },
  { slug: "card", name: "Card", category: "Data & Display" },
  { slug: "accordion", name: "Accordion", category: "Data & Display" },
  { slug: "carousel", name: "Carousel", category: "Data & Display" },
  { slug: "chart", name: "Chart", category: "Data & Display" },
  { slug: "progress", name: "Progress", category: "Data & Display" },
  { slug: "skeleton", name: "Skeleton", category: "Data & Display" },
  { slug: "separator", name: "Separator", category: "Data & Display" },
  { slug: "aspect-ratio", name: "Aspect Ratio", category: "Data & Display" },
  { slug: "scroll-area", name: "Scroll Area", category: "Data & Display" },
  { slug: "resizable", name: "Resizable", category: "Data & Display" },
  { slug: "kbd", name: "Kbd", category: "Data & Display" },
  { slug: "empty", name: "Empty", category: "Data & Display" },
  { slug: "item", name: "Item", category: "Data & Display" },
  { slug: "spinner", name: "Spinner", category: "Data & Display" },
  { slug: "alert", name: "Alert", category: "Data & Display" },
  { slug: "collapsible", name: "Collapsible", category: "Data & Display" },
  { slug: "sonner", name: "Sonner (Toaster)", category: "Feedback & Utilities" },
  { slug: "direction", name: "Direction", category: "Feedback & Utilities" },
]
```
> São 57 entradas. Verificação rápida: `node -e "console.log(require('./preview/docs/registry.ts'))"` não roda em TS; em vez disso confira a contagem quando o build passar. A ordem dos slugs bate com `ls src/components/ui`.

- [ ] **Step 2: Criar `preview/docs/DocsLayout.tsx`**

Layout de duas colunas. Topbar simples (logo + links + toggle de tema, reusando `useTheme` e o padrão do `Nav`), sidebar agrupada a partir de `DOCS_REGISTRY`, e `<Outlet />` no conteúdo. Link ativo via `useMatchRoute`/`Link` do TanStack. Em mobile, a sidebar abre num `Sheet` da arui.
```tsx
import { Link, Outlet } from "@tanstack/react-router"
import { Sheet, SheetContent, SheetTrigger, Button } from "@aogusto/arui"
import { Menu } from "lucide-react"
import { useTheme } from "../lib/useTheme"
import { ThemeToggle } from "../components/ThemeToggle"
import { DOCS_REGISTRY, DOCS_CATEGORIES } from "./registry"

function SidebarNav() {
  return (
    <nav className="space-y-6 text-subhead">
      {DOCS_CATEGORIES.map((cat) => (
        <div key={cat} className="space-y-1">
          <p className="px-2 text-caption-1 font-semibold uppercase tracking-wide text-label-tertiary">
            {cat}
          </p>
          {DOCS_REGISTRY.filter((e) => e.category === cat).map((e) => (
            <Link
              key={e.slug}
              to="/docs/components/$slug"
              params={{ slug: e.slug }}
              className="block rounded-md px-2 py-1.5 text-label-secondary hover:bg-fill hover:text-label [&.active]:bg-fill [&.active]:font-medium [&.active]:text-label"
            >
              {e.name}
            </Link>
          ))}
        </div>
      ))}
    </nav>
  )
}

export function DocsLayout() {
  const { theme, toggle } = useTheme()
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <header className="sticky top-0 z-40 flex h-14 items-center gap-3 border-b border-separator bg-background/80 px-4 backdrop-blur-glass">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 overflow-y-auto p-4">
            <SidebarNav />
          </SheetContent>
        </Sheet>
        <Link to="/" className="text-headline font-semibold">arui</Link>
        <div className="ml-auto flex items-center gap-1">
          <a href="https://www.npmjs.com/package/@aogusto/arui" className="rounded-md px-2 py-1 text-subhead text-label-secondary hover:text-label">npm</a>
          <a href="https://github.com/aogusto/arui" className="rounded-md px-2 py-1 text-subhead text-label-secondary hover:text-label">GitHub</a>
          <ThemeToggle theme={theme} onToggle={toggle} />
        </div>
      </header>
      <div className="mx-auto flex w-full max-w-7xl">
        <aside className="sticky top-14 hidden h-[calc(100dvh-3.5rem)] w-64 shrink-0 overflow-y-auto border-r border-separator p-4 lg:block">
          <SidebarNav />
        </aside>
        <main className="min-w-0 flex-1 px-4 py-8 sm:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
```
> Ajustar props do `ThemeToggle` ao que o componente existente expõe (ler `preview/components/ThemeToggle.tsx`). Se `Sheet`/`Button` exigirem props diferentes, seguir a API real.

- [ ] **Step 3: Criar `preview/docs/GettingStarted.tsx`**

Conteúdo do getting started (instalação, setup do tema TW4, uso, forms opcional), reusando o `CopyButton`/`CommandRow` existentes para blocos copiáveis. Copy sem travessões, glassmorphism onde descrever o visual. Cobrir: `npm install @aogusto/arui`; o bloco CSS (`@import "tailwindcss"; @import "@aogusto/arui/theme.css"; @source "../node_modules/@aogusto/arui/dist";`); exemplo `import { Button } from "@aogusto/arui"`; nota de `react-hook-form` como peer opcional.

- [ ] **Step 4: Anexar as rotas de docs em `preview/router.tsx`**

Editar `router.tsx`: importar `DocsLayout` e `GettingStarted`, criar `docsRoute` (layout, path `"docs"`) e `docsIndexRoute` (path `"/"`), e montar a árvore. Exportar `docsRoute` para a Task 3.
```tsx
import { DocsLayout } from "./docs/DocsLayout"
import { GettingStarted } from "./docs/GettingStarted"

export const docsRoute = createRoute({ getParentRoute: () => rootRoute, path: "docs", component: DocsLayout })
const docsIndexRoute = createRoute({ getParentRoute: () => docsRoute, path: "/", component: GettingStarted })

// Task 3 adiciona componentRoute como filha de docsRoute.
const routeTree = rootRoute.addChildren([
  homeRoute,
  docsRoute.addChildren([docsIndexRoute]),
])
```

- [ ] **Step 5: Verificar**

```bash
. ~/.nvm/nvm.sh && nvm use 22 && npm run build:preview
```
Expected: exit 0. `/docs` renderiza o getting started com a sidebar listando as 6 categorias e os 57 nomes. Os links `/docs/components/$slug` ainda vão pra rota inexistente até a Task 3 (ok).

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat(docs): registry de navegação + DocsLayout (sidebar por categoria) + getting started"
```

---

### Task 3: Demo, PropsTable e a rota dinâmica de componente

**Files:**
- Create: `preview/docs/Demo.tsx`
- Create: `preview/docs/PropsTable.tsx`
- Create: `preview/docs/ComponentDocPage.tsx` (auto-descobre páginas por glob)
- Modify: `preview/router.tsx` (anexar `/components/$slug`)

**Interfaces:**
- Consumes: `docsRoute` (Task 2).
- Produces: `<Demo title? description? code children>`, `<PropsTable rows>` com `PropRow = { prop: string; type: string; default?: string; description: string }`, e o contrato de página de componente (default export React component em `preview/docs/components/<slug>/page.tsx`).

- [ ] **Step 1: `preview/docs/Demo.tsx`**

```tsx
import { useState } from "react"
import { CopyButton } from "../components/CopyButton"

type DemoProps = {
  title?: string
  description?: string
  code: string
  children: React.ReactNode
}

export function Demo({ title, description, code, children }: DemoProps) {
  const [showCode, setShowCode] = useState(false)
  return (
    <div className="space-y-3">
      {title ? <h3 className="text-headline font-semibold text-label">{title}</h3> : null}
      {description ? <p className="text-subhead text-label-secondary">{description}</p> : null}
      <div className="overflow-hidden rounded-2xl border border-separator">
        <div className="flex min-h-40 flex-wrap items-center justify-center gap-4 bg-background-secondary p-8">
          {children}
        </div>
        <div className="flex items-center justify-between border-t border-separator bg-background px-3 py-2">
          <button
            onClick={() => setShowCode((v) => !v)}
            className="text-footnote text-label-secondary hover:text-label"
          >
            {showCode ? "Hide code" : "Show code"}
          </button>
          <CopyButton value={code} />
        </div>
        {showCode ? (
          <pre className="overflow-x-auto border-t border-separator bg-background p-4 text-caption-1">
            <code>{code}</code>
          </pre>
        ) : null}
      </div>
    </div>
  )
}
```
> Conferir a API real de `CopyButton` (prop pode ser `value`/`text`) em `preview/components/CopyButton.tsx` e ajustar.

- [ ] **Step 2: `preview/docs/PropsTable.tsx`**

```tsx
import { Table, TableHeader, TableHead, TableRow, TableBody, TableCell } from "@aogusto/arui"

export type PropRow = { prop: string; type: string; default?: string; description: string }

export function PropsTable({ rows }: { rows: PropRow[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Prop</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Default</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((r) => (
          <TableRow key={r.prop}>
            <TableCell className="font-mono text-caption-1">{r.prop}</TableCell>
            <TableCell className="font-mono text-caption-1 text-label-secondary">{r.type}</TableCell>
            <TableCell className="font-mono text-caption-1 text-label-tertiary">{r.default ?? "—"}</TableCell>
            <TableCell className="text-subhead text-label-secondary">{r.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
```
> Conferir os exports reais de `table` em `src/components/ui/table.tsx`. (A célula de default vazio pode usar um traço tipográfico só na tabela; isso é dado técnico, não copy de marketing.)

- [ ] **Step 3: `preview/docs/ComponentDocPage.tsx` (glob auto-discovery)**

```tsx
import { Suspense, lazy, useMemo } from "react"
import { useParams } from "@tanstack/react-router"
import { DOCS_REGISTRY } from "./registry"

const pageModules = import.meta.glob("./components/*/page.tsx")

export function ComponentDocPage() {
  const { slug } = useParams({ from: "/docs/components/$slug" })
  const entry = DOCS_REGISTRY.find((e) => e.slug === slug)

  const Page = useMemo(() => {
    const key = `./components/${slug}/page.tsx`
    const loader = pageModules[key]
    if (!loader) return null
    return lazy(loader as () => Promise<{ default: React.ComponentType }>)
  }, [slug])

  if (!entry) return <p className="text-body text-label-secondary">Unknown component.</p>
  if (!Page)
    return (
      <div className="space-y-2">
        <h1 className="text-title-1 font-bold">{entry.name}</h1>
        <p className="text-body text-label-secondary">Docs for this component are coming soon.</p>
      </div>
    )
  return (
    <Suspense fallback={<p className="text-subhead text-label-tertiary">Loading…</p>}>
      <Page />
    </Suspense>
  )
}
```

- [ ] **Step 4: Anexar a rota dinâmica em `router.tsx`**

```tsx
import { ComponentDocPage } from "./docs/ComponentDocPage"

const componentRoute = createRoute({
  getParentRoute: () => docsRoute,
  path: "components/$slug",
  component: ComponentDocPage,
})

const routeTree = rootRoute.addChildren([
  homeRoute,
  docsRoute.addChildren([docsIndexRoute, componentRoute]),
])
```

- [ ] **Step 5: Verificar**

```bash
. ~/.nvm/nvm.sh && nvm use 22 && npm run build:preview
```
Expected: exit 0. Navegar para `/docs/components/button` mostra o placeholder "coming soon" (a página real vem na Task 4). Sem erro de build.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat(docs): <Demo> + <PropsTable> + rota dinâmica de componente (glob)"
```

---

### Task 4: Página-modelo do Button (o template do fan-out)

**Files:**
- Create: `preview/docs/components/button/meta.ts`
- Create: `preview/docs/components/button/examples/variants.tsx`
- Create: `preview/docs/components/button/examples/sizes.tsx`
- Create: `preview/docs/components/button/examples/with-icon.tsx`
- Create: `preview/docs/components/button/examples/disabled.tsx`
- Create: `preview/docs/components/button/page.tsx`

**Interfaces:**
- Consumes: `<Demo>`, `<PropsTable>`, `PropRow` (Task 3).
- Produces: **o contrato de página que a Task 5 (fan-out) replica para os outros 56.**

- [ ] **Step 1: `meta.ts`**

```ts
import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "button",
  name: "Button",
  category: "Forms & Inputs",
  description: "Botão com variantes de intenção e tamanhos, com suporte a asChild para renderizar como outro elemento.",
  imports: ["Button"],
}
```

- [ ] **Step 2: Exemplos (arquivos autocontidos)**

`examples/variants.tsx`:
```tsx
import { Button } from "@aogusto/arui"

export default function Example() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  )
}
```
`examples/sizes.tsx`:
```tsx
import { Button } from "@aogusto/arui"

export default function Example() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="sm">Small</Button>
      <Button>Default</Button>
      <Button size="lg">Large</Button>
    </div>
  )
}
```
`examples/with-icon.tsx`:
```tsx
import { Button } from "@aogusto/arui"
import { Plus } from "lucide-react"

export default function Example() {
  return (
    <Button>
      <Plus />
      New item
    </Button>
  )
}
```
`examples/disabled.tsx`:
```tsx
import { Button } from "@aogusto/arui"

export default function Example() {
  return <Button disabled>Disabled</Button>
}
```
> Antes de escrever, ler `src/components/ui/button.tsx` para confirmar os nomes reais de `variant`/`size` e ajustar (o `variants` do cva é a fonte da verdade).

- [ ] **Step 3: `page.tsx` (o template)**

```tsx
import { Demo } from "../../Demo"
import { PropsTable, type PropRow } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta } from "./meta"

import Variants from "./examples/variants"
import variantsCode from "./examples/variants.tsx?raw"
import Sizes from "./examples/sizes"
import sizesCode from "./examples/sizes.tsx?raw"
import WithIcon from "./examples/with-icon"
import withIconCode from "./examples/with-icon.tsx?raw"
import Disabled from "./examples/disabled"
import disabledCode from "./examples/disabled.tsx?raw"

const props: PropRow[] = [
  { prop: "variant", type: '"default" | "secondary" | "outline" | "ghost" | "destructive"', default: '"default"', description: "Estilo visual/intenção do botão." },
  { prop: "size", type: '"sm" | "default" | "lg" | "icon"', default: '"default"', description: "Tamanho do botão." },
  { prop: "asChild", type: "boolean", default: "false", description: "Renderiza o filho como o elemento raiz (via Slot), herdando os estilos." },
  { prop: "disabled", type: "boolean", default: "false", description: "Desabilita o botão." },
  { prop: "…props", type: "React.ComponentProps<'button'>", description: "Demais atributos nativos de <button> (onClick, type, etc.)." },
]

export default function ButtonDoc() {
  const importLine = `import { ${meta.imports.join(", ")} } from "@aogusto/arui"`
  return (
    <article className="mx-auto w-full max-w-3xl space-y-10">
      <header className="space-y-2">
        <p className="text-caption-1 font-semibold uppercase tracking-wide text-label-tertiary">{meta.category}</p>
        <h1 className="text-title-1 font-bold text-label">{meta.name}</h1>
        <p className="text-body text-label-secondary">{meta.description}</p>
      </header>

      <div className="flex items-center justify-between rounded-xl border border-separator bg-background-secondary px-3 py-2">
        <code className="font-mono text-caption-1 text-label">{importLine}</code>
        <CopyButton value={importLine} />
      </div>

      <div className="space-y-10">
        <Demo title="Variants" code={variantsCode}><Variants /></Demo>
        <Demo title="Sizes" code={sizesCode}><Sizes /></Demo>
        <Demo title="With icon" code={withIconCode}><WithIcon /></Demo>
        <Demo title="Disabled" code={disabledCode}><Disabled /></Demo>
      </div>

      <section className="space-y-3">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>
        <PropsTable rows={props} />
      </section>
    </article>
  )
}
```

- [ ] **Step 4: Verificar**

```bash
. ~/.nvm/nvm.sh && nvm use 22 && npm run build:preview
```
Expected: exit 0. `/docs/components/button` renderiza: cabeçalho, import copiável, 4 Demos (preview ao vivo + "Show code" com o fonte real + copiar), e a tabela de props. O `?raw` traz o código no build de produção (não só dev).

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat(docs): página-modelo do Button (template de exemplos + props curadas)"
```

---

### Task 5: ⌘K command menu (dogfood do `command`)

**Files:**
- Create: `preview/docs/CommandMenu.tsx`
- Modify: `preview/docs/DocsLayout.tsx` (montar o CommandMenu + gatilho)

**Interfaces:**
- Consumes: `DOCS_REGISTRY` (Task 2), `command` da arui, `useNavigate` do router.

- [ ] **Step 1: `preview/docs/CommandMenu.tsx`**

```tsx
import { useEffect, useState } from "react"
import { useNavigate } from "@tanstack/react-router"
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@aogusto/arui"
import { DOCS_CATEGORIES, DOCS_REGISTRY } from "./registry"

export function CommandMenu() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((v) => !v)
      }
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [])

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search components…" />
      <CommandList>
        <CommandEmpty>No component found.</CommandEmpty>
        {DOCS_CATEGORIES.map((cat) => (
          <CommandGroup key={cat} heading={cat}>
            {DOCS_REGISTRY.filter((e) => e.category === cat).map((e) => (
              <CommandItem
                key={e.slug}
                value={e.name}
                onSelect={() => {
                  setOpen(false)
                  navigate({ to: "/docs/components/$slug", params: { slug: e.slug } })
                }}
              >
                {e.name}
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </CommandDialog>
  )
}
```
> Conferir a API real de `CommandDialog`/`CommandInput`/etc. em `src/components/ui/command.tsx` e ajustar props (ex.: se `CommandDialog` recebe `open`/`onOpenChange`).

- [ ] **Step 2: Montar no `DocsLayout`**

Renderizar `<CommandMenu />` uma vez no `DocsLayout` e adicionar um botão de gatilho na topbar (texto "Search ⌘K") que abre via um estado compartilhado ou simplesmente dispara o mesmo atalho. Opção simples: expor `open`/`setOpen` do CommandMenu via um pequeno botão que faz `setOpen(true)` (elevar o estado para o layout, ou o botão dispara um evento de teclado sintético). Preferir elevar o estado: mover `open`/`setOpen` para o layout e passar como props ao `CommandMenu`, e o botão da topbar faz `onClick={() => setOpen(true)}`.

- [ ] **Step 3: Verificar**

```bash
. ~/.nvm/nvm.sh && nvm use 22 && npm run build:preview
```
Expected: exit 0. ⌘K (ou Ctrl+K) abre a paleta, lista os 57 agrupados, e selecionar navega para a página do componente. O botão da topbar também abre.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat(docs): ⌘K command menu (dogfood do command da arui)"
```

---

### Task 6: Fan-out — popular os 56 componentes restantes

Replicar o contrato da Task 4 para cada slug abaixo (todos menos `button`, já feito). Este é o grosso do conteúdo e roda em fan-out (um agente por componente ou pequenos lotes). **Cada componente segue exatamente a estrutura da página-modelo:**

```
preview/docs/components/<slug>/
├── meta.ts                 # { slug, name (do registry), category (do registry), description, imports }
├── examples/*.tsx          # 3 a 6 exemplos autocontidos, cada um `export default` de um componente, importando de "@aogusto/arui"
└── page.tsx                # header (categoria+nome+descrição) + import copiável + <Demo> por exemplo + <PropsTable> curada
```

**Contrato por componente (obrigatório):**
1. Ler `src/components/ui/<slug>.tsx` para os nomes de export reais, variantes (cva), e props. Importar exatamente esses nomes de `@aogusto/arui`.
2. `meta.description`: uma frase natural, sem travessão.
3. 3 a 6 exemplos cobrindo os usos/variantes/estados relevantes daquele componente (ex.: overlays mostram trigger + conteúdo; inputs mostram estados default/disabled/erro; data-display mostram composições típicas).
4. `page.tsx` idêntico em estrutura ao do Button (header, import copiável, lista de `<Demo>`, seção Props com `<PropsTable>`).
5. **Props TODAS curadas à mão**: listar todas as props relevantes (nome, tipo, default, descrição). Quando o componente for essencialmente um wrapper de um primitivo, listar as props próprias/estilísticas e adicionar uma linha final tipo `{ prop: "…props", type: "React.ComponentProps<typeof PrimitiveX>", description: "Estende <Primitivo> de radix-ui/@base-ui/react." }`.
6. Copy sem travessões; descrever o visual como glassmorphism quando pertinente (sobretudo em `glass-surface`).

**Casos especiais:**
- `sonner`: o exemplo é um `Button` que chama `toast(...)`; a página precisa de um `<Toaster />` montado (montar um `<Toaster />` local no exemplo ou notar que o app já tem um).
- `direction`: é `DirectionProvider` (RTL), sem visual próprio; a página explica o uso (envolver a árvore, `dir="rtl"`) com um exemplo mínimo mostrando um componente espelhado.
- `sidebar`, `resizable`, `chart`, `carousel`, `menubar`, `command`, `calendar`: exemplos mais compostos; manter contidos numa caixa de preview (evitar layouts que estourem a superfície do `<Demo>`).
- `chart` (recharts): usar dados fixos inline (sem `Math.random`).

**Slugs a popular (56):**
glass-surface, button-group, input, input-group, input-otp, textarea, label, field, form, checkbox, radio-group, switch, select, native-select, slider, toggle, toggle-group, combobox, calendar, dialog, alert-dialog, sheet, drawer, popover, tooltip, hover-card, dropdown-menu, context-menu, menubar, command, tabs, breadcrumb, pagination, navigation-menu, sidebar, table, badge, avatar, card, accordion, carousel, chart, progress, skeleton, separator, aspect-ratio, scroll-area, resizable, kbd, empty, item, spinner, alert, collapsible, sonner, direction

- [ ] **Verificação da task:** após cada lote, `. ~/.nvm/nvm.sh && nvm use 22 && npm run build:preview` exit 0. Ao final, todas as 56 páginas existem e buildam; nenhuma rota fica no placeholder "coming soon".

- [ ] **Commit:** por lote (`feat(docs): páginas de <lote>`), não um commit gigante.

---

### Task 7: Fechamento e verificação final

**Files:** nenhum novo (ajustes pontuais se algo escapar).

- [ ] **Step 1: Build completo**

```bash
. ~/.nvm/nvm.sh && nvm use 22 && npm run build:preview
```
Expected: exit 0 com as 57 páginas + `/docs` + `/`.

- [ ] **Step 2: Conferir cobertura**

Toda entrada de `DOCS_REGISTRY` tem um diretório em `preview/docs/components/<slug>/` com `page.tsx`:
```bash
comm -23 <(node -e "…listar slugs do registry…" 2>/dev/null || true) <(ls preview/docs/components) 2>/dev/null || \
for s in $(ls preview/docs/components); do echo "$s"; done | wc -l   # deve ser 57
```
Confirmar 57 diretórios em `preview/docs/components/`.

- [ ] **Step 3: Varredura de estilo**

```bash
grep -rn "liquid glass" preview/docs ; echo "liquidglass_exit=$?"   # esperado: sem matches (exit 1)
grep -rn "—" preview/docs/**/meta.ts preview/docs/GettingStarted.tsx 2>/dev/null ; echo "emdash_exit=$?"  # copy sem travessões
```
Expected: nenhuma menção a "liquid glass" na copy; travessões só em dados técnicos (ex.: célula de default vazio na tabela), não em prosa.

- [ ] **Step 4: Commit final + (opcional) deploy**

```bash
git add -A && git commit -m "feat(docs): fechamento — 57 páginas, build verde" || echo "nada a commitar"
```
O deploy no Vercel dispara no merge para master (fluxo já existente). A integração da branch (merge/PR) é decisão do usuário, como na conversão npm.

---

## Self-Review

**Spec coverage:**
- Rotas (`/`, `/docs`, `/docs/components/$slug`) → Tasks 1, 2, 3.
- Shell (topbar + sidebar por categoria) → Task 2. ⌘K → Task 5.
- `<Demo>` com `?raw` → Task 3. PropsTable curada → Tasks 3 (infra) + 4/6 (conteúdo).
- Página por componente (header, import, N exemplos, props) → Task 4 (modelo) + Task 6 (56 restantes).
- Taxonomia dos 57 → Task 2 (registry). Contagem 1+19+11+5+19+2 = 57.
- Getting started → Task 2. Home preservada → Task 1.
- Build/deploy (showcase-dist, rewrites SPA) → Task 1. Fechamento → Task 7.
- Copy sem travessões / glassmorphism → Global Constraints + Task 7 (varredura).

**Placeholder scan:** os passos de infra trazem código real. A Task 6 é intencionalmente um contrato replicado (fan-out homogêneo sobre 56 itens), com o modelo concreto na Task 4 e o contrato explícito; não é "similar a Task N" vago, é um template + lista fechada. As notas "conferir API real de X" são verificações obrigatórias contra a fonte, não lacunas de conteúdo.

**Type/name consistency:** `PropRow`, `Demo`, `PropsTable`, `DOCS_REGISTRY`, `DOCS_CATEGORIES`, `docsRoute`, `rootRoute`, `ComponentDocPage` usados de forma consistente entre tasks. O contrato de página (`export default` em `components/<slug>/page.tsx`) casa com o glob de `ComponentDocPage`.

**Risco registrado:** as APIs reais de `Sheet`, `CopyButton`, `ThemeToggle`, `CommandDialog`, `Table`, `Button` (variants/sizes) precisam ser conferidas contra `src/`/`preview/` na implementação; o plano marca cada ponto. O build:preview em cada task é o gate que pega divergências.
