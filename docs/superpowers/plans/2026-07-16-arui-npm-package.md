# arui: registry shadcn → pacote npm — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Converter o repo `arui` de registry shadcn-style para uma biblioteca npm compilada, versionada e publicável (`npm install arui`), mantendo o showcase como site de docs que faz dogfood da lib.

**Architecture:** O código dos 57 componentes + theme sai de `registry/arui/` para `src/`. Um barrel `src/index.ts` (`export *`, zero colisões — verificado) expõe tudo. Build com **tsup** produz ESM + `.d.ts` em `dist/`, resolvendo os aliases `@/*` via tsconfig `paths`. O `theme.css` fica self-contained (importa tw-animate-css + fonte Inter) e é exportado como `arui/theme.css`. O consumidor Tailwind 4 importa o theme e aponta `@source` para o `dist`. A infra de registry (`registry.json`, `components.json`, `shadcn build`) é removida.

**Tech Stack:** React 19, Tailwind 4, tsup (esbuild), TypeScript 5.9, Vite 7 (showcase), publint + @arethetypeswrong/cli (validação de empacotamento).

## Global Constraints

- **Nome do pacote:** `arui` (unscoped, público — verificado livre no npm 2026-07-16).
- **ESM-only.** Sem build CommonJS. `"type": "module"`.
- **Barrel único** `import { X } from "arui"`. Sem subpath exports por componente (YAGNI).
- **Entrega de CSS: Tailwind 4 source-scanning.** Pacote exporta `arui/theme.css`; consumidor faz `@import "arui/theme.css"` + `@source ".../arui/dist"`. Sem bundle CSS pré-compilado.
- **React 19 + Tailwind 4 são peerDependencies.** `react-hook-form` é peer **opcional** (só `form.tsx` usa). `zod`/`@hookform/resolvers` NÃO são deps da arui (escolha de validação do consumidor).
- **Imports internos `@/…` mantidos** (resolvidos no build), nunca convertidos para relativo.
- **Sem `console.log`, sem `any`** em código novo.
- **Versão inicial:** `0.1.0`. Semver manual (`npm version` + `npm publish --access public`).
- **Publicação (`npm publish`) é ação externa irreversível** — só executa com confirmação explícita do usuário e npm autenticado (Task 6).

---

### Task 1: Reestruturar `registry/arui/` → `src/`, theme self-contained e barrel

**Files:**
- Move: `registry/arui/components/ui/*.tsx` → `src/components/ui/*.tsx` (57 arquivos)
- Move: `registry/arui/lib/utils.ts` → `src/lib/utils.ts`
- Move: `registry/arui/hooks/use-mobile.ts` → `src/hooks/use-mobile.ts`
- Move: `registry/arui/theme/arui.css` → `src/theme.css`
- Modify: `src/theme.css` (prepend imports de fonte + animações)
- Create: `src/index.ts` (barrel)
- Modify: `tsconfig.app.json` (paths + include)
- Modify: `vite.config.ts` (alias `@` → `src`, alias de dogfood `arui` → `src/index.ts`)

**Interfaces:**
- Produces: pacote de módulos resolvíveis por `@/lib/utils` (`cn`), `@/hooks/use-mobile` (`useIsMobile`) e `@/components/ui/<nome>` (exports nomeados de cada componente). O barrel `src/index.ts` reexporta todos — consumido pela Task 2 (showcase) e Task 3 (build).

- [ ] **Step 1: Mover os arquivos de fonte com `git mv` (preserva história)**

```bash
cd ~/workspace/arui
mkdir -p src/components src/lib src/hooks
git mv registry/arui/components/ui src/components/ui
git mv registry/arui/lib/utils.ts src/lib/utils.ts
git mv registry/arui/hooks/use-mobile.ts src/hooks/use-mobile.ts
git mv registry/arui/theme/arui.css src/theme.css
# remove o diretório registry/ agora vazio
rmdir registry/arui/theme registry/arui/components registry/arui/lib registry/arui 2>/dev/null; rmdir registry 2>/dev/null
git status --short
```

Expected: 60+ arquivos com status `R` (renamed) sob `src/`, `registry/` sumiu.

- [ ] **Step 2: Tornar `src/theme.css` self-contained**

O consumidor deve ter fonte + animações só importando `arui/theme.css`. Adicione no **topo absoluto** do arquivo (antes de qualquer `@custom-variant`/`@utility`/`@theme`), pois `@import` de CSS precisa vir primeiro:

