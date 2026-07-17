# Glass Highlight System — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Um pill de vidro (glassmorphism) que desliza para o item ativo/destacado, tingido pelo tema, padronizado em toda a lib via um primitivo único.

**Architecture:** Um hook `useGlassHighlight` observa um seletor CSS dentro de um container, mede o retângulo do item casado (MutationObserver + ResizeObserver) e devolve uma geometria; `GlassPill` (framer-motion) desliza um único elemento absoluto com spring. Pattern A (seleção persistente, `variant="glass"` opt-in) e Pattern B (highlight transitório de menu, glass por default) usam o mesmo primitivo. O Tabs atual (layoutId por trigger) é refatorado para usá-lo.

**Tech Stack:** React 19, radix-ui / cmdk / @base-ui/react, framer-motion (já dependency), Tailwind 4, tsup.

## Verificação (regra do repo — não há test runner)

arui **não tem** vitest/RTL/jsdom, e layout (`offsetTop`/`getBoundingClientRect`) retorna 0 em jsdom, então teste unitário de medição é inútil. A verificação de cada tarefa é:
- `npm run typecheck` (tsc -b) verde,
- `npm run build` (tsup) verde,
- tarefas que tocam `preview/`: também `npm run build:preview` (tsc -b && vite build) verde.
- A verificação **comportamental/visual** (o pill desliza, segue o teclado, some quando some o highlight, claro+escuro) é consolidada na **Task 15** via Playwright ao vivo contra o dev server, feita pelo controlador. Não duplicar dev-server por subagente.

Node 22 obrigatório para build/dev: `. ~/.nvm/nvm.sh && nvm use 22` antes de qualquer `npm run`.

## Global Constraints

- **Versão:** `0.2.0` (não publicado; este sistema entra junto do theming/tabs já commitados). Não bumpar.
- **framer-motion** é dependency e deve continuar **externalizado** no `dist` (tsup externaliza deps por padrão) — não inflar o bundle.
- **Um mecanismo só:** `useGlassHighlight` + `GlassPill`. É **proibido** manter/criar o idioma `layoutId`-por-item (o do Tabs atual é removido na Task 2).
- **Sem `backdrop-filter` no pill** (o frost vem do container). O pill posiciona via `transform` (x/y) + width/height.
- **Composição:** container vira `relative`; `GlassPill` é o **primeiro filho**; conteúdo do item ativo fica acima (o pill é `z-0`). O pill nunca cobre o texto de item nenhum.
- **`prefers-reduced-motion`:** spring vira salto instantâneo (`useReducedMotion()`).
- **Tokens:** fill do pill = `color-mix(in oklch, var(--glass-tint, var(--primary)) 18%, rgb(var(--glass-regular) / 0.82))`. Nunca hex em className; nunca arbitrary value de token já registrado.
- **Path alias `@/`**, sem `../../`. TypeScript strict, **sem `any`**.
- **Copy** (docs/changelog/comentários) sem travessões "—"; a técnica é **glassmorphism**, nunca "liquid glass".
- **Pattern B (menus): remover a fonte DUPLA de highlight** — a classe no item **e** a regra wildcard descendente no Content (`**:data-[slot$=-item]:...`). As duas.
- **Não fundir** o pill com estados de seleção persistida (`data-state=checked`, chips, check/dot) nem com o `NavigationMenuIndicator` nativo.

---

### Task 1: Primitivo `useGlassHighlight` + `GlassPill`

**Files:**
- Create: `src/components/ui/glass-highlight.tsx`
- Modify: `src/index.ts` (barrel export)

**Interfaces:**
- Produces:
  - `useGlassHighlight(options: UseGlassHighlightOptions): { geometry: PillGeometry | null }`
  - `GlassPill({ geometry, className, style }: { geometry: PillGeometry | null; className?: string; style?: React.CSSProperties }): JSX.Element`
  - `GLASS_PILL_STYLE: React.CSSProperties`
  - types `UseGlassHighlightOptions`, `PillGeometry`

- [ ] **Step 1: Escrever o módulo completo**

