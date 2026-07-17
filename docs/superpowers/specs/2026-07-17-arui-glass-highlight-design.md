# Design — Sistema de Glass Highlight (v0.2.0)

**Data:** 2026-07-17
**Repo:** `~/workspace/arui`
**Branch:** `feat/glass-highlight`
**Status:** aprovado, pronto para plano

## Objetivo

Padronizar em toda a lib um "glass highlight": um pill de vidro (glassmorphism) que desliza suavemente para o item ativo/destacado entre irmãos, tingido pelo tema (`--glass-tint`), animado com spring. Entra no release **0.2.0** ainda não publicado (junto do theming e do Tabs glass já commitados). Publicar 0.2.0 cobre 0.1.1 + 0.2.0 + este sistema.

## Decisões travadas (brainstorming + recon)

1. **Escopo completo (Pattern A + Pattern B).**
   - **Pattern A — seleção persistente (variant `glass` opt-in, como o Tabs):** ToggleGroup (single), Sidebar, NavigationMenu, Pagination. Refatorar o **Tabs** para usar o primitivo.
   - **Pattern B — highlight transitório (glass por DEFAULT, sem prop):** DropdownMenu, ContextMenu, Menubar, Select, Command, Combobox.
   - **Consumidor de referência (fora da lib):** a sidebar do próprio site de docs (`preview/docs/DocsLayout.tsx`).
2. **Um único mecanismo.** Nenhum primitivo subjacente (radix-ui, cmdk, base-ui, TanStack Router) expõe callback de highlight; todos materializam o estado ativo como atributo no DOM. Logo A e B usam o **mesmo hook** que observa um seletor CSS num container, mede o rect do item casado e posiciona um pill absoluto único. **Abandonar `layoutId`-por-item em todo o sistema, inclusive no Tabs atual.**
3. **Menus glass por default** = mudança visual para quem usa 0.1.x (breaking visual). Fica no pre-1.0 `0.2.0` com nota alta no CHANGELOG.
4. **framer-motion** já é dependency (0.2.0). O primitivo usa `useReducedMotion()` + easing HIG.
5. Copy sem travessões; "glassmorphism", nunca "liquid glass".

## Não-objetivos (v0.2.0)

- Gerência de light/dark pelo provider (continua na classe `.dark` do consumidor).
- `NavigationMenuIndicator` (indicador nativo do Radix, propósito diferente): não mexer, não fundir.
- Corrigir os seletores `data-open`/`data-popup-open` das animações de abrir/fechar Content (ticket separado; ortogonal ao pill).
- Lazy-load do framer-motion; editor visual de tema.

---

## Arquitetura

### 1. Primitivo — `useGlassHighlight` + `GlassPill` (`src/components/ui/glass-highlight.tsx`)

Fonte única do motion e do estilo do pill (o `GLASS_PILL_STYLE` sai do `tabs.tsx` e passa a viver aqui).

```ts
interface UseGlassHighlightOptions {
  containerRef: React.RefObject<HTMLElement | null>
  activeSelector: string          // ex: '[data-state="active"]', '[data-active="true"]',
                                   // '[data-highlighted]', '[data-selected="true"]', '[aria-current="page"]'
  resolveContainer?: (root: HTMLElement) => HTMLElement | null
                                   // p/ nó de medição não ref-ável (ex: [cmdk-list-sizer] do Command)
  measure?: "offset" | "rect"      // default "offset" (offsetTop/Left/W/H — scroll-safe, desconta padding/border).
                                   // "rect" (getBoundingClientRect diff + scrollTop) SÓ quando há wrapper
                                   // intermediário position:relative entre container e item (Sidebar, NavigationMenu).
  matchRadius?: boolean            // default true — copia getComputedStyle(item).borderRadius pro pill.
  enabled?: boolean                // default true — false desliga e não renderiza o pill (ToggleGroup multi).
  deps?: unknown[]                 // recálculos extras (orientation, breakpoint, collapsible=icon).
}

function useGlassHighlight(options: UseGlassHighlightOptions): {
  style: React.CSSProperties       // transform translate3d + width/height/borderRadius do item casado
  isReady: boolean                 // false = nenhum item casado (menu recém-aberto, lista vazia) → pill escondido
}
```

