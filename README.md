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

The registry is served over HTTP. During local development the preview server exposes it at
`http://localhost:4173/r/*.json` (see "Serving the registry locally" below); once hosted,
swap that origin for your deployed base URL.

**1. Install the theme foundation first** (it carries `cn()`, `use-mobile`, and every token):

```bash
npx shadcn@latest add http://localhost:4173/r/theme.json
```

**2. Then add the components you need:**

```bash
npx shadcn@latest add http://localhost:4173/r/button.json http://localhost:4173/r/dialog.json
```

**3. Import the token stylesheet once**, in the CSS entry that already imports Tailwind:

```css
/* src/index.css */
@import "tailwindcss";
@import "./styles/arui.css";
```

That's it — components render with the full HIG look (Inter type scale, HIG accent colors,
pill radii, frosted-glass overlays) with no per-component configuration.

## Consumer setup (validated end-to-end)

These are the exact steps used to smoke-test a clean Vite + React + TS consumer against the
registry:

**1. Scaffold and install Tailwind v4:**

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app && npm install
npm install tailwindcss @tailwindcss/vite
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

**3. Teach TypeScript the alias** in `tsconfig.app.json` (`moduleResolution: "bundler"`
resolves `paths` without `baseUrl`):

```jsonc
{
  "compilerOptions": {
    // …existing options…
    "paths": { "@/*": ["./src/*"] }
  }
}
```

**4. Create `src/index.css`** with the Tailwind import (the token import is added after the
theme is installed):

```css
@import "tailwindcss";
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

**6. Install theme + components**, then add `@import "./styles/arui.css";` to `src/index.css`
(the CLI drops the file at `src/styles/arui.css` but does not add the import for you):

```bash
npx shadcn@latest add http://localhost:4173/r/theme.json
npx shadcn@latest add http://localhost:4173/r/button.json http://localhost:4173/r/dialog.json
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
  http://localhost:4173/r/form.json \
  http://localhost:4173/r/input.json \
  http://localhost:4173/r/label.json \
  http://localhost:4173/r/button.json
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

## Development

- `npm run dev` — component gallery (Vite dev server)
- `npm run typecheck` — `tsc -b`
- `npm run registry:build` — regenerate `public/r/*.json` from `registry.json`
- `npm run registry:validate` — validate the registry manifest

## License

MIT