`src/components/ui/glass-highlight.tsx`:
```tsx
"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"

import { cn } from "@/lib/utils"

// Fonte única do visual do pill (glassmorphism, tingido pelo tema).
// Sem backdrop-filter aqui de propósito: o frost vem do container; assim o
// transform do slide não derruba o efeito.
export const GLASS_PILL_STYLE: React.CSSProperties = {
  background:
    "color-mix(in oklch, var(--glass-tint, var(--primary)) 18%, rgb(var(--glass-regular) / 0.82))",
  boxShadow:
    "inset 0 1px 0 0 rgb(255 255 255 / 0.55), inset 0 0 0 0.5px rgb(255 255 255 / 0.15), 0 2px 8px -3px rgb(0 0 0 / 0.28)",
}

export interface PillGeometry {
  x: number
  y: number
  width: number
  height: number
  radius: string
}

export interface UseGlassHighlightOptions {
  /** container que hospeda os itens (coordinate frame; precisa ser position:relative) */
  containerRef: React.RefObject<HTMLElement | null>
  /** seletor CSS do item ativo/destacado, ex: '[data-highlighted]', '[data-state="active"]' */
  activeSelector: string
  /** quando o nó de medição não é o próprio containerRef (ex: [cmdk-list-sizer]) */
  resolveContainer?: (root: HTMLElement) => HTMLElement | null
  /** 'offset' (default, scroll-safe) ou 'rect' quando há wrapper relative intermediário */
  measure?: "offset" | "rect"
  /** copia o border-radius do item pro pill (default true) */
  matchRadius?: boolean
  /** false desliga e não posiciona (ex: ToggleGroup multi) */
  enabled?: boolean
  /** recálculos extras (orientation, breakpoint) */
  deps?: React.DependencyList
}

// Extrai os nomes de atributo de um seletor pra filtrar o MutationObserver.
// '.active' → observa 'class'. Sem match → undefined (observa todos).
function attrFilterFrom(selector: string): string[] | undefined {
  const attrs = Array.from(selector.matchAll(/\[([a-zA-Z0-9_-]+)/g)).map((m) => m[1])
  if (selector.includes(".")) attrs.push("class")
  return attrs.length ? Array.from(new Set(attrs)) : undefined
}

export function useGlassHighlight(
  options: UseGlassHighlightOptions
): { geometry: PillGeometry | null } {
  const {
    containerRef,
    activeSelector,
    resolveContainer,
    measure = "offset",
    matchRadius = true,
    enabled = true,
    deps = [],
  } = options
  const [geometry, setGeometry] = React.useState<PillGeometry | null>(null)

  React.useLayoutEffect(() => {
    if (!enabled || typeof document === "undefined") {
      setGeometry(null)
      return
    }
    const root = containerRef.current
    if (!root) return
    const container = resolveContainer ? resolveContainer(root) : root
    if (!container) return

    const measureNow = () => {
      const item = container.querySelector<HTMLElement>(activeSelector)
      if (!item) {
        setGeometry(null)
        return
      }
      const width = item.offsetWidth
      const height = item.offsetHeight
      let x: number
      let y: number
      if (measure === "rect") {
        const cr = container.getBoundingClientRect()
        const ir = item.getBoundingClientRect()
        x = ir.left - cr.left + container.scrollLeft
        y = ir.top - cr.top + container.scrollTop
      } else {
        x = item.offsetLeft
        y = item.offsetTop
      }
      const radius = matchRadius ? getComputedStyle(item).borderRadius : ""
      setGeometry({ x, y, width, height, radius })
    }

    measureNow()

    const mo = new MutationObserver(measureNow)
    mo.observe(container, {
      attributes: true,
      attributeFilter: attrFilterFrom(activeSelector),
      childList: true,
      subtree: true,
    })
    const ro = new ResizeObserver(measureNow)
    ro.observe(container)
    window.addEventListener("resize", measureNow)

    return () => {
      mo.disconnect()
      ro.disconnect()
      window.removeEventListener("resize", measureNow)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef, activeSelector, resolveContainer, measure, matchRadius, enabled, ...deps])

  return { geometry }
}

export function GlassPill({
  geometry,
  className,
  style,
}: {
  geometry: PillGeometry | null
  className?: string
  style?: React.CSSProperties
}) {
  const reduce = useReducedMotion()
  const isReady = geometry != null
  return (
    <motion.span
      aria-hidden="true"
      data-slot="glass-pill"
      className={cn(
        "pointer-events-none absolute left-0 top-0 z-0 border border-white/40 dark:border-white/15",
        className
      )}
      style={{ ...GLASS_PILL_STYLE, borderRadius: geometry?.radius || undefined, ...style }}
      initial={false}
      animate={
        isReady
          ? { opacity: 1, x: geometry.x, y: geometry.y, width: geometry.width, height: geometry.height }
          : { opacity: 0 }
      }
      transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 400, damping: 34 }}
    />
  )
}
```

