# Arui

Arui is an open-source React component library with an **Apple HIG** identity, distributed
as a **shadcn-style registry**. You don't install it as an npm package — you pull the source
of each component into your own project with the `shadcn` CLI and own the code from there.

Components are copied verbatim into your repo, wired to your `@/` alias, and styled entirely
through a single set of HIG design tokens (typography scale, semantic colors, glass materials,
radii, motion) that ship as the `theme` foundation item.

## Prerequisites

- **React 19** (also works on 18)
- **Tailwind CSS v4** — Arui's tokens are delivered as a Tailwind v4 stylesheet
  (`@theme inline`, `@custom-variant`, `@utility`, `@layer base`). Tailwind v3 is **not**
  supported.
- A project with a `@` path alias pointing at your source root (e.g. `@/*` → `./src/*`).
- The `shadcn` CLI (invoked via `npx shadcn@latest`).

## What's in the registry

**Foundation**

| Item | Type | What it installs |
|---|---|---|
| `theme` | `registry:style` | `lib/utils.ts` (`cn()` with the HIG `tailwind-merge` registry), `hooks/use-mobile.ts`, and `styles/arui.css` (all HIG tokens). Install this **first**. |

**Signature surface**

| Item | Notes |
|---|---|
| `glass-surface` | `GlassSurface` — the frosted "glass" material used by overlays. |

**13 primitives**

| Item | Main exports |
|---|---|
| `button` | `Button`, `buttonVariants` |
| `card` | `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`, `CardAction` |
| `input` | `Input` |
| `label` | `Label` |
| `badge` | `Badge`, `badgeVariants` |
| `skeleton` | `Skeleton` |
| `tabs` | `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent` |
| `tooltip` | `Tooltip`, `TooltipTrigger`, `TooltipContent`, `TooltipProvider` |
| `select` | `Select`, `SelectTrigger`, `SelectValue`, `SelectContent`, `SelectItem`, … |
| `dialog` | `Dialog`, `DialogTrigger`, `DialogContent`, `DialogHeader`, `DialogFooter`, `DialogTitle`, `DialogDescription`, `DialogClose` (glass-backed) |
| `sheet` | `Sheet`, `SheetTrigger`, `SheetContent`, `SheetHeader`, `SheetFooter`, `SheetTitle`, `SheetDescription`, `SheetClose` |
| `form` | `Form`, `FormField`, `FormItem`, `FormLabel`, `FormControl`, `FormDescription`, `FormMessage`, `useFormField` |
| `sonner` | `Toaster` (re-exports `toast` from `sonner`) |

Composed items pull their dependencies automatically. `dialog`, for example, resolves
`theme` + `glass-surface` + `button` in a single `add`.

## Installing

The registry is hosted on GitHub Pages at **`https://aogusto.github.io/arui`**, so consumers
install straight from that origin — `https://aogusto.github.io/arui/r/<item>.json`. (For a
local copy of the registry, see "Serving the registry locally" below and swap the origin for
`http://localhost:4173`.)

**1. Install the theme foundation first** (it carries `cn()`, `use-mobile`, and every token):

```bash
npx shadcn@latest add https://aogusto.github.io/arui/r/theme.json
```

**2. Then add the components you need:**

```bash
npx shadcn@latest add https://aogusto.github.io/arui/r/button.json https://aogusto.github.io/arui/r/dialog.json
```

**3. Wire the stylesheet imports**, in the CSS entry that already imports Tailwind. Order
matters, and all four lines are required:

```css
/* src/index.css */
@import "tailwindcss";
@import "tw-animate-css";          /* animate-in / fade-in / zoom-in used by the overlays */
@import "@fontsource-variable/inter"; /* the Inter Variable face --font-sans points at */
@import "./styles/arui.css";       /* the Arui HIG tokens (must come last) */
```

`tw-animate-css` and `@fontsource-variable/inter` are declared as npm `dependencies` of the
`theme` item, so `shadcn add theme.json` installs the packages for you — but the CLI does
**not** add the `@import` lines above; do that by hand. Without `tw-animate-css` the dialog/
sheet/select/tooltip open with no transition; without the Inter face `--font-sans` falls back
to the system sans-serif.

That's it — components render with the full HIG look (Inter type scale, HIG accent colors,
pill radii, frosted-glass overlays) with no per-component configuration. You do **not** need
`shadcn`'s own `tailwind.css`/base-color stylesheet: Tailwind v4 + `tw-animate-css` +
`@fontsource-variable/inter` + `arui.css` are fully self-sufficient for the Arui look.

## Consumer setup (validated end-to-end)

These are the exact steps used to smoke-test a clean Vite + React + TS consumer against the
registry:

**1. Scaffold and install Tailwind v4:**

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app && npm install
npm install tailwindcss @tailwindcss/vite
# animation utilities + the Inter Variable face the tokens expect
# (shadcn also installs these when you add theme.json — listing them here makes the setup explicit)
npm install tw-animate-css @fontsource-variable/inter
```

**2. Add the Tailwind v4 plugin and the `@` alias** in `vite.config.ts`:

```ts
import path from "node:path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
})
```

**3. Teach the alias to _both_ the `shadcn` CLI and TypeScript — this must go in the root
`tsconfig.json`.** The CLI reads the **root `tsconfig.json`** (not `tsconfig.app.json`) to
resolve `@/*` and decide where to write files. The Vite `react-ts` scaffold ships a root
`tsconfig.json` that contains only `files`/`references` and **no `compilerOptions`**, so
without this step the CLI can't expand `@/*`, writes components into a literal
`./@/components/ui/` folder, and every `@/…` import fails to resolve (`TS2307` — `tsc -b`
and `npm run build` exit with code 2). Add a `compilerOptions` block with `baseUrl` and
`paths`, keeping the existing `files`/`references`:

```jsonc
// tsconfig.json (root) — add compilerOptions, keep files/references
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": { "@/*": ["./src/*"] }
  }
}
```

Mirror the same `paths` in `tsconfig.app.json` too (that's the project `tsc -b` actually
compiles, and it gives your editor resolution inside app code):

```jsonc
// tsconfig.app.json
{
  "compilerOptions": {
    // …existing options…
    "paths": { "@/*": ["./src/*"] }
  }
}
```

**4. Create `src/index.css`** with the Tailwind, animation, and font imports (the Arui token
import is added last, after the theme is installed — step 6):

```css
@import "tailwindcss";
@import "tw-animate-css";
@import "@fontsource-variable/inter";
```

**5. Add a minimal `components.json`** so the CLI knows where to place files:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/index.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks",
    "utils": "@/lib/utils"
  }
}
```

**6. Install theme + components**, then add `@import "./styles/arui.css";` as the **last**
import in `src/index.css` (the CLI drops the file at `src/styles/arui.css` but does not add
the import for you):

```bash
npx shadcn@latest add https://aogusto.github.io/arui/r/theme.json
npx shadcn@latest add https://aogusto.github.io/arui/r/button.json https://aogusto.github.io/arui/r/dialog.json
```

`src/index.css` now carries all four imports, in this order:

```css
@import "tailwindcss";
@import "tw-animate-css";
@import "@fontsource-variable/inter";
@import "./styles/arui.css";
```

**7. Use the components:**

```tsx
import { Button } from "@/components/ui/button"
import {
  Dialog, DialogTrigger, DialogContent, DialogHeader,
  DialogTitle, DialogDescription, DialogFooter, DialogClose,
} from "@/components/ui/dialog"

export default function App() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Glass surface dialog</DialogTitle>
          <DialogDescription>Backed by the Arui glass material.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild><Button variant="ghost">Cancel</Button></DialogClose>
          <Button>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
```

## Example: a form (react-hook-form + zod)

The `form` item is a thin, accessible wrapper over `react-hook-form`. Pair it with `input`,
`label`, and `button`:

```bash
npx shadcn@latest add \
  https://aogusto.github.io/arui/r/form.json \
  https://aogusto.github.io/arui/r/input.json \
  https://aogusto.github.io/arui/r/label.json \
  https://aogusto.github.io/arui/r/button.json
npm install react-hook-form @hookform/resolvers zod
```

```tsx
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form, FormControl, FormDescription, FormField,
  FormItem, FormLabel, FormMessage,
} from "@/components/ui/form"

const schema = z.object({
  email: z.string().email("Enter a valid email"),
  displayName: z.string().min(2, "At least 2 characters"),
})
type FormValues = z.infer<typeof schema>

export function ProfileForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", displayName: "" },
  })

  const onSubmit = form.handleSubmit((values) => {
    // submit `values` to your API here
  })

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field} />
              </FormControl>
              <FormDescription>We'll never share your email.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="displayName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Display name</FormLabel>
              <FormControl>
                <Input placeholder="Ada Lovelace" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Save</Button>
      </form>
    </Form>
  )
}
```

## Serving the registry locally

From this repository:

```bash
npm install
npm run build:preview          # tsc -b + vite build (emits dist/, including dist/r/*.json)
npm run preview -- --port 4173 # serves the built registry at http://localhost:4173/r/*.json
```

Verify it's up:

```bash
curl -s http://localhost:4173/r/theme.json | head
```

The preview app (`npm run dev`) renders a gallery of every component for visual review in
light and dark themes.

## Hosting

The live registry is hosted on **GitHub Pages** at `https://aogusto.github.io/arui`. Consumers
install from there:

```bash
npx shadcn@latest add https://aogusto.github.io/arui/r/<item>.json
```

Deployment is automated: `.github/workflows/deploy-pages.yml` runs on every push to `master`,
executes `npm run registry:build` + `npm run build:preview`, and publishes `dist/` (the preview
gallery plus a copy of the registry JSON at `dist/r/*.json`) to Pages. The built gallery is
served under the `/arui/` subpath — `vite.config.ts` sets `base: "/arui/"` for `command ===
"build"` (dev stays on `/`).

> **Enabling Pages (one-time repo setting):** in the GitHub repo, **Settings → Pages →
> Build and deployment → Source = "GitHub Actions"**. Without this the workflow builds but
> cannot deploy.

### Changing the base URL

The base URL is **baked into the generated JSON as absolute URLs**, not resolved at request
time. `registry.json` uses `https://aogusto.github.io/arui` for `homepage` and inside every
`registryDependencies` entry (e.g. `dialog` depends on
`https://aogusto.github.io/arui/r/theme.json`), and `shadcn build` copies those absolute URLs
verbatim into each `public/r/*.json`. To host under a different origin:

1. In `registry.json`, replace `https://aogusto.github.io/arui` with the new base URL — in
   `homepage` **and** in every `registryDependencies` URL across all items.
2. Re-run `npm run registry:build` so the regenerated `public/r/*.json` carry the new
   absolute URLs.

(There is intentionally no env-driven URL rewriting yet — a single find-and-replace plus a
rebuild is the v1 workflow.)

## Development

- `npm run dev` — component gallery (Vite dev server)
- `npm run typecheck` — `tsc -b`
- `npm run registry:build` — regenerate `public/r/*.json` from `registry.json`
- `npm run registry:validate` — validate the registry manifest

## License

MIT
