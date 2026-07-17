import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "tabs",
  name: "Tabs",
  category: "Navigation",
  description: "Organizes content into panels that share the same space, letting users switch between them with a click. Composed of a TabsList (with default, line, and segmented variants) holding TabsTrigger buttons, and a TabsContent panel per tab.",
  imports: ["Tabs", "TabsList", "TabsTrigger", "TabsContent"],
}