- [ ] **Step 2: Exportar no barrel**

Em `src/index.ts`, adicionar (na ordem alfabética/agrupamento existente):
```ts
export * from "./components/ui/glass-highlight"
```

- [ ] **Step 3: Typecheck + build**

Run: `. ~/.nvm/nvm.sh && nvm use 22 && npm run typecheck && npm run build`
Expected: tsc `Found 0 errors`; tsup emite `dist/index.js`+`.d.ts`. Conferir que `framer-motion` continua bare import no `dist/index.js` (externalizado), não in-lined.

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/glass-highlight.tsx src/index.ts
git commit -m "feat(glass-highlight): primitivo useGlassHighlight + GlassPill"
```

---

### Task 2: Refatorar Tabs para o primitivo

**Files:**
- Modify: `src/components/ui/tabs.tsx`

**Interfaces:**
- Consumes: `useGlassHighlight`, `GlassPill` (Task 1).

**Contexto:** hoje o Tabs glass usa `motion.span` com `layoutId` montado dentro de cada `TabsTrigger` ativo (tabs.tsx:128-137) + `GLASS_PILL_STYLE` local (tabs.tsx:96-101) + `TabsRootContext` só pra calcular `isActive`. Trocar por UM pill no `TabsList`.

- [ ] **Step 1: Remover o idioma antigo**

- Deletar `GLASS_PILL_STYLE` local (tabs.tsx:91-101) — agora vem do primitivo.
- Em `TabsTrigger`: remover o bloco `{isActive && root && (<motion.span layoutId=... />)}` (tabs.tsx:128-137) e o cálculo `isActive`/uso de `TabsRootContext` que só servia pra isso. Manter o `<span className="relative z-10 ...">{children}</span>` (garante texto acima do pill). Manter `data-[state=active]:text-foreground` e o `z-10` do trigger glass.
- Remover o import de `motion` do framer-motion se não for mais usado direto aqui.
- `TabsRootContext` (activeValue + pillId): remover se ficar órfão após a mudança.

- [ ] **Step 2: `relative` em todas as variants + pill no TabsList**

- No `tabsListVariants` (cva base, tabs.tsx:56), garantir `relative` na string base (hoje só a glass é `relative`). Adicionar `relative` ao base e remover o `relative` redundante da glass (ou deixar, é idempotente).
- Em `TabsList`, criar `const listRef = React.useRef<HTMLDivElement>(null)`, passar `ref={listRef}` ao `TabsPrimitive.List`, e:
```tsx
const { geometry } = useGlassHighlight({
  containerRef: listRef,
  activeSelector: '[data-state="active"]',
  measure: "rect",
  enabled: resolved === "glass",
})
```
- Renderizar `{resolved === "glass" && <GlassPill geometry={geometry} className="rounded-xl" />}` como **primeiro filho** dentro do `TabsPrimitive.List` (antes de `{props.children}` — passar children explicitamente ou usar a composição do Radix; se `TabsPrimitive.List` não aceitar filhos extras + children, envolver: renderizar `<GlassPill/>` e depois `{children}`).

> Nota de orientação: `measure: "rect"` já lida com horizontal e vertical (mede o rect real do trigger ativo).

- [ ] **Step 3: Typecheck + build**

Run: `. ~/.nvm/nvm.sh && nvm use 22 && npm run typecheck && npm run build`
Expected: 0 erros; build ok.

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/tabs.tsx
git commit -m "refactor(tabs): glass pill via useGlassHighlight (remove layoutId por trigger)"
```

---

### Task 3: ToggleGroup — variant `glass` (single)

**Files:**
- Modify: `src/components/ui/toggle-group.tsx`

**Interfaces:** Consumes `useGlassHighlight`, `GlassPill`.

**Recon:** container = `ToggleGroup` root (`ToggleGroupPrimitive.Root`, ~linha 36-54; hoje sem position). Item ativo = `[data-state="on"]` (radix). Highlight atual a remover no caminho single: `data-[state=on]:bg-muted` (toggle-group.tsx:75). Manter `hover:bg-muted`, foco, e no multi manter tudo como está. `data-[state=on]` dispara em single E multi → gate por `type`.

