import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "glass-surface",
  name: "Glass Surface",
  category: "Signature",
  description: "A translucent panel with three frosted materials (regular, thick, clear), the glassmorphism surface behind Arui's cards, toolbars, and overlays. A dim option keeps content legible on the clear material over busy backgrounds.",
  imports: ["GlassSurface"],
}

export const props: PropRow[] = [
  {
    prop: "variant",
    type: '"regular" | "thick" | "clear"',
    default: '"regular"',
    description: "Frosted material for the surface. Thick is more opaque and higher contrast; clear is the most transparent and pairs with dim.",
  },
  {
    prop: "dim",
    type: "boolean",
    default: "false",
    description: "Adds a dark scrim behind the surface so content stays legible on busy or bright backgrounds. Only applies when variant is clear.",
  },
  {
    prop: "tint",
    type: '"accent" | (string & {})',
    description: "Tints the material with the theme accent or any CSS color.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn(). Applies to the outer wrapper, add your own padding to the children.",
  },
  {
    prop: "...props",
    type: "React.HTMLAttributes<HTMLDivElement>",
    description: "The remaining native <div> attributes (id, onClick, style, etc.).",
  },
]
