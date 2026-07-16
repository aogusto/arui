// Shared data for the Arui showcase site.
// Kept framework-agnostic so sections and the drifting background read from one source.

export const SITE = {
  name: "Arui",
  domain: "arui.vercel.app",
  github: "https://github.com/aogusto/arui",
  themeUrl: "https://arui.vercel.app/r/theme.json",
  componentCount: 57, // glass-surface + 56 primitives
  primitiveCount: 13,
} as const

export type ShowcasePhoto = {
  src: string
  /** short human label, used only for alt text on decorative imagery */
  label: string
}

// The six bundled photos that drift BEHIND the glass. Order is tuned so
// adjacent frames contrast in hue as the strip scrolls.
export const PHOTOS: ShowcasePhoto[] = [
  { src: "/showcase/gradient-magenta.jpg", label: "magenta gradient" },
  { src: "/showcase/aurora.jpg", label: "aurora" },
  { src: "/showcase/bokeh-city.jpg", label: "city bokeh" },
  { src: "/showcase/gradient-violet.jpg", label: "violet gradient" },
  { src: "/showcase/bokeh-lights.jpg", label: "warm bokeh" },
  { src: "/showcase/gradient-flow.jpg", label: "flowing gradient" },
]

export const NAV_LINKS = [
  { href: "#material", label: "Material" },
  { href: "#components", label: "Components" },
  { href: "#install", label: "Install" },
] as const

export const HERO_INSTALL = `npx shadcn@latest add ${SITE.themeUrl}`

// Install flow — theme first, then any component. Order carries meaning here,
// so numbering these steps is honest (unlike decorative counters elsewhere).
export const INSTALL_STEPS = [
  {
    n: 1,
    title: "Add the theme",
    body: "Installs the HIG tokens, easings, and the glass material. Everything else builds on it, so it goes first.",
    command: `npx shadcn@latest add ${SITE.themeUrl}`,
  },
  {
    n: 2,
    title: "Add the components you need",
    body: "Each component is copied into your project as source you own. Dependencies come along automatically.",
    command: `npx shadcn@latest add https://${SITE.domain}/r/dialog.json`,
  },
] as const

// The three glass materials, described by what they're for — not how they're coded.
export const MATERIALS = [
  {
    variant: "regular" as const,
    name: "Regular",
    blur: "24px blur · 180% saturate",
    body: "The default. Enough frost to sit over busy content while the color underneath still breathes through.",
  },
  {
    variant: "thick" as const,
    name: "Thick",
    blur: "12px blur · 90% tint",
    body: "Near-opaque. For sheets and menus that need to fully separate from whatever is scrolling behind them.",
  },
  {
    variant: "clear" as const,
    name: "Clear",
    blur: "12px blur · 5% tint",
    body: "Barely there. A thin refractive pane that lets the imagery read almost fully — the hero uses this.",
  },
] as const