- [ ] **Step 1: Wiring**

- Adicionar `relative` na className do root.
- Ler `type` das props do `ToggleGroup` (já existe no context/props do Root). Criar `rootRef` e:
```tsx
const { geometry } = useGlassHighlight({
  containerRef: rootRef,
  activeSelector: '[data-state="on"]',
  enabled: type === "single",
})
```
- Renderizar `{type === "single" && <GlassPill geometry={geometry} />}` como primeiro filho do Root.
- Adicionar `variant`/comportamento: quando single, remover o fundo sólido do ativo — condicionar `data-[state=on]:bg-muted` para aplicar só quando multi (ex.: mover essa classe do `ToggleGroupItem` base para um caminho multi, ou usar um data-attr do grupo). Manter texto/foco.

> Se o `type` não estiver acessível no componente que renderiza o Root, derivar via prop (`ToggleGroup` recebe `type` na API do Radix — está nas props).

- [ ] **Step 2: Typecheck + build**

Run: `. ~/.nvm/nvm.sh && nvm use 22 && npm run typecheck && npm run build`
Expected: 0 erros.

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/toggle-group.tsx
git commit -m "feat(toggle-group): glass highlight no single-select"
```

---

### Task 4: Sidebar — glass highlight + fix `data-active`

**Files:**
- Modify: `src/components/ui/sidebar.tsx`

**Interfaces:** Consumes `useGlassHighlight`, `GlassPill`.

**Recon:** container = `SidebarMenu` e cada `SidebarMenuSub` (uma instância por nível). Item ativo = `[data-active="true"]`. **Bug pré-existente (blocker):** as classes usam `data-active:` que no Tailwind v4 compila `[data-active]` (presença) e React sempre renderiza `data-active="false"` → hoje pinta TODOS os itens. Trocar por `data-[active=true]:`. `SidebarMenuItem` já é `relative` → **`measure: "rect"`**.

- [ ] **Step 1: Fix do seletor**

Em `sidebar.tsx`, trocar todas as ocorrências de `data-active:` por `data-[active=true]:` (SidebarMenuButton, SidebarMenuSubButton). Confirmar com grep que não sobrou `data-active:` "presença".

- [ ] **Step 2: Wiring**

- Em `SidebarMenu` (o `<ul>`): `relative`, `menuRef`, e:
```tsx
const { geometry } = useGlassHighlight({
  containerRef: menuRef,
  activeSelector: '[data-active="true"]',
  measure: "rect",
})
```
`<GlassPill geometry={geometry} />` como primeiro filho.
- Repetir para `SidebarMenuSub` (instância própria — outra ref/hook/pill).
- Remover o fundo sólido do ativo (`data-[active=true]:bg-sidebar-accent` ou equivalente) do button, mantendo cor/peso de texto. Conteúdo do button com `relative z-10` se necessário (é flex, geralmente já resolve).

- [ ] **Step 3: Typecheck + build**

Run: `. ~/.nvm/nvm.sh && nvm use 22 && npm run typecheck && npm run build`
Expected: 0 erros.

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/sidebar.tsx
git commit -m "feat(sidebar): glass highlight no item ativo + fix data-active (pintava todos)"
```

---

### Task 5: NavigationMenu — glass highlight + fix seletores mortos

**Files:**
- Modify: `src/components/ui/navigation-menu.tsx`

**Interfaces:** Consumes `useGlassHighlight`, `GlassPill`.

**Recon:** container = `NavigationMenuList`. Item ativo = `[data-active]` (presença, Radix emite no Link ativo; `aria-current="page"` espelha). `NavigationMenuItem` já é `relative` → **`measure: "rect"`**. **Bug (blocker):** seletores `data-open`/`data-popup-open` no Trigger e `data-[active=true]` no Link não existem no output do `@radix-ui/react-navigation-menu` (que emite `data-state=open|closed` e `data-active` presença). Corrigir. **Não tocar** no `NavigationMenuIndicator` (linhas ~141-157).

- [ ] **Step 1: Fix dos seletores**

Trocar `data-open`/`data-popup-open` por `data-[state=open]` onde marcavam trigger aberto; o highlight do Link ativo passa a usar `data-active` (presença) — remover o `data-[active=true]` que não casa. Confirmar contra o DOM real (grep no `node_modules/@radix-ui/react-navigation-menu/dist/index.mjs`).

- [ ] **Step 2: Wiring**

