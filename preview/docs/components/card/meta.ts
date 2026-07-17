import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "card",
  name: "Card",
  category: "Data & Display",
  description: "A container for grouping related content and actions, composed from a header (title, description, and an optional action slot), a content area, and a footer. Supports a compact sm size and renders a leading or trailing image edge to edge.",
  imports: ["Card", "CardHeader", "CardTitle", "CardDescription", "CardAction", "CardContent", "CardFooter"],
}
