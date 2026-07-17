import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "glass-surface",
  name: "Glass Surface",
  category: "Signature",
  description: "A translucent panel with three frosted materials (regular, thick, clear), the glassmorphism surface behind Arui's cards, toolbars, and overlays. A dim option keeps content legible on the clear material over busy backgrounds.",
  imports: ["GlassSurface"],
}
