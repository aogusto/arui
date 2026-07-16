# Arui

Arui is an open-source React component library with an **Apple HIG** identity, distributed
as an **npm package**. Import the components you need, add one theme stylesheet, and Tailwind
v4 generates the rest.

- Live showcase & component gallery: **https://arui.vercel.app**
- Source: **https://github.com/aogusto/arui**

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

## Components

57 components, exported flat from the package root (`import { X } from "arui"`), plus the
`cn()` class-merge utility and the `useIsMobile` hook.

| Group | Components |
|---|---|
| Disclosure | `accordion`, `collapsible` |
| Buttons & actions | `button`, `button-group`, `toggle`, `toggle-group`, `kbd` |
| Forms & inputs | `form`, `field`, `input`, `input-group`, `input-otp`, `label`, `checkbox`, `radio-group`, `select`, `native-select`, `combobox`, `switch`, `slider`, `textarea`, `calendar` |
| Layout & structure | `card`, `separator`, `aspect-ratio`, `scroll-area`, `resizable`, `sidebar`, `item`, `direction` |
| Overlays & feedback | `dialog`, `alert-dialog`, `sheet`, `drawer`, `popover`, `hover-card`, `tooltip`, `dropdown-menu`, `context-menu`, `menubar`, `command`, `sonner` (toast), `alert`, `empty`, `skeleton`, `spinner`, `progress`, `badge` |
| Navigation | `tabs`, `breadcrumb`, `pagination`, `navigation-menu` |
| Data display | `table`, `chart`, `carousel`, `avatar` |
| Foundation | `glass-surface` — the frosted material used by dialogs, sheets, popovers, etc. |

Each entry above is a Tailwind-styled React component (or set of subcomponents, e.g. `Dialog`,
`DialogTrigger`, `DialogContent`, …) exported by name from `"arui"`.

### Example: dialog

```tsx
import {
  Button,
  Dialog, DialogTrigger, DialogContent, DialogHeader,
  DialogTitle, DialogDescription, DialogFooter, DialogClose,
} from "arui"

export default function Example() {
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

The `form` export is a thin, accessible wrapper over `react-hook-form`. Pair it with `input`,
`label`, and `button`:

```bash
npm install react-hook-form @hookform/resolvers zod
```

```tsx
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import {
  Button, Input,
  Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,
} from "arui"

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

## Development

Working on the library itself (not consuming it):

```bash
npm install
npm run dev            # component gallery (Vite dev server)
npm run build           # tsup → dist/{index.js,index.d.ts,theme.css} (what gets published)
npm run build:preview   # tsc -b + vite build → showcase-dist/ (the arui.vercel.app site)
npm run preview         # serves the built showcase
npm run typecheck       # tsc -b
```

The showcase (`preview/`) dogfoods the package: it imports components from `"arui"`, aliased
in `vite.config.ts` straight to `src/index.ts` during local dev, so the gallery always reflects
the real public API.

## License

MIT — see [`LICENSE`](./LICENSE).
