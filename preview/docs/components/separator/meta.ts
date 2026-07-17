import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "separator",
  name: "Separator",
  category: "Data & Display",
  description: "A thin visual divider that separates content, either horizontally or vertically. Built on Radix UI's Separator primitive, with sensible defaults for accessibility.",
  imports: ["Separator"],
}
