import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "toggle",
  name: "Toggle",
  category: "Forms & Inputs",
  description: "A two-state button for a single independent option, like a formatting control in a toolbar. Built on Radix UI with default and outline variants.",
  imports: ["Toggle"],
}
