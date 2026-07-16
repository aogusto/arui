# Design — arui: registry shadcn → pacote npm

**Data:** 2026-07-16
**Repo:** `~/workspace/arui` (github.com/aogusto/arui)
**Status:** aprovado, pronto para plano de implementação

## Contexto

Hoje `arui` é um **registry shadcn-style**: 57 componentes + 1 theme em `registry/arui/`,
manifesto `registry.json`, buildado com `shadcn build`, hospedado em arui.vercel.app. O
consumo é via `npx shadcn add …`, que **copia o código-fonte** para dentro do repo do
consumidor (ele vira dono e edita à vontade). Isso causa **drift**: cada app que consome
mantém sua própria cópia divergente.

## Objetivo

Substituir **de vez** o modelo registry por uma **biblioteca npm compilada e versionada**.
`arui` passa a ser instalada com `npm install arui`, importada como componentes compilados,
e atualizada via semver (`npm update`). O modelo copy-paste é removido — não coexiste com o
npm.

### Decisões travadas (brainstorming)

1. **Substituir**, não adicionar ao lado. O registry sai.
2. **Público no npm**, nome **`arui`** (unscoped — verificado livre em 2026-07-16, retorna 404).
   Consumidores reais e primários são os apps próprios (new-platform, platform-public-frontend),
   todos Tailwind 4 — o design do tema assume TW4.
3. **Entrega de CSS: Tailwind 4 source-scanning.** O pacote exporta `theme.css` + JS
   compilado; o consumidor TW4 importa o theme e aponta `@source` para o `dist`.
4. **Escopo: só o repo arui.** Migrar os apps consumidores fica para specs próprios depois.

## Não-objetivos (fora de escopo)

- Migrar new-platform, platform-public-frontend ou qualquer outro app para consumir o pacote.
  Cada um terá seu próprio spec/plano.
- Bundle CSS pré-compilado / suporte a consumidores non-Tailwind (YAGNI — adicionável depois
  se surgir demanda externa).
- Changesets / release automation (semver manual por ora).
- Subpath exports por componente (`arui/button`) — o barrel único já é tree-shakeable no
  consumidor; adiar até haver necessidade concreta.

## Contrato do consumidor

Consumidor Tailwind 4:

```css
/* app.css */
@import "tailwindcss";
@import "arui/theme.css";              /* tokens HIG, @custom-variant dark, @utility *-safe */
@source "../node_modules/arui/dist";   /* TW escaneia o dist p/ gerar as utilities usadas */
```

```tsx
import { Button, Card, Sheet } from "arui"
```

Sem `components.json`, sem copiar arquivo, sem alias `@/` no lado do consumidor.
Atualização = `npm update arui`.

### Trade-off aceito (source-scanning)

`@source "../node_modules/arui/dist"` faz o Tailwind gerar CSS para a **união** das utilities
presentes no `dist` (todos os 57 componentes), não apenas as dos componentes efetivamente
importados. Como todos compartilham o mesmo vocabulário HIG (`bg-background`, `text-*`,
`rounded-*`, …) e o Tailwind deduplica utilities, o excesso de CSS é pequeno e limitado ao
vocabulário do design system. O **JS** continua 100% tree-shaken: componente não importado
não entra no bundle do consumidor. Este é o padrão idiomático de lib TW4 — muito mais leve
que um bundle CSS pré-compilado.

## Arquitetura

### Layout do repositório (depois)

```
arui/
├── src/                          # (era registry/arui/)
│   ├── index.ts                  # barrel: reexporta 57 componentes + cn + hooks
│   ├── theme.css                 # (era registry/arui/theme/arui.css) exportado p/ o consumidor
│   ├── lib/utils.ts              # cn() + extendTailwindMerge (HIG type scale)
│   ├── hooks/use-mobile.ts
│   └── components/ui/*.tsx        # 57 componentes
├── preview/                      # showcase (docs) — passa a fazer dogfood da lib
├── dist/                         # saída do build (publicada)
├── docs/superpowers/specs/
├── package.json                  # de "private" registry → pacote publicável
├── tsup.config.ts                # NOVO — config de build da lib
├── tsconfig.*.json
├── vite.config.ts                # showcase; alias `arui` → src/index.ts p/ dogfood
└── vercel.json                   # deploy do showcase (mantido)
```

- Imports internos `@/…` (54× `@/lib/utils`, mais `@/components/ui/*`, `@/hooks/use-mobile`)
  são **mantidos** e resolvidos no build via tsconfig `paths` (`@/*` → `src/*`). Não converter
  para relativo.
- `src/index.ts` é o único entrypoint de runtime. Reexporta cada componente de
  `components/ui/*`, além de `cn` (`lib/utils`) e `useMobile` (`hooks/use-mobile`).