```css
@import "tw-animate-css";
@import "@fontsource-variable/inter";
```

Resultado (início do arquivo):

```css
@import "tw-animate-css";
@import "@fontsource-variable/inter";

@custom-variant dark (&:is(.dark *));

@utility pt-safe {
  padding-top: env(safe-area-inset-top);
}
/* … resto inalterado … */
```

- [ ] **Step 3: Criar o barrel `src/index.ts`**

Zero colisões de nome foram verificadas entre os 57 arquivos, então `export *` não omite nada.

```ts
// arui — barrel público. Import via `import { Button } from "arui"`.

// Utilitário de classes (tailwind-merge com type scale HIG)
export { cn } from "@/lib/utils"

// Hooks
export { useIsMobile } from "@/hooks/use-mobile"

// Componentes
export * from "@/components/ui/accordion"
export * from "@/components/ui/alert"
export * from "@/components/ui/alert-dialog"
export * from "@/components/ui/aspect-ratio"
export * from "@/components/ui/avatar"
export * from "@/components/ui/badge"
export * from "@/components/ui/breadcrumb"
export * from "@/components/ui/button"
export * from "@/components/ui/button-group"
export * from "@/components/ui/calendar"
export * from "@/components/ui/card"
export * from "@/components/ui/carousel"
export * from "@/components/ui/chart"
export * from "@/components/ui/checkbox"
export * from "@/components/ui/collapsible"
export * from "@/components/ui/combobox"
export * from "@/components/ui/command"
export * from "@/components/ui/context-menu"
export * from "@/components/ui/dialog"
export * from "@/components/ui/direction"
export * from "@/components/ui/drawer"
export * from "@/components/ui/dropdown-menu"
export * from "@/components/ui/empty"
export * from "@/components/ui/field"
export * from "@/components/ui/form"
export * from "@/components/ui/glass-surface"
export * from "@/components/ui/hover-card"
export * from "@/components/ui/input"
export * from "@/components/ui/input-group"
export * from "@/components/ui/input-otp"
export * from "@/components/ui/item"
export * from "@/components/ui/kbd"
export * from "@/components/ui/label"
export * from "@/components/ui/menubar"
export * from "@/components/ui/native-select"
export * from "@/components/ui/navigation-menu"
export * from "@/components/ui/pagination"
export * from "@/components/ui/popover"
export * from "@/components/ui/progress"
export * from "@/components/ui/radio-group"
export * from "@/components/ui/resizable"
export * from "@/components/ui/scroll-area"
export * from "@/components/ui/select"
export * from "@/components/ui/separator"
export * from "@/components/ui/sheet"
export * from "@/components/ui/sidebar"
export * from "@/components/ui/skeleton"
export * from "@/components/ui/slider"
export * from "@/components/ui/sonner"
export * from "@/components/ui/spinner"
export * from "@/components/ui/switch"
export * from "@/components/ui/table"
export * from "@/components/ui/tabs"
export * from "@/components/ui/textarea"
export * from "@/components/ui/toggle"
export * from "@/components/ui/toggle-group"
export * from "@/components/ui/tooltip"
```

- [ ] **Step 4: Atualizar `tsconfig.app.json` (paths + include)**

Trocar `registry` por `src` em `paths` e `include`:

```jsonc
{
  "compilerOptions": {
    "target": "ES2022", "useDefineForClassFields": true, "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext", "moduleResolution": "bundler", "jsx": "react-jsx",
    "strict": true, "noUnusedLocals": true, "noUnusedParameters": true, "noEmit": true,
    "skipLibCheck": true, "baseUrl": ".", "paths": { "@/*": ["./src/*"] }
  },
  "include": ["src", "preview"]
}
```

- [ ] **Step 5: Atualizar `vite.config.ts` (alias `@` → src + dogfood `arui`)**

```ts
import path from "node:path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // dogfood: o showcase importa pelo caminho público real, resolvido no source
      arui: path.resolve(__dirname, "./src/index.ts"),
    },
  },
})
```

- [ ] **Step 6: Verificar typecheck**

