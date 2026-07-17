import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "button",
  name: "Button",
  category: "Forms & Inputs",
  description: "A clickable button with intent variants and a range of sizes, including icon only sizes, with asChild support to render as another element.",
  imports: ["Button"],
}
