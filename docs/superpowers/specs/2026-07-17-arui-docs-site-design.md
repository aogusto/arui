# Design — arui docs site (branded, no app Vite)

**Data:** 2026-07-17
**Repo:** `~/workspace/arui`
**Status:** aprovado, pronto para plano

## Contexto

`@aogusto/arui@0.1.0` já está publicado no npm. O showcase em `arui.vercel.app` hoje é uma landing de vitrine (Hero glass, Material, um playground com 10 dos 57 componentes, Install). O usuário quer uma **documentação de verdade**, no padrão das outras libs (shadcn/ui, Radix, MUI): navegação por componente, vários exemplos de cada, uso e referência de props.

## Objetivo

Construir um **site de documentação branded dentro do próprio app Vite** do showcase. A landing atual vira a home; a documentação vive em `/docs/*`, com uma página por componente contendo vários exemplos ao vivo (com código copiável) e uma tabela de props curada.

### Decisões travadas (brainstorming)

1. **Docs branded no app Vite**, não Storybook nem framework MDX. Um app, um deploy no Vercel, no visual glassmorphism/HIG existente.
2. **Roteamento com TanStack Router** (o usuário já usa no new-platform). Adicionar `@tanstack/react-router` como devDependency (só showcase).
3. **Props: TODAS curadas à mão** por componente. Nada de auto-gen (`react-docgen-typescript`), que traria ruído das props herdadas de Radix/base-ui.
4. **`<Demo>`**: cada exemplo é um arquivo `.tsx` co-locado; a página importa o componente (render ao vivo) e o fonte cru via `import code from "./exemplo.tsx?raw"`. Preview e código nunca dessincronizam.
5. **⌘K** de busca usando o próprio `command` da arui (dogfood).
6. **Terminologia:** o visual referencia o Liquid Glass da Apple, mas a técnica é **glassmorphism**. A copy descreve como glassmorphism, nunca chama o CSS de "liquid glass".
7. **Estilo de escrita:** copy naturalizada, sem travessões ("—").

## Não-objetivos (v1 dos docs)

Versionamento de docs, autoria em MDX, playground editável (sandpack/live-edit), i18n dos docs, props auto-geradas, dark/light toggle novo (o toggle atual já serve). Ficam para depois.

## Arquitetura

### Rotas (TanStack Router, code-based)

```
/                         → landing atual (Hero + Material + Playground + Install) como home
/docs                     → Getting started (instalação, setup do tema TW4, uso, forms opcional)
/docs/components/$slug    → página de um componente (57 slugs)
```

- Router configurado em `preview/router.tsx` (rota raiz + rotas filhas). `preview/main.tsx` passa a montar `<RouterProvider>`.
- A home reusa os componentes de seção atuais (`Hero`, `MaterialSection`, `ComponentsPlayground`, `InstallSection`, `Footer`).

### Shell de docs (`/docs/*`)

Layout de duas colunas dentro de uma rota-layout `DocsLayout`:

- **Topbar** (reusa/estende o `Nav` atual): logo arui, links GitHub + npm, `ThemeToggle`, gatilho ⌘K.
- **Sidebar** esquerda: campo de busca + lista de componentes agrupada por categoria (ver taxonomia abaixo). Item ativo destacado. Colapsa em mobile (usa o `Sheet` da própria arui como drawer de navegação: dogfood).
- **Conteúdo** central: renderiza a página do componente ou o getting-started.
- **⌘K:** paleta com o `command` da arui, lista todos os componentes, salta para `/docs/components/$slug`.

### Taxonomia (57 componentes)

- **Signature (1):** glass-surface
- **Forms & Inputs (19):** button, button-group, input, input-group, input-otp, textarea, label, field, form, checkbox, radio-group, switch, select, native-select, slider, toggle, toggle-group, combobox, calendar
- **Overlays (11):** dialog, alert-dialog, sheet, drawer, popover, tooltip, hover-card, dropdown-menu, context-menu, menubar, command
- **Navigation (5):** tabs, breadcrumb, pagination, navigation-menu, sidebar
- **Data & Display (19):** table, badge, avatar, card, accordion, carousel, chart, progress, skeleton, separator, aspect-ratio, scroll-area, resizable, kbd, empty, item, spinner, alert, collapsible
- **Feedback & Utilities (2):** sonner (Toaster), direction (DirectionProvider, RTL)

A taxonomia vive num único módulo `preview/docs/registry.ts` (fonte da verdade da navegação, dos slugs e da ordem), consumido pela sidebar, pelo ⌘K e pelo gerador de rotas.

### Componente `<Demo>` (preview + código)

`preview/docs/Demo.tsx`. Props: `title?`, `description?`, `children` (o preview ao vivo), `code` (string do fonte). Renderiza:

- uma superfície de preview (borda `separator`, fundo `background-secondary`, padding) com o componente vivo, centrado;
- um toggle "Code" que revela o bloco de código com o `CopyButton` existente.