**Mecanismo interno:**
- `MutationObserver({ attributes: true, attributeFilter: [<attr do selector>], childList: true, subtree: true })` no container: cobre Pattern B (Radix/cmdk trocam o atributo em runtime) e Pattern A (troca de valor). `childList: true` é obrigatório mesmo em A por causa do Command (cmdk reordena nós via `appendChild` ao filtrar).
- `ResizeObserver` no container e no item casado (resize/breakpoint/ícone-only).
- `useLayoutEffect` para medir sem flash; guarda SSR-safe (`typeof document`).
- Posiciona via `transform: translate3d(x, y, 0)` + `width`/`height` (GPU, desliza liso). **Sem `backdrop-filter` no pill** (o frost/contexto vem do container) — por isso o transform não derruba o efeito.
- `isReady=false` quando `container.querySelector(activeSelector)` é `null`.

**`GlassPill`** (`motion.span`), primeiro filho do container, `z-0`:
```tsx
function GlassPill({ style, isReady }: { style: React.CSSProperties; isReady: boolean }) {
  const reduce = useReducedMotion()
  return (
    <motion.span
      aria-hidden="true"
      data-slot="glass-pill"
      className="pointer-events-none absolute left-0 top-0 z-0 border border-white/40 dark:border-white/15"
      style={{ ...GLASS_PILL_STYLE, ...style, opacity: isReady ? 1 : 0 }}
      transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 400, damping: 34 }}
    />
  )
}
```
`GLASS_PILL_STYLE` (migrado do Tabs, fonte única):
```ts
const GLASS_PILL_STYLE: React.CSSProperties = {
  background: "color-mix(in oklch, var(--glass-tint, var(--primary)) 18%, rgb(var(--glass-regular) / 0.82))",
  boxShadow:
    "inset 0 1px 0 0 rgb(255 255 255 / 0.55), inset 0 0 0 0.5px rgb(255 255 255 / 0.15), 0 2px 8px -3px rgb(0 0 0 / 0.28)",
}
```

**Regra de composição (todos os consumidores):** container vira `relative`; `GlassPill` é o primeiro filho; o conteúdo do item ativo fica acima com `relative z-10` (ou o próprio flex/grid já resolve o stacking). O pill (`z-0`) nunca cobre o texto de item nenhum.

**Barrel:** exportar `useGlassHighlight`, `GlassPill`, tipo `UseGlassHighlightOptions` em `src/index.ts` (consumidor avançado usa em componente próprio).

### 2. Template de wiring

**Pattern A** (Tabs, ToggleGroup, Sidebar, NavigationMenu, Pagination, docs-sidebar):
1. Achar o ancestral comum real dos itens (não o wrapper por-item). Se o wrapper por-item já for `position:relative`, usar `measure: "rect"`.
2. `relative` na classe do ancestral.
3. Confirmar (no `node_modules`, não por convenção) o atributo do item ativo → `activeSelector` exato.
4. Chamar `useGlassHighlight` no dono do ancestral; renderizar `<GlassPill />` como primeiro filho.
5. Conteúdo do item com `relative z-10` quando necessário.
6. Remover as classes de fundo/borda ligadas ao ativo; manter só cor/peso de texto.
7. `enabled`/instância separada por sub-nível quando houver aninhamento.

**Pattern B** (DropdownMenu, ContextMenu, Menubar, Select, Command, Combobox):
1. Uma instância por superfície popper/listbox independente (Content + cada SubContent). Nunca compartilhar pill entre superfícies.
2. Identificar o nó mensurável (às vezes interno, ex. `[cmdk-list-sizer]` → `resolveContainer`).
3. `relative` no nó, exceto quando o primitivo já seta inline (Radix Select Viewport).
4. Atributo por família: menu-based (Dropdown/Context/Menubar/Select) = `[data-highlighted]` (presença); cmdk = `[data-selected="true"]`; base-ui Combobox = `[data-highlighted]` (presença).
5. `measure: "offset"` (todos têm Group/wrapper `position:static`, confirmado).
6. `<GlassPill />` como primeiro filho do container.
7. **Remover a fonte dupla de highlight:** a classe no item (`focus:bg-accent`/`data-highlighted:bg-accent`) **e** a regra wildcard descendente no Content (`**:data-[slot$=-item]:...`). Checklist obrigatório.
8. Preservar swaps de cor de texto/ícone.

