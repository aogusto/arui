# Design — Tinting (AruiThemeProvider) + tinted glass + Tabs glass variant (v0.2.0)

**Data:** 2026-07-17
**Repo:** `~/workspace/arui`
**Status:** aprovado, pronto para plano

## Objetivo

Dar ao consumidor do arui um jeito de escolher o **tom (tint/highlight)** que re-tinge a lib toda (no espírito do theming do shadcn), poder **colorir os vidros** (GlassSurface), e um **Tabs com pill de vidro animado** (spring) no tab ativo, cujo vidro puxa o tint. Entra como release minor **0.2.0** (inclui também os fixes já commitados do 0.1.1: CommandDialog, highlight do command, texto dos exemplos de glass).

## Decisões travadas (brainstorming)

1. **Config via `AruiThemeProvider` (JS)** que injeta CSS vars derivadas do `tint` no `document.documentElement` (para portais — Dialog/Popover/Tooltip/Command — herdarem o tom).
2. **framer-motion** deixa de ser devDep e vira **dependency** do `@aogusto/arui` (usado pelo pill do Tabs). Lazy-load só no variant glass fica documentado como otimização futura (não nesta v).
3. Escopo do provider = **tint/highlight apenas**. Modo claro/escuro continua sendo a classe `.dark` do consumidor. `--accent` (hover neutro) permanece neutro.
4. Tab `glass` variant portado do padrão do `clser-frontend` (layoutId + spring), com o pill tingido pelo tint.

## Não-objetivos (v0.2.0)

Gerenciamento de light/dark pelo provider; geração de paleta completa acessível a partir do tint (só a família de highlight); temas nomeados salvos/persistência; lazy-load do framer-motion; editor de tema visual no site.

## Arquitetura

### 1. `AruiThemeProvider` (`src/components/theme/aruiThemeProvider.tsx`)

```tsx
type AruiTint = "blue" | "indigo" | "violet" | "pink" | "rose" | "green" | "teal" | "orange" | "red" | (string & {})

function AruiThemeProvider({ tint, children }: { tint?: AruiTint; children: React.ReactNode }): JSX.Element
```

- Resolve `tint`: se for um preset nomeado, mapeia para hex (mapa `TINT_PRESETS`); se for hex/`rgb()`/`oklch()`, usa direto. Default (sem `tint` ou provider ausente): o azul atual do `theme.css`.
- Computa em JS a família de highlight e injeta como CSS custom properties em `document.documentElement` via `useEffect` (set no mount/quando `tint` muda; remove as que setou no unmount):
  - `--primary` = tint
  - `--primary-foreground` = branco ou quase-preto, escolhido pela **luminância relativa** do tint (WCAG-ish: luminance > 0.55 → foreground escuro; senão branco)
  - `--ring` = tint (foco passa a puxar o tom)
  - `--glass-tint` = o tint em rgb (consumido pelo vidro tingido e pelo pill do tab)