Em `NavigationMenuList`: `relative`, `listRef`, `useGlassHighlight({ containerRef: listRef, activeSelector: "[data-active]", measure: "rect" })`, `<GlassPill/>` primeiro filho. Remover o fundo sólido do ativo, manter texto.

- [ ] **Step 3: Typecheck + build**

Run: `. ~/.nvm/nvm.sh && nvm use 22 && npm run typecheck && npm run build`
Expected: 0 erros.

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/navigation-menu.tsx
git commit -m "feat(navigation-menu): glass highlight + fix seletores de estado mortos"
```

---

### Task 6: Pagination — variant `glass`

**Files:**
- Modify: `src/components/ui/pagination.tsx`

**Interfaces:** Consumes `useGlassHighlight`, `GlassPill`.

**Recon:** container = `PaginationContent` (o `<ul>`). Item ativo = `[aria-current="page"]` (o `PaginationLink` com `isActive`). O ativo hoje é `Button variant="outline"` → fundo `border-border bg-background shadow-xs` (dark: `border-input bg-input/30`). **Neutralizar isso só no `PaginationLink`** (className local), nunca no `buttonVariants`.

- [ ] **Step 1: Wiring**

- `PaginationContent`: `relative`, `contentRef`, `useGlassHighlight({ containerRef: contentRef, activeSelector: '[aria-current="page"]' })` (offset), `<GlassPill/>` primeiro filho.
- No `PaginationLink` ativo, remover/neutralizar via className local as classes de fundo/borda do outline (deixar só cor/peso de texto), mantendo `aria-current="page"`. Conteúdo com `relative z-10` se preciso.

- [ ] **Step 2: Typecheck + build**

Run: `. ~/.nvm/nvm.sh && nvm use 22 && npm run typecheck && npm run build`
Expected: 0 erros.

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/pagination.tsx
git commit -m "feat(pagination): glass highlight na página ativa"
```

---

### Task 7: DropdownMenu — glass highlight (default)

**Files:**
- Modify: `src/components/ui/dropdown-menu.tsx`

**Interfaces:** Consumes `useGlassHighlight`, `GlassPill`.

**Recon:** container = `DropdownMenuContent` + **cada** `DropdownMenuSubContent` (instância própria por superfície). Item destacado = `[data-highlighted]` (radix, presença). `measure: "offset"`. **Remover a fonte dupla:** a classe no item (`focus:bg-accent`/`data-[highlighted]:bg-accent` no `DropdownMenuItem`) **e** a regra wildcard no Content (`**:data-[slot$=-item]:...`, se existir). Manter cor de texto/ícone; destructive mantém texto vermelho.

- [ ] **Step 1: Wiring do Content**

Em `DropdownMenuContent`: adicionar `relative` (o Content já pode ter position via Radix Popper wrapper — o Content em si é o nó estilizado; adicionar `relative` nele). `contentRef`, `useGlassHighlight({ containerRef: contentRef, activeSelector: "[data-highlighted]" })`, `<GlassPill/>` como primeiro filho (antes dos itens).

- [ ] **Step 2: Wiring do SubContent**

Mesma coisa em `DropdownMenuSubContent` (ref/hook/pill próprios).

- [ ] **Step 3: Remover highlight sólido + indicador de submenu aberto**

- Remover `bg-accent`/`text-accent-foreground` ligados a `data-[highlighted]`/`focus` no `DropdownMenuItem` (e no CheckboxItem/RadioItem/SubTrigger). Manter texto legível.
- Remover a regra wildcard `**:data-[slot$=-item]:...` do Content se existir.
- No `DropdownMenuSubTrigger`, adicionar indicador não-pill de submenu aberto: `data-[state=open]:bg-accent/40` (fundo tênue).
- Conteúdo dos itens com `relative z-10` se necessário (itens são flex — geralmente ok).

- [ ] **Step 4: Typecheck + build**

Run: `. ~/.nvm/nvm.sh && nvm use 22 && npm run typecheck && npm run build`
Expected: 0 erros.

- [ ] **Step 5: Commit**

```bash
git add src/components/ui/dropdown-menu.tsx
git commit -m "feat(dropdown-menu): glass highlight por default (remove highlight sólido duplicado)"
```

---

### Task 8: ContextMenu — glass highlight (default)

**Files:**
- Modify: `src/components/ui/context-menu.tsx`

**Interfaces:** Consumes `useGlassHighlight`, `GlassPill`.

