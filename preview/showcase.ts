// Shared data for the Arui showcase site.
// Kept framework-agnostic so sections and the drifting background read from one source.

export const SITE = {
  name: "Arui",
  domain: "arui.vercel.app",
  github: "https://github.com/aogusto/arui",
  componentCount: 57, // glass-surface + 56 primitives
  primitiveCount: 56,
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

export const HERO_INSTALL = `npm install @aogusto/arui`

// Install flow: o pacote, depois duas linhas de CSS na ordem. A ordem importa
// (o @source precisa do theme já importado), então numerar é honesto.
// `kind` distingue linha de shell ("$ …") de linha de CSS (sem prompt) — ver CommandRow.
export const INSTALL_STEPS = [
  {
    n: 1,
    title: "Install the package",
    body: "One dependency. React 19 and Tailwind CSS v4 are peers you already have.",
    command: `npm install @aogusto/arui`,
    kind: "shell",
  },
  {
    n: 2,
    title: "Import the theme",
    body: "The HIG tokens, easings, dark variant and Inter — self-contained in one stylesheet. Add it to your app CSS.",
    command: `@import "@aogusto/arui/theme.css";`,
    kind: "css",
  },
  {
    n: 3,
    title: "Let Tailwind see the components",
    body: "Point Tailwind at the package so it generates the utilities the components use. Without this line the components render unstyled.",
    command: `@source "../node_modules/@aogusto/arui/dist";`,
    kind: "css",
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