Run: `npx tsc -b`
Expected: sai sem erros (exit 0). Se aparecer erro de módulo não encontrado em `@/…`, confira que o `git mv` do Step 1 moveu tudo e que `paths` no Step 4 aponta para `./src/*`.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "refactor(arui): move registry/arui → src/ + barrel + theme self-contained"
```

---

### Task 2: Migrar o showcase para consumir a lib (dogfood)

**Files:**
- Modify: `preview/preview.css` (contrato do consumidor)
- Modify: `preview/App.tsx` e demais `preview/components/*.tsx` que importam de `@/components/ui/*` → `arui`

**Interfaces:**
- Consumes: o alias `arui` → `src/index.ts` (Task 1, Step 5) e `arui/theme.css` (via `src/theme.css`).

- [ ] **Step 1: Reescrever `preview/preview.css` para o contrato público**

O `theme.css` agora é self-contained (traz fonte + animações), então o showcase importa só o essencial e escaneia o source via `@source` (espelha o `@source ".../arui/dist"` do consumidor real):

```css
@import "tailwindcss";
@import "../src/theme.css";
@source "../src";

/* ---------------------------------------------------------------------------
   Arui showcase — motion primitives
--------------------------------------------------------------------------- */

html {
  scroll-behavior: smooth;
}

@keyframes arui-drift-x {
  from { transform: translate3d(0, 0, 0); }
  to { transform: translate3d(-50%, 0, 0); }
}

.arui-drift {
  animation-name: arui-drift-x;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  will-change: transform;
}

@keyframes arui-float {
  0%, 100% { transform: translate3d(0, 0, 0) scale(1.05); }
  50% { transform: translate3d(0, -2%, 0) scale(1.08); }
}

.arui-float {
  animation: arui-float 24s ease-in-out infinite;
}

