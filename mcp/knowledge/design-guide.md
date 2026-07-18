# arui Design Guide (Apple HIG for AI agents)

This guide is for an agent that already has arui installed and does
`import { Button, Dialog, GlassSurface, cn } from "@aogusto/arui"`. It translates
Apple's Human Interface Guidelines (HIG) into arui's real tokens, real material system,
and real components, so generated UI feels like native Apple software without
reinventing anything arui already ships.

Nothing here needs to be hand-installed. The tokens live in `theme.css` (imported once
in the consumer's global CSS), the glassmorphism material lives in the `GlassSurface`
component and the `glass` object, and every primitive below is a named export of
`@aogusto/arui`. Read this guide, then build with the real exports, not ad-hoc classes.

---

## 1. Core philosophy (always apply)

Apple UI optimizes for deference to content, clarity, and depth. Internalize these
principles before writing any JSX:

1. **Content first.** Chrome (nav, controls, toolbars) should recede. Never let
   decoration out-shout content. Content-layer surfaces (cards, pages, tables) are flat
   system colors; glassmorphism lives in the functional layer (nav, tab bars, toolbars,
   popovers, sheets).
2. **Hierarchy through depth, not ornament.** Use layering, translucency, and soft
   shadow to separate layers. Avoid heavy borders, gradients on buttons, or noisy drop
   shadows.
3. **Consistency and system feel.** Use arui's tokens, sizes, radii, and HIG type scale
   as they exist. Don't invent a parallel scale to be different.
4. **Adaptivity.** Every component must work in Light/Dark, Increased Contrast, Reduced
   Transparency, Reduced Motion, and varying viewport widths. arui bakes most of this
   into `theme.css` already (see section 7).
5. **Feedback and responsiveness.** Tappable targets visibly react (scale, tint).
   Controls should feel physical, not just flip color instantly.
6. **Restraint with glassmorphism.** One glass surface per screen region at most. If
   everything is glass, nothing is.

If a request conflicts with these principles ("put glass on every card"), push back
once, recommend the correct pattern (a flat `Card`), and only comply if the user
insists.

---

## 2. Materials: glassmorphism

arui's translucent material technique is called **glassmorphism** in this codebase
(the visual language it expresses is still Apple HIG; the technique itself is
conceptually inspired by Apple's Liquid Glass, but "glassmorphism" is the name to use
in code, comments, and copy from here on).

### 2.1 When to use it

- **Functional layer only:** navigation (tab bars, sidebars, top bars), floating
  controls (action bars, FABs), ephemeral surfaces (sheets, popovers, menus, toasts),
  and hero panels over rich backgrounds (photos, gradients, video).
- **Do not** use it on static content cards, page backgrounds, form containers, article
  bodies, or tables. Those are content-layer, use `Card` or a plain `bg-background`
  surface instead.
- **One glass region per visual zone.** Never stack glass on glass.

### 2.2 The real component: `GlassSurface`

```tsx
import { GlassSurface, Button } from "@aogusto/arui"
import { Home, Search, Bell, User } from "lucide-react"

<GlassSurface variant="regular" className="rounded-full">
  <div className="flex items-center gap-1 p-2">
    <Button size="icon" variant="ghost" aria-label="Home"><Home /></Button>
    <Button size="icon" variant="ghost" aria-label="Search"><Search /></Button>
    <Button size="icon" variant="ghost" aria-label="Notifications"><Bell /></Button>
    <Button size="icon" variant="ghost" aria-label="Profile"><User /></Button>
  </div>
</GlassSurface>
```

`GlassSurface` (from `src/components/ui/glass-surface.tsx`, re-exported at the barrel)
takes `variant` and an optional `dim` prop, and wraps children in a
`rounded-2xl` container by default (override via `className`).

### 2.3 Variants (the real `glass` object)

| Variant | Composition | Use when |
|---|---|---|
| `regular` | `bg-glass-regular/60` (`/40` when `backdrop-filter` is supported), `backdrop-blur-glass backdrop-saturate-150`, `border-white/15` (`dark:border-white/10`), `shadow-glass` | default: tab bars, sidebars, popovers, most toolbars, action bars over content |
| `thick` | Same recipe but `bg-glass-regular/96` (`/90` supported) and a lighter `backdrop-blur-md`, more opaque, higher-contrast panel | when legibility over busy or bright backgrounds matters more than see-through, e.g. a settings sheet over a photo grid |
| `clear` | `bg-glass-clear/10` (`/5` supported), `backdrop-blur-[12px]`, `border-white/10`, `shadow-glass-sm` (lighter) | only over visually rich backgrounds (photos, gradients, media) where the background should read clearly through; pass `dim` to add a 35% black scrim (`bg-black/35`) behind the glass when the background is bright |

`glass.regular` / `glass.thick` / `glass.clear` are also exported directly as class
strings if you need the recipe without the wrapper div, but prefer `GlassSurface` for
new UI, it already handles the `dim` scrim and the `rounded-[inherit]` nesting.

Real tokens backing this (already in `theme.css`, nothing to add):

```css
--color-glass-regular: rgb(var(--glass-regular));  /* 255 255 255 light, 28 28 30 dark */
--color-glass-clear:   rgb(var(--glass-clear));    /* 255 255 255 light, 0 0 0 dark */
--shadow-glass:    0 1px 0 0 rgb(255 255 255 / 0.35) inset, 0 8px 24px -8px rgb(0 0 0 / 0.25);
--shadow-glass-sm: 0 1px 0 0 rgb(255 255 255 / 0.25) inset, 0 2px 8px -2px rgb(0 0 0 / 0.2);
--blur-glass: 24px;
```

Use them via the Tailwind utilities `bg-glass-regular`, `bg-glass-clear`,
`backdrop-blur-glass`, `shadow-glass`, `shadow-glass-sm`. These are registered in
`cn()`'s `tailwind-merge` config (`src/lib/utils.ts`), so `cn("shadow-glass",
"shadow-none")` resolves correctly instead of keeping both classes.

### 2.4 Standard materials (content-layer structure)

For subtle separation inside content (a sticky table header strip, a divider panel),
don't reach for glass, use the flat layered backgrounds instead:

- `bg-background` for the base page surface
- `bg-background-secondary` / `bg-background-tertiary` for grouped/elevated content
  panels (settings-style lists, grouped sections)
- `bg-card` / `text-card-foreground` for the shadcn `Card` surface

### 2.5 Scroll-edge effect

When content scrolls under a sticky header or tab bar, the bar should gain a stronger
blur/fill as content passes beneath it. Toggle a `data-scrolled` attribute from a scroll
listener:

```tsx
<header
  data-scrolled={scrolled || undefined}
  className={cn(
    "sticky top-0 z-40 transition-colors",
    "data-[scrolled]:bg-background/80 data-[scrolled]:backdrop-blur-glass",
    "data-[scrolled]:border-b data-[scrolled]:border-separator"
  )}
