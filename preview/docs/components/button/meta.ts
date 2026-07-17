import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "button",
  name: "Button",
  category: "Forms & Inputs",
  description: "A button with intent variants (default, outline, secondary, ghost, destructive, link) and a range of sizes. It supports icon-only sizes and an asChild prop to render as another element.",
  imports: ["Button"],
}