- Utilitário de cor puro (`src/lib/color.ts`): `parseColor(input) -> {r,g,b}` (aceita hex #rgb/#rrggbb, `rgb()`), `relativeLuminance({r,g,b})`, `toRgbString`. Sem dependência externa. `oklch()` de entrada é passado direto para `--primary`/`--ring` (o browser resolve), e para o foreground/luminância assume-se branco se não for parseável em rgb (fallback seguro).
- Também exporta um helper imperativo `applyAruiTint(tint, target = document.documentElement)` para quem não quer o provider (retorna uma função de cleanup). O provider usa ele por baixo.
- SSR/no-flash: fora de escopo — arui é client-only (`rsc:false`); aceita-se o default no primeiro paint e o provider aplica no effect. (Documentar.)

### 2. Tokens (`src/theme.css`)

- Adicionar `--glass-tint` no bloco de tokens, default **neutro/transparente** (ex.: `--glass-tint: transparent`), e registrar `--color-glass-tint` no `@theme inline` para virar utility se necessário.
- Manter `--primary`/`--ring` como estão (o azul atual = tint default). O provider sobrescreve em runtime.
- Nada de mudança destrutiva nos tokens existentes: quem não usa o provider fica idêntico a hoje.

### 3. `GlassSurface` — prop `tint`

`src/components/ui/glass-surface.tsx`:
```tsx
variant?: "regular" | "thick" | "clear"
tint?: "accent" | (string & {})   // "accent" = var(--primary); string = cor arbitrária; undefined = neutro (atual)
```
- Quando `tint` é definido, aplica uma camada de cor via `color-mix(in oklch, <fill-atual>, <tint> ~15%)` sobre o bg do material (inline style ou classe), preservando `backdrop-blur`/`saturate`. `tint="accent"` usa `var(--primary)`.
- `undefined` = comportamento atual (neutro). Retrocompatível.

### 4. Tabs — variant `glass` (`src/components/ui/tabs.tsx`)

Reescrever seguindo o padrão do clser (`/home/augustoribeiro/espaco/clser-frontend/src/components/ui/tabs.tsx`), adaptado aos tokens do arui:
- Context `TabsRootContext` (activeValue + `pillId` via `useId`) para o pill saber o trigger ativo (Radix não expõe o valor ativo via context).
- `tabsListVariants`: adicionar `glass` (mantendo `default`/`line`/`segmented`). O `glass` usa material de vidro do arui (blur/saturate + shine sutil).
- `TabsTrigger`: no variant `glass`, o trigger ativo renderiza `<motion.span layoutId={`tabs-glass-pill-${pillId}`} transition={{ type: "spring", stiffness: 400, damping: 30 }}>` — o pill que desliza. O pill é **vidro tingido**: usa `var(--primary)`/`var(--glass-tint)` para a cor (glass-within-glass tingido pelo tema).
- **Fix de bug (blocker):** trocar todos os `data-active`/`data-active:` por `data-[state=active]` (o Radix Tabs seta `data-state="active"`, não `data-active`; hoje o estado ativo não aplica em nenhum variant). Alinha com o padrão do clser.
- `orientation` continua suportado.

### 5. Dependência

`package.json`: mover `framer-motion` de `devDependencies` para `dependencies` (`^12`). Continua em dev também não é necessário (uma entrada só em `dependencies`). O showcase já usa framer-motion (agora vem transitivo). Verificar no build que o `dist` externaliza framer-motion (não bundla) — tsup externaliza deps por padrão.

### 6. Barrel & exports

`src/index.ts`: exportar `AruiThemeProvider`, `applyAruiTint`, e o tipo `AruiTint`. (Tabs/GlassSurface já exportados.)

### 7. Docs & MCP

- Página nova **`/docs/theming`** ("Theming"): uso do `AruiThemeProvider` (preset + hex), o que o tint afeta, e o caminho CSS-only (setar `--primary`/`--ring`/`--glass-tint`). Entra no grupo "Guides" da sidebar (`DocsLayout` + rota em `router.tsx`).
- `glass-surface` docs: novo exemplo `tinted` (tint="accent" e hex).
- `tabs` docs: novo exemplo `glass` (variant glass animado). E como o Tabs docs page é gerado do `meta.ts`+examples, o manifest do MCP pega automaticamente ao rodar `build:manifest`.
- Guia de design (`mcp/knowledge/design-guide.md`): adicionar seção curta de tint/theming (glassmorphism + tint) e o pill do tab. Regenerar `mcp/manifest.json`.
- Copy sem travessões; "glassmorphism", nunca "liquid glass".

### 8. Versão

`0.1.1` → **`0.2.0`** (minor; novas features). Inclui os fixes já em master (CommandDialog, command highlight, glass text). Substitui o 0.1.1 não publicado: o usuário publica só o 0.2.0.

## Verificação (definição de pronto)

- `npm run build` (tsup) e `tsc -b`/`npm run build:preview` verdes.
- framer-motion externalizado no `dist` (não inflá-lo no bundle da lib): checar `dist/index.js` não contém o código do framer-motion (bare import preservado).
- `AruiThemeProvider tint="pink"` re-tinge primary/ring/foco + o pill do tab + `GlassSurface tint="accent"`, inclusive dentro de um Dialog (portal). Verificar via Playwright.
- Tabs `glass`: pill desliza com spring entre triggers; ativo destacado; os variants default/line/segmented com o estado ativo agora aparecendo (bug corrigido) — verificar claro e escuro.
- `build:manifest` = 58 componentes (adiciona nada; theming é provider, não component doc) — mas Tabs/GlassSurface ganham exemplos novos; conferir contagem e que os exemplos novos entram.
- Smoke do MCP continua ok (manifest válido).

## Riscos & mitigações

- **Portais herdando o tint:** por isso o provider injeta em `document.documentElement`, não num wrapper. Validar com um Dialog tingido no smoke visual.
- **framer-motion no bundle:** tsup externaliza deps; confirmar que não é in-lined (senão o pacote incha). Se por algum motivo bundlar, marcar `external: ["framer-motion"]` no tsup.config.
- **`data-[state=active]` fix:** é um fix de comportamento visível; cobrir os 4 variants (default/line/segmented/glass) claro+escuro no visual.
- **color-mix / relative luminance:** `color-mix` tem bom suporte moderno; o cálculo de foreground é JS puro (sem dep). Entrada `oklch()` não-parseável cai no fallback branco (documentado).
- **Retrocompat:** sem provider e sem `tint` prop, tudo idêntico ao 0.1.x. Só adiciona.