.arui-grip { cursor: grab; touch-action: none; }
.arui-grip:active { cursor: grabbing; }

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .arui-drift, .arui-float { animation: none !important; }
}
```

- [ ] **Step 2: Trocar os imports de componente no showcase para `arui`**

Localizar todos os imports de `@/components/ui/*` dentro de `preview/` e trocar por um import agregado de `arui`. Rodar para achar os alvos:

```bash
grep -rnE "from \"@/components/ui/" preview
```

Para cada arquivo, substituir imports como `import { Toaster } from "@/components/ui/sonner"` por `import { Toaster } from "arui"` (agrupando múltiplos numa linha só quando vierem de vários módulos ui). Imports locais do showcase (`./lib/…`, `./components/…`) permanecem.

- [ ] **Step 3: Verificar que nenhum import de `@/components/ui` sobrou no showcase**

Run: `grep -rnE "from \"@/components/ui/" preview; echo "exit=$?"`
Expected: nenhuma linha (o `echo` mostra `exit=1` do grep sem match).

- [ ] **Step 4: Verificar build do showcase**

Run: `. ~/.nvm/nvm.sh && nvm use 22 >/dev/null && npm run build:preview`
Expected: `tsc -b` + `vite build` concluem sem erro; `dist/` do preview é gerado. (Node 20+ obrigatório para o Vite — usar nvm.)

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "refactor(arui): showcase consome a lib via import público (dogfood)"
```

---

### Task 3: Configurar build da lib (tsup) + `package.json` de publicação

**Files:**
- Create: `tsup.config.ts`
- Modify: `package.json`

**Interfaces:**
- Consumes: `src/index.ts` (Task 1) como entry, `src/theme.css` como asset.
- Produces: `dist/index.js` (ESM), `dist/index.d.ts` (tipos), `dist/theme.css`. Consumido pela Task 5 (pack/smoke) e Task 6 (publish).

- [ ] **Step 1: Instalar tsup**

```bash
. ~/.nvm/nvm.sh && nvm use 22 >/dev/null
npm install -D tsup
```

- [ ] **Step 2: Criar `tsup.config.ts`**

```ts
import { copyFileSync } from "node:fs"
import { defineConfig } from "tsup"

export default defineConfig({
  entry: { index: "src/index.ts" },
  format: ["esm"],
  dts: true,
  clean: true,
  treeshake: true,
  // resolve os aliases @/* via tsconfig paths
  tsconfig: "tsconfig.app.json",
  // theme.css é asset, não passa pelo bundler JS — copiado cru
  onSuccess: async () => {
    copyFileSync("src/theme.css", "dist/theme.css")
  },
})
```

- [ ] **Step 3: Reescrever `package.json`**

Remover `"private"`, adicionar campos de publicação, reclassificar dependências (peer/dep/dev) conforme quem realmente importa cada pacote (verificado):

```jsonc
{
  "name": "arui",
  "version": "0.1.0",
  "description": "Biblioteca de componentes React — Apple HIG + Tailwind 4 (shadcn-derived).",
  "license": "MIT",
  "type": "module",
  "sideEffects": ["**/*.css"],
  "files": ["dist"],
  "exports": {
    ".": { "types": "./dist/index.d.ts", "import": "./dist/index.js" },
    "./theme.css": "./dist/theme.css"
  },
  "scripts": {
    "dev": "vite",
    "build": "tsup",
    "build:preview": "tsc -b && vite build",
    "preview": "vite preview",
    "typecheck": "tsc -b",
    "prepublishOnly": "npm run typecheck && npm run build"
  },
  "peerDependencies": {
    "react": ">=19",
    "react-dom": ">=19",
    "tailwindcss": "^4",
    "react-hook-form": "^7"
  },
  "peerDependenciesMeta": {
    "react-hook-form": { "optional": true }
  },
  "dependencies": {
    "@base-ui/react": "^1.6.0",
    "@fontsource-variable/inter": "^5.2.8",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "embla-carousel-react": "^8.6.0",
    "input-otp": "^1.4.2",
    "lucide-react": "^1.14.0",
    "next-themes": "^0.4.6",
    "radix-ui": "^1.4.3",
    "react-day-picker": "^9.14.0",
    "react-resizable-panels": "^4.12.2",
    "recharts": "^3.8.0",
    "sonner": "^2.0.7",
    "tailwind-merge": "^3.5.0",
    "tw-animate-css": "^1.4.0",
    "vaul": "^1.1.2"
  },
  "devDependencies": {
    "@hookform/resolvers": "^5.4.0",
    "@tailwindcss/vite": "^4.2.1",
    "@types/node": "^24.12.0",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^5.2.0",
    "framer-motion": "^12.42.2",
    "react": "^19.2.4",
    "react-dom": "^19.2.4",
    "react-hook-form": "^7.75.0",
    "tailwindcss": "^4.2.1",
    "tsup": "^8.0.0",
    "typescript": "~5.9.3",
    "vite": "^7.3.1",
    "zod": "^4.4.3"
  }
}
```

Notas de classificação (todas verificadas via grep sobre `src/components/ui`):
- `react-hook-form` → **peer opcional** (só `form.tsx` importa). Fica em devDeps também p/ o showcase buildar.
- `@fontsource-variable/inter` e `tw-animate-css` → **dependencies** (o `theme.css` os `@import`a; o consumidor precisa deles instalados).
- `zod` + `@hookform/resolvers` → **devDeps apenas** (nenhum componente importa; são escolha de validação do consumidor).
- `shadcn` → **removido** (era só p/ `shadcn build`).
- `react`/`react-dom`/`tailwindcss` → **peer + dev** (peer p/ o consumidor, dev p/ o showcase).

- [ ] **Step 4: Instalar (sincroniza node_modules com a nova classificação) e buildar a lib**

```bash
. ~/.nvm/nvm.sh && nvm use 22 >/dev/null
npm install
npm run build
ls -la dist
```

Expected: `dist/index.js`, `dist/index.d.ts` e `dist/theme.css` presentes.
Se o `dts` falhar a resolver `@/…`: confirmar `tsconfig: "tsconfig.app.json"` no tsup.config; como fallback, instalar `tsc-alias` e rodar `tsc --emitDeclarationOnly` + `tsc-alias` para os tipos (registrar no `build` script).

- [ ] **Step 5: Verificar que o dist não vazou classes ausentes (sanity)**

Run: `node -e "import('./dist/index.js').then(m => console.log('exports:', Object.keys(m).length))"`
Expected: imprime um número alto (>150) de exports — confirma que o barrel resolveu.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "build(arui): tsup (ESM + dts) + package.json publicável + deps reclassificadas"
```

---

### Task 4: Remover a infraestrutura de registry

**Files:**
- Delete: `registry.json`
- Delete: `components.json`
- Delete: `scripts/validate-registry.mjs` (e `scripts/` se ficar vazio)

**Interfaces:**
- Consumes: nada. Produces: nada. Puramente remoção — os scripts `registry:build`/`registry:validate` já saíram do `package.json` na Task 3.