**Recon:** igual ao DropdownMenu. container = `ContextMenuContent` + cada `ContextMenuSubContent`. `[data-highlighted]`, offset. Remover dup (classe do item + wildcard no Content). Submenu aberto: `data-highlighted` some ao entrar no SubContent, mas o sub-trigger mantém `data-[state="open"]` → indicador não-pill `data-[state=open]:bg-accent/40`.

- [ ] **Step 1: Wiring Content + SubContent** (uma instância de hook+pill por superfície), igual Task 7.
- [ ] **Step 2: Remover highlight sólido duplicado + indicador de submenu aberto** (`data-[state=open]:bg-accent/40` no SubTrigger).
- [ ] **Step 3: Typecheck + build**

Run: `. ~/.nvm/nvm.sh && nvm use 22 && npm run typecheck && npm run build`
Expected: 0 erros.

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/context-menu.tsx
git commit -m "feat(context-menu): glass highlight por default"
```

---

### Task 9: Menubar — glass highlight (default): itens + barra do topo

**Files:**
- Modify: `src/components/ui/menubar.tsx`

**Interfaces:** Consumes `useGlassHighlight`, `GlassPill`.

**Recon:** itens: `MenubarContent` + cada `MenubarSubContent` (`[data-highlighted]`, offset). Topo: os `MenubarTrigger` vivem no `MenubarMenu`/root (barra horizontal); o `data-highlighted` do topo hoje é órfão (nenhuma classe consome). `matchRadius` resolve `MenubarItem` `rounded-sm` vs `CheckboxItem`/`RadioItem` `rounded-md`. Remover dup nos itens.

- [ ] **Step 1: Wiring dos Contents** (itens) — `MenubarContent` + `MenubarSubContent`, igual Task 7 (`matchRadius` default true já cobre os raios distintos). Indicador de submenu aberto no `MenubarSubTrigger` (`data-[state=open]:bg-accent/40`). Remover dup.
- [ ] **Step 2: Wiring da barra do topo** — a `Menubar` root (`relative`) hospeda os `MenubarTrigger`. `rootRef`, `useGlassHighlight({ containerRef: rootRef, activeSelector: "[data-highlighted]" })` (offset), `<GlassPill/>` primeiro filho. Se o trigger aberto usar `data-state=open` além de highlight, garantir que o pill siga o `data-highlighted` (o open some do highlight — aceitável, o Content aberto já indica).
- [ ] **Step 3: Typecheck + build**

Run: `. ~/.nvm/nvm.sh && nvm use 22 && npm run typecheck && npm run build`
Expected: 0 erros.

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/menubar.tsx
git commit -m "feat(menubar): glass highlight nos itens e na barra do topo"
```

---

### Task 10: Select — glass highlight (default)

**Files:**
- Modify: `src/components/ui/select.tsx`

**Interfaces:** Consumes `useGlassHighlight`, `GlassPill`.

**Recon:** container = `SelectViewport` (o Radix **já seta `position:relative` inline** — NÃO adicionar `relative` de novo/conflitar; usar como está). Item destacado = `[data-highlighted]`, offset. Remover dup (classe do `SelectItem` + wildcard no Content se houver). Não confundir com `data-state=checked` (seleção persistida, mantém o check indicator).

- [ ] **Step 1: Wiring**

`viewportRef` no `SelectViewport`; `useGlassHighlight({ containerRef: viewportRef, activeSelector: "[data-highlighted]" })`; `<GlassPill/>` primeiro filho do Viewport. Não adicionar `relative` (já é).

- [ ] **Step 2: Remover highlight sólido duplicado** no `SelectItem` (`focus:bg-accent`/`data-[highlighted]:bg-accent`) e wildcard no Content. Manter o check de item selecionado.

- [ ] **Step 3: Typecheck + build**

