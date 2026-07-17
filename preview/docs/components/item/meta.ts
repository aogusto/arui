import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "item",
  name: "Item",
  category: "Data & Display",
  description: "A flexible row for lists of content, composed from an optional media slot (icon or image), a title and description, and trailing actions. Combine with ItemGroup and ItemSeparator to build settings lists, notification feeds, or order summaries.",
  imports: ["Item", "ItemMedia", "ItemContent", "ItemActions", "ItemGroup", "ItemSeparator", "ItemTitle", "ItemDescription", "ItemHeader", "ItemFooter"],
}
