# Design — arui MCP (`@aogusto/arui-mcp`)

**Data:** 2026-07-17
**Repo:** `~/workspace/arui`
**Status:** aprovado (usuário delegou execução), pronto para plano

## Objetivo

Um servidor MCP OSS que os **usuários do arui instalam nos próprios agentes de IA** (Claude Code, Cursor, etc.) para que esses agentes entendam a biblioteca: quais componentes existem, como usar cada um (import, props, exemplos), o guia de design (Apple HIG como conceito de uso, glassmorphism como técnica) e o contrato de instalação. As instruções de instalação do MCP ficam visíveis na doc (arui.vercel.app).

## Decisões travadas

1. **Publicado como `@aogusto/arui-mcp`**, vive no repo arui em `mcp/`. Servidor stdio Node ESM + `@modelcontextprotocol/sdk` (mesmo padrão dos MCPs internos do time).
2. **Fonte única de conhecimento.** As props de cada componente saem de `page.tsx` e passam para o `meta.ts` do componente. Um script de build gera `mcp/manifest.json` a partir dos `meta.ts` + dos `examples/*.tsx` (código cru) + do guia de design. A doc renderiza do mesmo dado; o MCP empacota o manifest. Sem drift.
3. **Guia de design** = `apple-hig.md` do new-platform adaptado: "Liquid Glass" vira **glassmorphism** (técnica), mantendo o conceito de uso **Apple HIG**; seções de token/recipe alinhadas ao `theme.css` e ao objeto `glass` reais do arui. Vira o `get_design_guide` do MCP **e** uma página `/docs/design` no site.
4. **Instalação via docs:** página nova `/docs/mcp` com snippets copiáveis (Claude Code, Cursor, `mcpServers` genérico).

## Não-objetivos (v1)

Manifest com tipos auto-gerados, versionamento do manifest por versão da lib, tools de "scaffold/gera código", telemetria. Publicação automática do MCP (fica como passo gated, igual ao pacote principal).

## Arquitetura

### Fonte de dados (single source of truth)

- **Refactor por componente (57):** mover a array `props: PropRow[]` de `preview/docs/components/<slug>/page.tsx` para o `meta.ts` (exportar `export const props: PropRow[]`). `page.tsx` passa a `import { meta, props } from "./meta"`. Nada muda visualmente na doc.
- **Gerador `scripts/build-manifest.ts`** (rodado com `tsx`): faz glob de `preview/docs/components/*/meta.ts`, importa cada um (`meta` + `props`), lê os `examples/*.tsx` como texto, e monta:
  ```jsonc
  {
    "version": "<version do package.json do arui>",
    "components": [
      { "slug", "name", "category", "description", "imports": [...],
        "props": [{ "prop", "type", "default?", "description" }],
        "examples": [{ "name", "code" }] }
    ],
    "categories": [...],           // de registry.ts
    "designGuide": "<markdown>",   // mcp/knowledge/design-guide.md
    "setup": "<texto do contrato de instalação>"
  }
  ```
  Escreve `mcp/manifest.json`. Roda no build (`npm run build:manifest`) e antes do publish do MCP.

### Servidor MCP (`mcp/`)

- `mcp/package.json`: `"name": "@aogusto/arui-mcp"`, `"bin"`, `type module`, dep `@modelcontextprotocol/sdk`, `files: ["index.js", "manifest.json", "knowledge"]`.
- `mcp/index.js`: servidor stdio. Carrega `manifest.json` no start. Tools:
  - `list_components(category?)` → `[{slug, name, category, description}]`.
  - `get_component(name)` → import line + props (tabela) + examples (código). Aceita slug ou name; fuzzy leve.
  - `search_components(query)` → match em name/description/props/examples (caso de uso).
  - `get_design_guide(topic?)` → o markdown do guia (seção por `topic` se dado: materials, color, typography, motion, a11y, patterns).
  - `get_setup()` → o contrato `npm install @aogusto/arui` + `@import` do tema + `@source` + react-hook-form peer opcional.
- README com o snippet de instalação.

### Guia de design (`mcp/knowledge/design-guide.md`)

Derivado do `~/workspace/new-platform/.claude/apple-hig.md` (817 linhas). Adaptações obrigatórias:
- Título e prosa: **glassmorphism** como nome da técnica; **Apple HIG** permanece como o conceito/linguagem de uso. Remover "Liquid Glass" como nome do CSS (pode citar "inspirado no Liquid Glass da Apple" uma vez, como referência de conceito).
- Seções de token/recipe (`2.x`, `3.x`) reescritas para os tokens REAIS do arui (`src/theme.css`) e o objeto `glass` de `src/components/ui/glass-surface.tsx` (`bg-glass-regular`, `backdrop-blur-glass`, variantes regular/thick/clear), e `cn()` de `src/lib/utils.ts`.
- Mapa de componentes (seção 9) apontando para os componentes reais do arui e seus nomes de export.
- Copy sem travessões.

### Docs site

- **`/docs/mcp`** ("Use with AI agents"): explica o que o MCP dá ao agente + snippets copiáveis (Claude Code `claude mcp add arui -- npx -y @aogusto/arui-mcp`; Cursor / bloco `mcpServers`; genérico).
- **`/docs/design`** ("Design guide"): renderiza o `design-guide.md`.
- Ambas entram na navegação (seção "Guides" na sidebar, acima de "Components", ou no topo do getting started). Adicionar ao `registry.ts`/nav sem quebrar a rota `components/$slug`.

## Verificação (definição de pronto)

- `npm run build:manifest` gera `mcp/manifest.json` com 57 componentes, cada um com props (não vazio) e >=3 examples.
- `npm run build:preview` (docs) exit 0 após o refactor de props (nada quebrou visualmente).
- MCP smoke: subir `node mcp/index.js`, listar tools, e chamar `get_component("button")` / `search_components("toast")` / `get_design_guide("materials")` retornando dados coerentes (via um client MCP mínimo ou o inspector).
- `/docs/mcp` e `/docs/design` renderizam e estão na nav.
- Guia de design sem "liquid glass" como nome de técnica e sem travessões.

## Riscos & mitigações

- **Importar `.ts` no gerador:** usar `tsx` (devDep) para rodar `build-manifest.ts`; os `meta.ts` são objetos planos com imports só de tipo, então carregam limpo.
- **Drift futuro:** o manifest é gerado, nunca editado à mão; `build:manifest` roda antes do publish do MCP (script `prepack` do `mcp/package.json`).
- **Refactor dos 57:** mecânico (mover uma array), fan-out; o `build:preview` é o gate que pega qualquer page.tsx que ficou sem importar `props`.
- **Publicação:** o publish do `@aogusto/arui-mcp` precisa de 2FA/token (igual ao pacote principal) — fica como passo gated no fim, com o usuário.
