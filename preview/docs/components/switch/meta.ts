import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "switch",
  name: "Switch",
  category: "Forms & Inputs",
  description: "A control for toggling a single setting on or off, built on Radix UI. Pairs with Label for an accessible, clickable hit area.",
  imports: ["Switch"],
}