- [ ] **Step 1: Apagar os artefatos de registry**

```bash
cd ~/workspace/arui
git rm registry.json components.json scripts/validate-registry.mjs
rmdir scripts 2>/dev/null || true
git status --short
```

- [ ] **Step 2: Verificar que não há referências pendentes à infra de registry**

Run: `grep -rnE "registry\.json|components\.json|shadcn build|registry:build|registry:validate|validate-registry" --include=*.ts --include=*.tsx --include=*.json --include=*.md . | grep -v docs/superpowers`
Expected: nenhuma linha (ou só o README, que a Task 5 reescreve).

- [ ] **Step 3: Verificar que build e typecheck seguem verdes sem a infra**

```bash
. ~/.nvm/nvm.sh && nvm use 22 >/dev/null
npm run typecheck && npm run build
```
Expected: ambos exit 0.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "chore(arui): remove infra de registry (registry.json, components.json, shadcn build)"
```

---

### Task 5: README do contrato npm + validação de empacotamento + smoke real

**Files:**
- Modify: `README.md` (contrato `shadcn add` → `npm install`)
- Create (temporário, fora do repo): app de smoke em `/tmp/claude-1002/.../scratchpad/arui-smoke`

**Interfaces:**
- Consumes: `dist/` (Task 3). Produces: confiança de que o tarball instala e renderiza — gate para a Task 6.

- [ ] **Step 1: Reescrever o README para o contrato npm**

Substituir a seção de instalação `shadcn add` por:

````markdown
## Instalação

```bash
npm install arui
```

`arui` assume **React 19** e **Tailwind 4** (peerDependencies).

### Setup do tema (Tailwind 4)

No CSS da sua app:

```css
@import "tailwindcss";
@import "arui/theme.css";
@source "../node_modules/arui/dist";
```

- `arui/theme.css` traz os tokens HIG, o `dark` variant e a fonte Inter — já self-contained.
- O `@source` é **obrigatório**: sem ele o Tailwind não escaneia `node_modules` e as classes dos componentes não geram CSS. Ajuste o caminho relativo à localização do seu arquivo CSS.

### Uso

```tsx
import { Button, Card, Sheet } from "arui"

export function Example() {
  return <Button>Olá</Button>
}
```

### Forms (opcional)

Os componentes `Form`/`FormField` usam `react-hook-form` (peer **opcional**). Instale se for usá-los:

```bash
npm install react-hook-form
```

Validação com zod é escolha sua (`zod` + `@hookform/resolvers`) — a arui não os exige.
````

- [ ] **Step 2: Validar o tarball com publint + attw**

```bash
. ~/.nvm/nvm.sh && nvm use 22 >/dev/null
npm run build
npx publint
npx @arethetypeswrong/cli --pack
```
Expected: `publint` sem erros; attw sem problemas de resolução de tipos para o entrypoint `.` (ESM). Corrigir `exports`/`files` se apontado.

- [ ] **Step 3: Gerar o tarball local**

```bash
npm pack
ls arui-0.1.0.tgz
```
Expected: `arui-0.1.0.tgz` criado (contém só `dist/` + package.json + README).

- [ ] **Step 4: Criar app de smoke Vite + React + Tailwind 4 e instalar o tgz**

```bash
SMOKE=/tmp/claude-1002/-home-augustoribeiro-workspace-new-platform/7f718845-8eb7-4374-841b-651b0a90a06b/scratchpad/arui-smoke
. ~/.nvm/nvm.sh && nvm use 22 >/dev/null
rm -rf "$SMOKE" && npm create vite@latest "$SMOKE" -- --template react-ts
cd "$SMOKE"
npm install
npm install @tailwindcss/vite tailwindcss react-hook-form
npm install ~/workspace/arui/arui-0.1.0.tgz
```

- [ ] **Step 5: Aplicar o contrato do consumidor no app de smoke**

Editar `vite.config.ts` do smoke para incluir o plugin do Tailwind:

```ts
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "vite"

export default defineConfig({ plugins: [react(), tailwindcss()] })
```

Substituir `src/index.css` por:

```css
@import "tailwindcss";
@import "arui/theme.css";
@source "../node_modules/arui/dist";
```

Substituir `src/App.tsx` por:

```tsx
import { Button, Card, CardContent, Sheet, SheetContent, SheetTrigger } from "arui"