Run: `. ~/.nvm/nvm.sh && nvm use 22 && npm run typecheck && npm run build`
Expected: 0 erros.

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/select.tsx
git commit -m "feat(select): glass highlight por default"
```

---

### Task 11: Command — glass highlight (default, cmdk)

**Files:**
- Modify: `src/components/ui/command.tsx`

**Interfaces:** Consumes `useGlassHighlight`, `GlassPill`.

**Recon:** primitivo = cmdk. Item destacado = `[data-selected="true"]` (cmdk sempre renderiza "true"/"false"). O nó de medição é o `[cmdk-list-sizer]` interno (não ref-ável direto) → usar `resolveContainer`. `childList:true` do hook cobre a reordenação de nós ao filtrar; `isReady=false` quando a lista zera → pill some. Remover dup (classe do `CommandItem` + wildcard se houver).

- [ ] **Step 1: Wiring com resolveContainer**

No `CommandList` (ou no wrapper que envolve a lista), pegar um `ref` para um ancestral estável e:
```tsx
const listRef = React.useRef<HTMLDivElement>(null)
const { geometry } = useGlassHighlight({
  containerRef: listRef,
  activeSelector: '[data-selected="true"]',
  resolveContainer: (root) => root.querySelector<HTMLElement>("[cmdk-list-sizer]") ?? root,
})
```
Renderizar `<GlassPill geometry={geometry} />` dentro do `[cmdk-list-sizer]` como primeiro filho. Como o sizer é injetado pelo cmdk, a alternativa é renderizar o pill como primeiro filho do `CommandList` e garantir que o `resolveContainer` aponte pro sizer para MEDIR — mas o pill precisa estar no MESMO coordinate frame que ele mede. Solução: tornar `CommandList` (ou o sizer) `relative` e posicionar o pill relativo ao nó medido. Confirmar no DOM (Playwright) que o pill acompanha o item; se o sizer não aceitar filho injetado, medir via `rect` contra o `CommandList` e pôr o pill no `CommandList` (`relative`).

> Decisão do implementador validada na Task 15: `offset` contra `[cmdk-list-sizer]` OU `rect` contra `CommandList`. Documentar o que ficou.

- [ ] **Step 2: Remover highlight sólido duplicado** (`data-[selected=true]:bg-accent` no `CommandItem` + wildcard). Manter texto.

- [ ] **Step 3: Typecheck + build**

Run: `. ~/.nvm/nvm.sh && nvm use 22 && npm run typecheck && npm run build`
Expected: 0 erros.

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/command.tsx
git commit -m "feat(command): glass highlight por default (cmdk data-selected)"
```

---

### Task 12: Combobox — glass highlight (default, base-ui)

**Files:**
- Modify: `src/components/ui/combobox.tsx`

**Interfaces:** Consumes `useGlassHighlight`, `GlassPill`.

**Recon:** primitivo = `@base-ui/react` (NÃO herda do Command). Item destacado = `[data-highlighted]` (presença, coincide com radix por implementação). container = `ComboboxList` (adicionar `relative`), offset. Remover dup. Chips de multi-seleção são seleção persistida — não confundir.

- [ ] **Step 1: Wiring** no `ComboboxList` (`relative`, `listRef`, hook com `[data-highlighted]`, `<GlassPill/>` primeiro filho).
- [ ] **Step 2: Remover highlight sólido duplicado** no item + wildcard.
- [ ] **Step 3: Typecheck + build**