### 3. Componentes — pontos de wiring confirmados no recon

| Componente | Primitivo | Container (coordinate frame) | `activeSelector` | measure | Bug pré-existente a corrigir junto |
|---|---|---|---|---|---|
| **Tabs** (glass) | radix-ui | `TabsList` (todos os variants ganham `relative`) | `[data-state="active"]` | **rect** (o border de 1px exclusivo da variant glass desloca o `offset`; `getBoundingClientRect` nos dois lados evita) | remover `motion.span`+layoutId por trigger |
| **ToggleGroup** (glass, single) | radix-ui | `ToggleGroup` root (`relative`) | `[data-state="on"]` | offset | — (`enabled = type==="single"`) |
| **Sidebar** (glass) | custom | `SidebarMenu`/`SidebarMenuSub` (uma instância por nível) | `[data-active="true"]` | **rect** (`SidebarMenuItem` já é relative) | `data-active:` → `data-[active=true]:` |
| **NavigationMenu** (glass) | radix-ui | `NavigationMenuList` | `[data-active]` (presença, emitido pelo Radix no Link ativo; `aria-current="page"` espelha) | **rect** (`NavigationMenuItem` já é relative) | seletores mortos `data-open`/`data-popup-open`/`data-[active=true]` |
| **Pagination** (glass) | custom | `PaginationContent` (ul, `relative`) | `[aria-current="page"]` | offset | neutralizar fill só no `PaginationLink` (não no `buttonVariants`) |
| **DropdownMenu** (default) | radix-ui | `DropdownMenuContent` + cada `SubContent` | `[data-highlighted]` | offset | remover classe do item **e** wildcard no Content |
| **ContextMenu** (default) | radix-ui | `ContextMenuContent` + cada `SubContent` | `[data-highlighted]` | offset | idem dup; ver §4 (submenu aberto) |
| **Menubar** (default) | radix-ui | itens: `MenubarContent`+`SubContent`; topo: `MenubarTrigger` na barra | `[data-highlighted]` (itens) / `[data-state="open"]`+`[data-highlighted]` (topo) | offset | dup + `matchRadius` (rounded-sm vs rounded-md) |
| **Select** (default) | radix-ui | `SelectViewport` (já `position:relative` inline pelo Radix — não duplicar) | `[data-highlighted]` | offset | remover dup |
| **Command** (default) | cmdk | `[cmdk-list-sizer]` via `resolveContainer` | `[data-selected="true"]` | offset | remover dup; some quando lista vazia (`isReady=false`) |
| **Combobox** (default) | base-ui | `ComboboxList` (`relative`) | `[data-highlighted]` | offset | remover dup |
| **docs-sidebar** | @tanstack/react-router | o `<nav>` raiz do `SidebarNav` (`relative`; grupos internos são `position:static`) | `.active` (classe do Link, única em toda a árvore por vez) | offset | dedup do `guideLinkClass` (linhas 12-13 e 44) |

### 4. Decisões de produto resolvidas (não deixar em aberto)