/>
```

### 2.6 Glass highlight (the animated pill)

Besides the static surfaces above, arui also has a moving glassmorphism pill: a small
frosted shape that slides to whichever item is currently active or highlighted, instead
of the item just flipping color. It reads as one continuous piece of glass gliding
between positions.

- **Tint:** the pill's fill mixes in `var(--glass-tint, var(--primary))`, so it always
  picks up the app's accent color (falls back to `--primary` when no `AruiThemeProvider`
  tint is set, see section 3.5). A themed app gets a pill that matches its buttons and
  focus ring without extra work.
- **Motion:** a spring transition that collapses to an instant snap under
  `prefers-reduced-motion: reduce` (section 6.3). The reduced-motion handling lives inside
  `GlassPill` itself. If you build a custom consumer of the primitive, reuse `GlassPill`
  rather than animating the position by hand, so you inherit that behavior for free.
- **Where it shows up automatically, no prop needed:**
  - Menu items in `DropdownMenu`, `ContextMenu`, `Menubar`, `Select`, `Command`, and
    `Combobox`: the keyboard-highlighted or hovered item gets the pill by default.
    Menubar also shows it behind the open top-level trigger in the bar itself.
  - `Tabs` `variant="glass"` behind the active trigger (see section 9.4).
  - `ToggleGroup` `type="single"` behind the pressed item (a `type="multiple"`
    `ToggleGroup` has no single active item, so the pill stays off there).
  - `Sidebar` behind the active menu item (including nested submenu items),
    `NavigationMenu` behind the active link, `Pagination` behind the active page.
- **Build your own:** the primitive is exported too. `useGlassHighlight({ activeSelector
  })` returns a callback `ref` and a `geometry` object; render `<GlassPill
  geometry={geometry} />` (both from `@aogusto/arui`) inside a `relative` container to
  get the same sliding pill on a custom list or menu.

---

## 3. Color system

arui ships two color layers, both real and both live in `theme.css`. Use semantic
tokens, never raw hex, in component `className`.

### 3.1 HIG semantic layer (label / fill / background / separator / system colors)

```
text-label              text-label-secondary     text-label-tertiary   text-label-quaternary
bg-fill                 bg-fill-secondary        bg-fill-tertiary      bg-fill-quaternary
bg-background-secondary bg-background-tertiary
border-separator        border-separator-opaque
text-red   text-orange  text-yellow  text-green  text-mint  text-teal
text-cyan  text-indigo  text-purple  text-pink   text-brown
```

- `label*` is the text hierarchy (primary to quaternary emphasis).
- `fill*` is for control backgrounds (chips, segmented controls, list rows).
- `background-secondary` / `background-tertiary` are grouped/elevated backgrounds
  (dark mode uses slightly lighter tiers to fake depth since shadows don't read on
  near-black).
- `separator` / `separator-opaque`: **`separator` already has alpha baked in for dark
  mode** (`0 0% 100% / 0.12`). Never chain an alpha modifier onto it
  (`border-separator/50` breaks light/dark parity). If you need to control opacity
  yourself, use `separator-opaque` instead.
- `red`, `orange`, `yellow`, `green`, `mint`, `teal`, `cyan`, `indigo`, `purple`,
  `pink`, `brown` are the Apple system colors, available as `bg-*`/`text-*`/`border-*`.

There is also a dedicated HIG accent, `text-hig-accent` / `bg-hig-accent` (a systemBlue
tint, `211 100% 50%` light / `211 100% 54%` dark), separate from shadcn's neutral
`accent` token below. Reach for `hig-accent` when you specifically want the Apple blue
tint on top of HIG-styled content (a link, a selected state) rather than the
component-library default.

### 3.2 shadcn / component layer (drives arui's actual component defaults)

```
bg-background / text-foreground        base app surface
bg-card / text-card-foreground         Card, elevated panels
bg-popover / text-popover-foreground   Popover, DropdownMenu, Select content
bg-primary / text-primary-foreground   default Button, primary CTA
bg-secondary / text-secondary-foreground  secondary Button, Badge
bg-muted / text-muted-foreground       subtle text/bg, placeholders, TabsList track
bg-accent / text-accent-foreground     hover/highlight fill (menu item hover, active tab)
bg-destructive                         destructive Button/Badge, delete confirmations
border-border                          default borders
ring-ring                              focus ring
bg-sidebar / text-sidebar-foreground / ... sidebar-specific tokens for `Sidebar`
--chart-1 .. --chart-5                 chart series colors
```

Colors are defined in `oklch()` for perceptual uniformity; dark mode flips via the
`.dark` class (`next-themes`-style toggling, same pattern as new-platform).

### 3.3 Rules

- Use semantic tokens (`text-label`, `bg-background`, `border-separator`,
  `bg-primary`) inside components, never `bg-[#fff]` / `text-[#000]` / arbitrary hex.
- If a color exists as a token in `theme.css` (`--color-green`, `--color-separator`,
  etc.), consume it as the matching utility class. Don't reach for
  `bg-[hsl(var(--green))]` or similar, it bypasses the `tailwind-merge` registry in
  `src/lib/utils.ts` and breaks conflict resolution.
- One tint per screen for interactive affordances (pick either the shadcn `primary`
  used by default `Button`, or `hig-accent` when hand-styling HIG content). Don't mix
  both as competing "brand colors" on one screen.
- Never encode meaning in color alone, pair it with an icon, shape, or label.
- Ship Light and Dark, even for single-mode apps, so glass and system colors adapt.

### 3.4 System color usage

| Role | Token |
|---|---|
| Destructive action, error | `destructive` (shadcn) or `red` (HIG) |
| Warning | `orange` / `yellow` |
| Success, confirmation | `green` |
| Information, default interactive tint | `primary` (shadcn default) or `hig-accent` |
| Premium, purchases | `indigo` / `purple` |

### 3.5 Theming the accent color

Wrap the app once in `AruiThemeProvider` (from `@aogusto/arui`) to swap the accent used
everywhere, instead of hand-editing tokens component by component:

```tsx
import { AruiThemeProvider } from "@aogusto/arui"

<AruiThemeProvider tint="pink">
  <App />
</AruiThemeProvider>
```

`tint` accepts a named preset (`blue`, `indigo`, `violet`, `pink`, `rose`, `green`,
`teal`, `orange`, `red`) or any CSS color (hex, `rgb()`, `oklch()`). It sets
`--primary`, `--ring`, and `--glass-tint`, and computes a contrasting
`--primary-foreground` from the tint's luminance so text on a primary-colored surface
stays legible whether the tint is light or dark.

One tint reaches three places: the default `Button` fill and the shared focus ring
(section 3.2), a `GlassSurface` with `tint="accent"` (section 2.2), and the animated
glass highlight pill (section 2.6), including behind the active tab in `Tabs`
`variant="glass"` (section 9.4), so a themed app's glassmorphism surfaces and its
controls read as one system instead of a tinted button next to untinted glass.

For a CSS-only setup with no React context, set the same three custom properties
directly in `:root`:

```css
:root {
  --primary: #ec4899;
  --ring: #ec4899;
  --glass-tint: rgb(236, 72, 153);
}
```

For a scoped preview (a theme picker, a demo panel) rather than the whole app, call
`applyAruiTint(tint, target)` with an explicit target element instead of relying on
the default `document.documentElement`, so only that subtree retints.

---

## 4. Typography

arui's type scale is the Apple HIG scale, already registered in `theme.css` under
`@theme inline` and in `cn()`'s `tailwind-merge` font-size group. Use the named classes
directly, never `text-sm`/`text-base`/`text-lg` ad hoc.

| Class | Size / line-height | Weight | Letter-spacing |
|---|---|---|---|
| `text-large-title` | 34px / 41px | 700 | -0.02em |
| `text-title-1` | 28px / 34px | 700 | -0.02em |
| `text-title-2` | 22px / 28px | 700 | (none) |
| `text-title-3` | 20px / 25px | 600 | (none) |
| `text-headline` | 17px / 22px | 600 | (none) |
| `text-body` | 17px / 22px | 400 | (none) |
| `text-callout` | 16px / 21px | 400 | (none) |
| `text-subhead` | 15px / 20px | 400 | (none) |
| `text-footnote` | 13px / 18px | 400 | (none) |
| `text-caption-1` | 12px / 16px | 400 | (none) |
| `text-caption-2` | 11px / 13px | 400 | (none) |

Font is **Inter Variable** (`@fontsource-variable/inter`, `--font-sans`), the closest
open equivalent to SF Pro for a web stack.

### 4.1 Rules

- Prefer Regular / Medium / Semibold / Bold. Avoid very light weights below body size,
  they read as illegible at 17px and under.
- `text-*` classes above are already in `cn()`'s registry (`src/lib/utils.ts`), so
  `cn("text-headline", "text-label-secondary")` resolves conflicts correctly. If you
  ever add a new HIG size variant, register it there too or `cn()` will drop it on
  conflict.
- Numbers in tables/metrics: use `tabular-nums` (`font-variant-numeric: tabular-nums`).
- Multi-line truncation: use `line-clamp-*`, not bare `truncate`, for list rows.

### 4.2 Usage map

| Where | Class |
|---|---|
| Page title (rare, login/landing only) | `text-large-title` |
| Section / page heading (admin default) | `text-title-1` or `text-title-2` |
| Card title | `text-headline` |
| Body copy | `text-body` |
| Form labels | `text-subhead` or `text-callout` |
| Helper text / hints | `text-footnote` |
| Metadata, timestamps | `text-caption-1` |
| Disclaimers | `text-caption-2` |

Pair secondary text with `text-label-secondary` (or `text-muted-foreground` when
inside a shadcn-driven component) rather than a fixed gray.

---

## 5. Layout & spacing

### 5.1 Spacing scale

Tailwind's 4px scale, mentally aligned to an 8pt grid: `2` (8px), `3` (12px), `4`
(16px), `5` (20px), `6` (24px), `8` (32px), `10` (40px), `12` (48px), `16` (64px).

### 5.2 Radius scale (real tokens, derived from `--radius: 0.875rem`)

```
rounded-sm  0.6 x radius
rounded-md  0.8 x radius
rounded-lg  1.0 x radius (default)
rounded-xl  1.4 x radius
rounded-2xl 1.8 x radius
rounded-3xl 2.2 x radius
rounded-4xl 2.6 x radius
```

For HIG-style surfaces (cards, sheets, glass panels): `rounded-xl` or `rounded-2xl`.
Nest radii concentrically, a child sitting inside a `rounded-2xl` parent with visible
padding should use a smaller radius (`rounded-xl` or `rounded-lg`), not the same value.

### 5.3 Safe areas

arui ships ready-made safe-area utilities (from `theme.css`, no config needed):
`pt-safe`, `pb-safe`, `pl-safe`, `pr-safe` (each maps to
`env(safe-area-inset-*)`). Use these on fixed/sticky bars instead of hand-rolling
`padding-bottom: env(...)`.

### 5.4 Touch targets

arui's `Button` already enforces this: `min-h-11 min-w-11` on touch
(`sm:min-h-0 sm:min-w-0` once a pointer/desktop breakpoint kicks in). When building a
custom tappable element that isn't `Button`, match the same floor: minimum 44x44 CSS px
on mobile, ~28x28 acceptable once you know the input is pointer-based.

For a small icon that needs a bigger hit area, wrap it rather than inflating the icon:

```tsx
<Button size="icon" variant="ghost" aria-label="Close">
  <X className="size-4" />
</Button>
```

---

## 6. Motion

Apple motion is physical and restrained. arui exposes the easing curves as real
Tailwind `ease-*` utilities (registered in `cn()`'s `tailwind-merge` config), use them
instead of ad hoc `cubic-bezier(...)` in `className`.

| Utility | Curve | Use |
|---|---|---|
| `ease-apple-in` | `cubic-bezier(0.4, 0, 1, 1)` | element leaving/collapsing |
| `ease-apple-out` | `cubic-bezier(0, 0, 0.2, 1)` | element entering/expanding |
| `ease-apple` | `cubic-bezier(0.2, 0, 0, 1)` | general UI transitions, color/opacity |
| `ease-apple-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | morphs, playful overshoot |

### 6.1 Duration guidance

| Use | Duration |
|---|---|
| Hover/active state | 100 to 150ms |
| Small UI transitions (color, opacity) | 200 to 250ms, `ease-apple` |
| Sheet/modal/dialog enter | 350 to 450ms, spring-like (`ease-apple-spring` or Radix's built-in data-state animations) |
| Tab/page change | 250 to 300ms, cross-fade + subtle slide |

### 6.2 Interactive feedback

- Pressed state: `active:scale-[0.98]` or arui's own convention on `Button`
  (`active:not-aria-[haspopup]:translate-y-px`), a slight press-down rather than a
  color flip.
- Focus state: arui's default focus ring (`focus-visible:ring-3 focus-visible:ring-ring/50
  focus-visible:border-ring`), already wired into `Button`, `Input`, and friends. Don't
  override it with a custom ring color unless the surface truly needs `hig-accent`.
- Loading: prefer the `Spinner` export over a hand-rolled spinner; it already matches
  label color and stroke weight.

### 6.3 Reduced motion

Already handled globally in `theme.css`:

```css
@media (prefers-reduced-motion: reduce) {
  .animate-login-blob-1, .animate-login-blob-2, .animate-login-blob-3 {
    animation: none !important;
  }
}
```

Extend the same pattern for any new decorative keyframe animation you add: gate it
behind `@media (prefers-reduced-motion: reduce)` rather than assuming Tailwind's
`motion-safe`/`motion-reduce` variants cover every custom animation.

---

## 7. Accessibility (non-negotiable, mostly already baked in)

`theme.css` already ships:

```css
@media (prefers-contrast: more) {
  :root { --separator: 240 6% 60%; --label-secondary: 240 3% 25%; }
  .dark { --separator: 0 0% 100% / 0.3; --label-secondary: 240 3% 85%; }
}
@media (prefers-reduced-transparency: reduce) {
  .glass, .glass-clear {
    backdrop-filter: none !important;
    background-color: hsl(var(--background)) !important;
  }
}
@media (prefers-contrast: more) {
  .glass, .glass-clear {
    background-color: hsl(var(--background)) !important;
    border-color: hsl(var(--foreground) / 0.5) !important;
  }
}
```

Every component you compose on top must still:

- Keep a reachable, visible focus state (arui's default ring is already >=3:1 contrast
  against most surfaces, don't remove `focus-visible:ring-*`).
- Pass WCAG 2.1 AA: 4.5:1 for body text, 3:1 for large text and UI controls.
- Work without color: pair any color-coded state with an icon or label.
- Use real semantics: `<button>`, `<a>`, `<input>`, `<label>`, and let Radix (which
  every arui overlay is built on) own the ARIA wiring. Never build an interactive
  element from `<div onClick>`.
- Support full keyboard operation: Tab order, Escape to dismiss `Dialog`/`Sheet`/
  `Popover`, Arrow keys inside `Tabs`/`Menubar`/`DropdownMenu` (Radix already handles
  this for every arui overlay).
- Give icon-only `Button`s an `aria-label` (see the toolbar example in section 2.2).
- Use `aria-live="polite"` for non-critical status updates, `assertive` for errors
  (or reach for `Toaster`/`sonner`, which already handles live-region semantics).

---

## 8. Icons

arui's components use **lucide-react** internally (see `Checkbox`, `Calendar`,
`Accordion`, `Breadcrumb`, `Menubar`, etc.), so match that family for any icon you add,
don't mix in Heroicons/Phosphor/FontAwesome on the same screen.

### 8.1 Rules

- Icon size tracks text size. arui's `Button` auto-sizes unclassed SVG children to
  `size-4` (default), `size-3` (`xs`/`icon-xs`); pass an explicit `className="size-5"`
  etc. only when you need to override that.
- Default sizes when placing icons outside `Button`: inline with body text `size-4`,
  nav/tab bar `size-6`, large hero/empty-state media `size-8`+.
- Color icons with `currentColor` (inherit `text-label` or the surrounding text color
  by default, `hig-accent`/`primary` only for genuinely interactive icons).
- Prefer filled variants for selected states (active tab, checked toggle) and outline
  for unselected/default when the icon set supports both.
- `aria-hidden="true"` on decorative icons; pair any icon-only interactive element with
  `aria-label` (never rely on a tooltip alone for a11y).

---

## 9. Component patterns (real arui exports)

Always start from the arui primitive, they already wrap Radix for accessibility and
carry the HIG-tuned defaults from sections 3 to 6. Skinning is done through `className`
+ `cn()`, not through rewriting the primitive.

### 9.1 Buttons and actions

`Button` (`buttonVariants`): variants `default` (solid `primary`, the one filled CTA
per region), `secondary` (soft secondary action), `outline` (bordered, desktop/form
density), `ghost` (borderless, hover fill only, toolbar/icon actions), `destructive`
(delete/irreversible actions, pairs with a confirm), `link` (inline, text-styled).
Sizes: `xs`, `sm`, `default`, `lg`, plus icon-only `icon-xs`/`icon-sm`/`icon`/`icon-lg`.

- Never stack two `default` buttons side by side in the same region, downgrade one to
  `secondary` or `outline`.
- `ButtonGroup` / `buttonGroupVariants` for a connected row of buttons (segmented
  action clusters) instead of hand-spacing individual `Button`s.
- `Toggle` / `toggleVariants` and `ToggleGroup` / `ToggleGroupItem` for pressed/unpressed
  states (formatting toolbars, filter chips), not a re-skinned `Button`. A single-select
  `ToggleGroup` (`type="single"`) shows the pressed item with the glass highlight pill
  by default (section 2.6).

### 9.2 Forms and inputs

`Input`, `Textarea`, `Label`, `Field` family (`Field`, `FieldLabel`, `FieldDescription`,
`FieldError`, `FieldGroup`, `FieldLegend`, `FieldSeparator`, `FieldSet`, `FieldContent`,
`FieldTitle`) for the layout/error/help chrome around a control, and `Form` (react-hook-
form bindings: `Form`, `FormField`, `FormItem`, `FormLabel`, `FormControl`,
`FormDescription`, `FormMessage`, `useFormField`) when the form is RHF-driven. `Checkbox`,
`RadioGroup`/`RadioGroupItem`, `Switch`, `Select` family, `NativeSelect` family
(when you need a true native `<select>`), `Slider`, `Combobox` family (searchable/multi-
select with chips), `InputOTP` family (PIN/code entry), `InputGroup` family (input with
leading/trailing addons or inline buttons), `Calendar`/`CalendarDayButton` for date
picking.

- Use `Field`/`FieldError` for validation messaging rather than a bare `<p>`, it wires
  `aria-describedby`/`aria-invalid` automatically.
- react-hook-form is a peer dependency; reach for the `Form*` family only when a form
  actually uses RHF, otherwise plain `Field` + controlled state is enough.
- `Select` and `Combobox` both highlight the keyboard-focused/hovered option with the
  glass highlight pill by default (section 2.6), no prop needed.

### 9.3 Overlays

`Dialog` family for a centered modal that demands a decision before returning to the
page. `AlertDialog` family for a destructive/irreversible confirmation specifically
(two-button max, default/cancel left, primary/destructive right). `Sheet` family for a
mobile-first bottom sheet or side panel that slides in (prefer over `Dialog` for
form-heavy or mobile flows). `Drawer` family when you want a lower-chrome, native-feeling
slide-up on touch devices. `Popover` family for lightweight, non-modal floating content
anchored to a trigger. `HoverCard` for preview-on-hover (desktop-only, no modal
intent). `Tooltip` family for a one-line label on hover/focus, not for anything
interactive inside it. `DropdownMenu`, `ContextMenu`, and `Menubar` families for
action menus (trigger click, right-click, and a persistent menu bar, respectively).
`Command` family for a command palette / fuzzy-search launcher.

- Glass is appropriate here (`GlassSurface` or the `glass` recipe) for toolbar-like
  sheets/popovers; form-heavy `Sheet`/`Dialog` content should stay a solid
  `bg-background` or `bg-card` so form fields stay legible.
- Include a scrim/backdrop for anything modal (Radix + arui's `Dialog`/`Sheet`/
  `Drawer` already render one, don't strip it).
- `DropdownMenu`, `ContextMenu`, `Menubar`, and `Command` all highlight the
  keyboard-focused/hovered item with the glass highlight pill by default
  (section 2.6), no prop needed.

### 9.4 Navigation

`Tabs` family (`tabsListVariants` supports a segmented look, plus a `glass` variant with
an animated tinted pill behind the active tab, see sections 2.6 and 3.5) for switching
between sibling views in place. `NavigationMenu` family for a top-level marketing/app
nav with flyouts, its active link gets the glass highlight pill by default (section
2.6). `Breadcrumb` family for hierarchical location. `Pagination` family for paged
lists/tables, its active page gets the glass highlight pill by default. `Sidebar`
family (`Sidebar`, `SidebarProvider`, `SidebarMenu*`, `useSidebar`, etc.) for a full app
shell side nav, it already carries its own `bg-sidebar`/`text-sidebar-foreground` token
set distinct from the main content tokens, and its active item gets the glass
highlight pill by default.

### 9.5 Data and display

`Table` family for tabular data. `Card` family (`Card`, `CardHeader`, `CardTitle`,
`CardDescription`, `CardAction`, `CardContent`, `CardFooter`) for content-layer grouped
information, never glass (see section 2.4). `Badge`/`badgeVariants` for status/labels
(same variant vocabulary as `Button`: `default`, `secondary`, `outline`, `destructive`,
`ghost`, `link`). `Avatar` family (`Avatar`, `AvatarImage`, `AvatarFallback`,
`AvatarGroup`, `AvatarGroupCount`, `AvatarBadge`) for user/entity representation.
`Accordion` for collapsible grouped content, `Collapsible` for a single toggleable
region. `Carousel` family for swipeable/scrollable item sets. `Chart` family
(`ChartContainer`, `ChartTooltip*`, `ChartLegend*`) for recharts-backed data viz using
the `--chart-1`..`--chart-5` tokens. `Progress`, `Skeleton`, `Spinner` for loading/async
states (prefer `Skeleton` for content placeholders, `Spinner` for inline/blocking
waits). `Separator` for a plain dividing rule, `AspectRatio` for media containers,
`ScrollArea`/`ScrollBar` for custom-styled scroll regions, `Resizable*` for
split-pane layouts, `Kbd`/`KbdGroup` for keyboard shortcut hints, `Empty` family for
empty states (headline + one helper line + one primary action, no decorative "coming
soon" placeholders), `Item` family for list/row-style content (icon + title +
description + trailing action, the settings-list HIG pattern).

### 9.6 Feedback and utilities

`Toaster` (`sonner`-based) for transient success/error feedback, call it once near the
app root. `Alert` family (`Alert`, `AlertTitle`, `AlertDescription`, `AlertAction`) for
persistent inline feedback banners. `DirectionProvider`/`useDirection` for RTL support
when the app needs it.

---

## 10. Do / Don't checklist

Do:
- [ ] Use semantic tokens (label/fill/background/separator/system colors, or the
      shadcn layer), never raw hex.
- [ ] Use the named HIG type scale (`text-body` = 17px, etc.), not `text-sm`/`text-lg`.
- [ ] Keep tappable targets at least 44x44 on mobile (arui's `Button` already does
      this, match it in custom controls).
- [ ] Keep the default focus-visible ring, accent-colored, present on every
      interactive element.
- [ ] Verify Light and Dark mode.
- [ ] Respect `prefers-reduced-motion`, `-transparency`, and `-contrast` (mostly free
      via `theme.css`, extend the pattern for anything new).
- [ ] Use `ease-apple*` utilities for transitions, not ad hoc cubic-beziers.
- [ ] Use a single icon family (lucide-react) sized to the surrounding text.
- [ ] Keep one `default`-variant `Button` per region.
- [ ] Start from the arui primitive for a11y, don't hand-roll Radix behavior.
- [ ] Apply glassmorphism only to functional-layer surfaces.
- [ ] Nest radii concentrically (child radius smaller than parent's).

Don't:
- [ ] Apply `backdrop-blur`/glass to every card.
- [ ] Use heavy decorative drop shadows.
- [ ] Rely on color alone to communicate state.
- [ ] Build interactive elements from `<div onClick>`.
- [ ] Invent a parallel type/spacing/radius scale.
- [ ] Mix icon libraries on one screen.
- [ ] Apply an alpha modifier to `border-separator` (alpha is already baked in for
      dark mode, use `separator-opaque` instead).
- [ ] Reach for `bg-[hsl(var(--token))]` when a real utility class already exists.
- [ ] Stack glassmorphism on glassmorphism.

---

## 11. Working procedure for an agent building a component

1. **Classify the layer.** Content or functional? Pick material accordingly (flat
   `Card`/`bg-background-secondary` vs. `GlassSurface`/`glass`).
2. **Pick the real arui primitive** that already solves the behavior (`Dialog`,
   `Sheet`, `Tabs`, `Popover`, `Combobox`, ...). Check section 9 first.
3. **Skin with tokens** from sections 3, 4, 5. Don't introduce new colors, sizes, or
   radii ad hoc; if a token is missing, that's a signal to check `theme.css` again
   before inventing one.
4. **Add motion** from section 6 (`ease-apple*`, spring feel on press/morph).
5. **Pass the accessibility checklist** in section 7: focus ring, semantics,
   keyboard, reduced-motion/-transparency/-contrast.
6. **Verify Light and Dark** before handing off.
7. **Name variants with the vocabulary already in the library** (`default`,
   `secondary`, `outline`, `ghost`, `destructive`, `link` for buttons/badges;
   `regular`/`thick`/`clear` for glass) so intent stays legible to the next agent
   reading the code.

When writing code, produce a complete, runnable component with real imports from
`@aogusto/arui` (not a bare snippet), and prefer composition (wrapping/arranging
existing primitives) over prop explosion on a single component.

---

## 12. When in doubt

- Prefer removing ornament over adding it.
- Ask: would this look at home in a well-made Apple app? If the honest answer is "no,
  too noisy, too custom, too much chrome," simplify and lean on the primitive as-is.
- If a token or component you need doesn't seem to exist, re-check `theme.css`,
  `src/lib/utils.ts`, and the barrel (`src/index.ts`) before adding something new,
  arui's coverage is broad (57 components plus the glass material).