Run: `. ~/.nvm/nvm.sh && nvm use 22 && npm run typecheck && npm run build`
Expected: 0 erros.

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/combobox.tsx
git commit -m "feat(combobox): glass highlight por default (base-ui data-highlighted)"
```

---

### Task 13: docs-sidebar (dogfood do primitivo)

**Files:**
- Modify: `preview/docs/DocsLayout.tsx`

**Interfaces:** Consumes `useGlassHighlight`, `GlassPill` (via `@aogusto/arui`).

**Recon:** o `SidebarNav` do site (não é componente arui). Links do `@tanstack/react-router` ganham a classe `.active`. container = o `<nav>` raiz (`relative`; grupos internos são `position:static`), `activeSelector: ".active"`, offset. Uma instância só (`.active` é único por vez). **Dedup:** `guideLinkClass` (bloco de classe idêntico nas linhas 12-13 e 44) — extrair uma constante única e usar nos dois lugares.

- [ ] **Step 1: Dedup do guideLinkClass** — uma constante, usada nos Links de Guides e de categoria.
- [ ] **Step 2: Wiring** — `import { useGlassHighlight, GlassPill } from "@aogusto/arui"`, `navRef` no `<nav>` (`relative`), `useGlassHighlight({ containerRef: navRef, activeSelector: ".active" })`, `<GlassPill/>` primeiro filho. Remover o `[&.active]:bg-fill` (o pill substitui o fundo), manter `[&.active]:font-medium [&.active]:text-label`.
- [ ] **Step 3: build:preview**

Run: `. ~/.nvm/nvm.sh && nvm use 22 && npm run build:preview`
Expected: tsc 0 erros + vite build ok.

- [ ] **Step 4: Commit**

```bash
git add preview/docs/DocsLayout.tsx
git commit -m "feat(docs): glass highlight na sidebar do site (dogfood)"
```

---

### Task 14: Docs (exemplos + design guide) + MCP manifest

**Files:**
- Create: `preview/docs/components/toggle-group/examples/glass.tsx`, `.../sidebar/examples/glass.tsx`, `.../navigation-menu/examples/glass.tsx`, `.../pagination/examples/glass.tsx` (conforme a estrutura existente de examples)
- Modify: a página/registry desses componentes para incluir o exemplo glass; a página do design guide (`preview/docs/DesignPage.tsx` ou guia); `mcp/knowledge/design-guide.md`
- Regenerate: `mcp/manifest.json`

- [ ] **Step 1: Exemplos glass** dos 4 componentes do Pattern A (usar `variant="glass"`). Seguir o padrão de `preview/docs/components/tabs/examples/glass.tsx`. Para o Pattern B, adicionar uma nota "glass highlight por default" na intro de cada página (Dropdown/Context/Menubar/Select/Command/Combobox) — sem exemplo novo (já é o comportamento).
- [ ] **Step 2: Seção "Glass highlight"** no design guide (o que é, quando aparece, `variant="glass"` no Pattern A vs default nos menus, o primitivo exportado). Mesma seção resumida em `mcp/knowledge/design-guide.md`. Copy sem travessões, "glassmorphism".
- [ ] **Step 3: Regenerar manifest**

Run: `. ~/.nvm/nvm.sh && nvm use 22 && npm run build:manifest && npm run build:preview`
Expected: manifest válido (conferir contagem e que os exemplos novos entraram); build:preview verde.

- [ ] **Step 4: Commit**

```bash
git add preview mcp
git commit -m "docs(glass-highlight): exemplos, seção no design guide e regen do manifest"
```

---

### Task 15: Verificação Playwright ao vivo + CHANGELOG + versão

**Files:**
- Modify: `CHANGELOG.md`

**Feito pelo controlador (não um implementer isolado), pois exige UM dev server.**

- [ ] **Step 1: Subir o dev server** (`npm run dev`, Node 22) e, via Playwright, para CADA alvo verificar em claro E escuro:
  - Pattern A (tabs/toggle-group/sidebar/navigation-menu/pagination): pill no ativo no load; ao trocar (foco+clique, Radix ativa no foco), o pill DESLIZA (não crossfade/pisca); lê como vidro nos dois modos.
  - Pattern B (dropdown/context/menubar/select/command/combobox): abrir; o pill segue teclado (setas) e hover; some quando nada destacado / lista vazia (Command filtrando pra zero); submenu aberto mantém o indicador sutil; sem duplo highlight; texto legível (inclusive destructive).
  - Fixes: Sidebar não pinta todos; NavigationMenu com highlight funcional.
  - `prefers-reduced-motion`: pill salta.
- [ ] **Step 2:** Anotar punch list dos defeitos encontrados; abrir fix tasks (SDD) para cada Critical/Important antes do merge.
- [ ] **Step 3: CHANGELOG** — entrada 0.2.0 destacando a **mudança visual** (menus glass por default), os novos `variant="glass"`, o primitivo exportado, e os fixes de seletor (Sidebar/NavigationMenu).

```bash
git add CHANGELOG.md
git commit -m "docs(changelog): glass highlight system (v0.2.0)"
```

---

## Self-Review (feito)

- **Cobertura da spec:** primitivo (T1), Tabs refactor (T2), Pattern A ×4 (T3-T6), Pattern B ×6 (T7-T12), docs-sidebar (T13), docs+MCP (T14), verificação+changelog (T15). Todos os alvos da spec têm tarefa.
- **Placeholders:** nenhum TODO/TBD; código do primitivo completo; recipes com valores concretos do recon.
- **Consistência de tipos:** `useGlassHighlight`/`GlassPill`/`PillGeometry`/`GLASS_PILL_STYLE` definidos na T1 e consumidos com a mesma assinatura em todas as tarefas.
- **Riscos conhecidos deixados explícitos para validar na T15:** Command (offset vs rect / onde ancorar o pill), submenu aberto (indicador não-pill).
