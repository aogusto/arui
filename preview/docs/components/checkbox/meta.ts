import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "checkbox",
  name: "Checkbox",
  category: "Forms & Inputs",
  description: "A control for toggling a single boolean value on or off, built on Radix UI. Pairs with Label for an accessible, clickable hit area.",
  imports: ["Checkbox"],
}
