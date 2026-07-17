import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "accordion",
  name: "Accordion",
  category: "Data & Display",
  description: "A vertically stacked set of collapsible sections for showing and hiding related content, such as an FAQ or a settings panel. Supports a single open item or several open at once.",
  imports: ["Accordion", "AccordionItem", "AccordionTrigger", "AccordionContent"],
}