- **Distinção highlight vs seleção persistida:** o pill é SÓ o highlight transitório (`data-highlighted`/`data-selected`) ou o ativo do Pattern A. Estados de escolha persistida (`data-state=checked` do Select/Checkbox/Radio item, `data-checked` do cmdk, chips do Combobox) são ortogonais e mantêm seu indicador atual (check/dot). Nunca fundir com o pill.
- **Submenu aberto (ContextMenu/DropdownMenu/Menubar):** o `data-highlighted` some quando o mouse entra no SubContent, mas o sub-trigger mantém `data-[state="open"]`. O pill segue só `data-highlighted`. Para não perder "qual submenu está aberto", o sub-trigger ganha um indicador **não-pill** sutil: `data-[state=open]:bg-accent/40` (fundo tênue persistente, sem shine). Mínimo e claro.
- **Item destrutivo (`data-variant="destructive"`):** o pill continua com o tint do tema (não vira vermelho). O item destrutivo mantém texto/ícone vermelhos, legíveis sobre o lens claro do pill.
- **Menubar barra do topo:** entra no escopo (tarefa separada da dos itens). O `data-highlighted` do topo hoje é órfão (nenhuma classe consome); o pill passa a consumi-lo. Eixo horizontal é resolvido pela medição de rect automaticamente.
- **docs-sidebar measure:** os itens do `SidebarNav` são `<a>` (Link) filhos diretos do `<nav>`/`<div>` do grupo, `position:static` → `offset`. Uma instância de highlight por grupo (Guides + cada categoria) ou uma sobre o `<nav>` inteiro medindo `.active` global. Decisão de implementação: **uma sobre o `<nav>` raiz**, `.active` é único em toda a árvore por vez.

### 5. Docs & MCP

- Nova seção **"Glass highlight"** no design guide (`preview/docs/DesignPage.tsx` ou guia dedicado) + no `mcp/knowledge/design-guide.md`: o que é, quando aparece, como o consumidor liga (`variant="glass"` no Pattern A; default nos menus), e o primitivo exportado.
- Exemplo `glass` novo em cada página de componente do Pattern A (toggle-group, sidebar, navigation-menu, pagination) e uma nota "glass highlight por default" nas páginas do Pattern B. O Tabs já tem exemplo glass (ajustar se preciso).
- Regenerar `mcp/manifest.json` (`npm run build:manifest`).

### 6. Versão

`0.2.0` (mantido; ainda não publicado). CHANGELOG: entrada destacando **mudança visual** — menus (Dropdown/Context/Menubar/Select/Command/Combobox) passam a usar glass highlight por default; novos `variant="glass"` em ToggleGroup/Sidebar/NavigationMenu/Pagination; primitivo `useGlassHighlight`/`GlassPill` exportado; fixes de seletor em Sidebar e NavigationMenu.

## Verificação (definição de pronto)

- `npm run build` (tsup), `tsc -b`, `npm run build:preview`, `npm run build:manifest` verdes.
- framer-motion continua externalizado no `dist`.
- **Pattern A:** em cada um, o pill desliza com spring pro item ativo; troca de item move o pill (não faz crossfade/pisca); claro e escuro lêem como vidro. Verificar via Playwright (foco + clique — Radix ativa no foco).
- **Pattern B:** em cada menu, o pill segue teclado/hover; some quando nada destacado / lista vazia; submenu aberto mantém indicador sutil; sem duplo highlight; texto legível (inclusive destructive). Verificar via Playwright.
- **Fixes:** Sidebar não pinta mais todos os itens; NavigationMenu tem highlight funcional.
- `prefers-reduced-motion`: pill salta sem animar.
- docs-sidebar (dogfood) com o pill na rota ativa, deployado no Vercel.

## Riscos & mitigações

- **Dois mecanismos divergentes (layoutId vs container):** eliminado por decisão — tudo vai pro container + `useGlassHighlight`, o Tabs é refatorado.
- **`offsetParent` intermediário (Sidebar/NavigationMenu):** `measure: "rect"` resolve; único caso confirmado.
- **cmdk reordena nós ao filtrar (Command):** `childList: true` no observer + `resolveContainer` para `[cmdk-list-sizer]`.
- **Submenus:** uma instância de hook + pill por superfície; sem estado compartilhado.
- **Perf:** um `MutationObserver` + `ResizeObserver` por superfície aberta; leituras de layout em `useLayoutEffect` batelado. Menus só observam enquanto abertos.
- **Retrocompat Pattern A:** sem `variant="glass"`, idêntico a hoje. Pattern B muda por design (documentado).