O código vem do arquivo do exemplo via `?raw`. Padrão por exemplo:

```
preview/docs/components/button/examples/variants.tsx   // export default () => <…/> (o demo vivo)
```
Na página:
```tsx
import Variants from "./examples/variants"
import variantsCode from "./examples/variants?raw"
// …
<Demo title="Variants" code={variantsCode}><Variants /></Demo>
```

> Nota Vite: `?raw` já é suportado nativamente. O `.tsx` do exemplo deve ser autocontido (importa da própria `@aogusto/arui`), para o código exibido ser copiável e correto.

### Anatomia da página de componente

Cada `/docs/components/$slug` renderiza, em ordem:

1. **Cabeçalho:** nome, uma frase de descrição, categoria.
2. **Import:** snippet `import { X, … } from "@aogusto/arui"` copiável.
3. **Exemplos:** de 3 a 6 `<Demo>` cobrindo variantes e estados relevantes do componente (ex.: Button → default/variants, sizes, com ícone, disabled, asChild).
4. **Props:** tabela **curada à mão** de todas as props relevantes do componente (nome, tipo, default, descrição). Quando a superfície de props for essencialmente a de um primitivo Radix/base-ui, listar as props próprias/estilísticas e anotar "estende `<Primitivo>` de `radix-ui`/`@base-ui/react`".

O conteúdo de cada componente (descrição, exemplos, tabela de props) é o grosso do trabalho e será populado por fan-out (um agente por componente, lendo `src/components/ui/<slug>.tsx`).

### Modelo de conteúdo por componente

Cada componente tem um diretório `preview/docs/components/<slug>/`:
```
<slug>/
├── page.tsx                 # a página: cabeçalho + <Demo>s + <PropsTable>
├── meta.ts                  # { slug, name, category, description, imports: string[] }
└── examples/
    ├── <exemplo-1>.tsx
    └── <exemplo-2>.tsx
```
`page.tsx` importa cada exemplo + seu `?raw`, monta os `<Demo>` e passa a `props` para `<PropsTable>`.

### `<PropsTable>`

`preview/docs/PropsTable.tsx`. Recebe `rows: { prop, type, default?, description }[]` e renderiza usando o `table` da arui (dogfood). As linhas são curadas em cada `page.tsx` (ou `meta.ts`).

## Build & deploy

- `@tanstack/react-router` como devDependency. Nada muda no pacote publicado (`dist/` continua vindo só de `src/` via tsup; o showcase é à parte).
- `npm run build:preview` (tsc -b + vite build) continua saindo em `showcase-dist/`, servido pelo Vercel. Verificar que o roteamento SPA funciona no Vercel (rewrite de todas as rotas para `index.html`): adicionar `rewrites` no `vercel.json` se necessário.

## Estratégia de implementação (fases)

1. **Infra + página-modelo.** Router, `DocsLayout` (topbar + sidebar + conteúdo), `registry.ts` (taxonomia), `<Demo>`, `<PropsTable>`, ⌘K, getting-started, e **uma** página de componente completa (Button) como modelo revisado e buildando. Home preservada.
2. **Fan-out dos 57.** Um agente por componente (ou pequenos lotes), lendo `src/components/ui/<slug>.tsx`, escrevendo `meta.ts` + `examples/*.tsx` + `page.tsx` + tabela de props curada, no padrão da página-modelo. Montagem incremental.
3. **Fechamento.** `build:preview` verde com as 57 rotas, ⌘K lista todos, sidebar completa, deploy Vercel, revisão final.

## Verificação (definição de pronto)

- `npm run build:preview` exit 0 com as 57 rotas + `/docs` + `/`.
- Navegação: sidebar lista os 57 agrupados; cada `/docs/components/$slug` renderiza sem erro; ⌘K salta para qualquer um.
- Cada página tem import copiável, ao menos 3 exemplos ao vivo com código copiável correto, e tabela de props curada.
- Home intacta. Deploy Vercel funcional (rotas SPA não dão 404 no refresh).
- Copy sem travessões; material descrito como glassmorphism.

## Riscos & mitigações

- **`?raw` + build de produção:** garantir que o Vite empacota o fonte cru dos exemplos no build (não só em dev). Validar na fase 1 com o build:preview.
- **SPA no Vercel:** refresh em `/docs/components/x` pode dar 404 sem rewrite. Mitigar com `rewrites` no `vercel.json` para `index.html`.
- **Consistência entre 57 páginas:** a página-modelo (Button) e o modelo de conteúdo em `preview/docs/components/<slug>/` são o contrato que o fan-out segue. Um agente de revisão final confere padrão e build.
- **Peso do bundle do showcase:** 57 páginas + exemplos podem crescer o bundle. Usar lazy-loading por rota (code splitting do router) se o build ficar pesado.