### Build

- **tsup** (esbuild). Saída: **ESM** (`dist/index.js`) + **tipos** (`dist/index.d.ts`).
- Resolução dos paths `@/` no build: tsup lendo o `tsconfig` com `paths`, via plugin de
  tsconfig-paths se necessário (ou `tsdown` como alternativa, mas tsup é o default).
- O `theme.css` é copiado para `dist/theme.css` (asset, não passa por bundler JS).
- `sideEffects: ["**/*.css"]` — permite tree-shaking do JS preservando o CSS.

### package.json (publicação)

Mudanças sobre o atual:

```jsonc
{
  "name": "arui",
  // remove "private": true
  "version": "0.1.0",
  "type": "module",
  "sideEffects": ["**/*.css"],
  "files": ["dist"],
  "exports": {
    ".":           { "types": "./dist/index.d.ts", "import": "./dist/index.js" },
    "./theme.css": "./dist/theme.css"
  },
  "scripts": {
    "build": "tsup",
    "prepublishOnly": "npm run build && npm run typecheck",
    // mantém: dev, build:preview, preview, typecheck
  }
}
```

### Dependências

- **peerDependencies:** `react`, `react-dom` (>=19), `tailwindcss` (^4).
- **peerDependencies opcionais** (via `peerDependenciesMeta` com `optional: true`):
  `react-hook-form`, `@hookform/resolvers`, `zod` — só `form`/`field` usam.
- **dependencies** (primitivos de runtime, hoje já em `dependencies`):
  `radix-ui`, `@base-ui/react`, `cmdk`, `embla-carousel-react`, `recharts`, `sonner`,
  `vaul`, `react-day-picker`, `input-otp`, `react-resizable-panels`, `lucide-react`,
  `next-themes`, `class-variance-authority`, `clsx`, `tailwind-merge`, `tw-animate-css`,
  `@fontsource-variable/inter`.
- **devDependencies:** `tsup` (novo), `framer-motion` (só showcase), + toolchain atual
  (vite, tailwindcss/vite, typescript, tipos).

> Nota de verificação no plano: confirmar que nenhum componente em `src/components/ui/*`
> importa `framer-motion` (hoje é devDep/showcase). Se algum importar, promover a `dependencies`.

### Showcase (dogfood)

O showcase em `preview/` continua sendo o site de docs (arui.vercel.app). Passa a importar
pelo **caminho público real** (`import { Button } from "arui"`) em vez de `@/components/ui/*`.
Para DX de dev com hot-reload contra o source, o `vite.config.ts` do showcase adiciona um
alias `arui` → `src/index.ts` (self-reference). Assim o showcase valida continuamente o
contrato público de import.

## Remoções (registry infra)

- `registry.json`
- `components.json`
- `scripts/validate-registry.mjs`
- scripts `registry:build` e `registry:validate` do package.json
- `registry/` (conteúdo movido para `src/`)
- README reescrito: contrato `shadcn add` → `npm install arui` + bloco de setup TW4 da
  seção "Contrato do consumidor".

## Verificação (definição de pronto)

Ordem de gates antes de publicar:

1. `npm run build` (tsup) gera `dist/index.js`, `dist/index.d.ts` e `dist/theme.css` sem erro.
2. `tsc -b` (typecheck) limpo.
3. `npm run build:preview` do showcase builda e roda consumindo a lib via alias.
4. `publint` + `@arethetypeswrong/cli` sobre o tarball (`npm pack`) → exports e tipos corretos.
5. **Smoke real:** `npm pack` → instalar o `.tgz` num app Vite + TW4 descartável, aplicar o
   contrato do consumidor (import do theme + `@source` + import de componente), renderizar
   `<Button>` e `<Sheet>`, confirmar estilo aplicado e dark mode funcionando.
6. Só após 1–5 verdes: `npm publish --access public`.

## Riscos & mitigações

- **Resolução de `@/` no build.** Se tsup não resolver os paths do tsconfig direto, usar
  plugin de tsconfig-paths (ou tsdown). Validado no gate 1.
- **CSS não aparece no consumidor.** Causa comum: faltar `@source` apontando para
  `node_modules/arui/dist` (content detection do TW ignora node_modules por padrão).
  Documentar explicitamente no README e cobrir no smoke (gate 5).
- **Peer dep opcional de forms.** Se o consumidor usar `form`/`field` sem RHF/zod instalados,
  falha em runtime. Documentar no README que esses componentes exigem os peers opcionais.
- **`sideEffects`.** Marcar CSS como side-effectful e o resto puro; verificar que nenhum
  módulo de componente tem efeito colateral de import (nenhum tem hoje — são só definições).