export default function App() {
  return (
    <div className="p-8 space-y-4 bg-background text-foreground min-h-screen">
      <h1 className="text-title-1">arui smoke</h1>
      <Button>Botão primário</Button>
      <Button variant="outline">Outline</Button>
      <Card><CardContent className="p-4">Card HIG</CardContent></Card>
      <Sheet>
        <SheetTrigger asChild><Button variant="secondary">Abrir sheet</Button></SheetTrigger>
        <SheetContent>Conteúdo do sheet</SheetContent>
      </Sheet>
    </div>
  )
}
```

- [ ] **Step 6: Rodar o smoke e confirmar visualmente**

```bash
cd "$SMOKE"
npm run build   # gate 1: compila e faz tree-shake sem erro
npm run dev     # gate 2: abrir no browser
```
Expected:
- `npm run build` conclui sem erro (tipos + bundle OK, componentes não usados fora do bundle).
- No browser: `<Button>` com estilo HIG (não estilo cru), fonte Inter aplicada, o Sheet abre com animação (tw-animate-css). Adicionar `class="dark"` no `<html>` via DevTools inverte para dark mode.

Se as classes não aparecerem (componentes sem estilo): o `@source` está errado/ausente — revisar o caminho relativo no `src/index.css` do smoke.

- [ ] **Step 7: Commit (só o README; o app de smoke é descartável e fica fora do repo)**

```bash
cd ~/workspace/arui
git add README.md
git commit -m "docs(arui): README do contrato npm (install + setup TW4 + forms opcional)"
```

---

### Task 6: Publicar no npm

> **Ação externa irreversível.** Só executar após o usuário confirmar explicitamente e com `npm whoami` autenticado na conta dona do nome `arui`. Uma versão publicada não pode ser sobrescrita (só deprecada/`unpublish` em janela curta).

**Files:** nenhum (usa `dist/` da Task 3, README da Task 5).

- [ ] **Step 1: Confirmar autenticação e conteúdo do tarball**

```bash
. ~/.nvm/nvm.sh && nvm use 22 >/dev/null
npm whoami            # deve retornar o dono do pacote
npm pack --dry-run    # revisar a lista de arquivos: só dist/ + package.json + README
```

- [ ] **Step 2: Publicar**

```bash
cd ~/workspace/arui
npm publish --access public
```
Expected: `+ arui@0.1.0`.

- [ ] **Step 3: Verificar no registry**

```bash
npm view arui version
```
Expected: `0.1.0`.

- [ ] **Step 4: Tag de versão no git**

```bash
git tag v0.1.0
git push --tags   # se houver remote configurado
```

---

## Self-Review

**Spec coverage** (cada requisito do spec → task):
- Contrato do consumidor (theme.css + @source + import) → Task 5 (README) + Task 1/2 (theme self-contained, dogfood).
- Layout `src/` + barrel → Task 1.
- Build tsup ESM + dts → Task 3.
- `exports`/`sideEffects`/`files`/`package.json` → Task 3.
- Deps peer vs dep (RHF peer opcional; zod fora) → Task 3 (refina o spec: só RHF é peer, não zod/resolvers — verificado por grep).
- Remoção de registry infra → Task 4.
- Showcase como docs consumindo a lib → Task 2.
- Gates de verificação (publint/attw + smoke) → Task 5.
- Publicação → Task 6.
- Trade-off source-scanning documentado → README (Task 5, nota do `@source` obrigatório).

**Placeholder scan:** nenhum "TBD/TODO/etc"; todo passo tem comando ou código concreto. O único ponto com fallback condicional (dts + `@/`) traz o comando alternativo explícito (Task 3, Step 4).

**Type/name consistency:** barrel usa `cn` (de `@/lib/utils`) e `useIsMobile` (de `@/hooks/use-mobile`) — nomes confirmados por grep. Nome do pacote `arui` e export `arui/theme.css` consistentes entre Tasks 1, 2, 3, 5, 6.

**Refino registrado sobre o spec:** o spec listava `react-hook-form` + `@hookform/resolvers` + `zod` como peers opcionais; a verificação mostrou que só `form.tsx` importa `react-hook-form` e nenhum componente importa zod/resolvers → apenas `react-hook-form` é peer opcional; zod/resolvers são devDeps (showcase) e escolha do consumidor. Vale refletir isso no spec depois, se quiser mantê-lo como fonte da verdade.
