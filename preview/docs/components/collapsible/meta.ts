import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "collapsible",
  name: "Collapsible",
  category: "Data & Display",
  description: "An interactive section that expands and collapses to show or hide its content, driven by a trigger you place next to it. Unlike Accordion, each Collapsible is independent, so a list of them can have any number open at once.",
  imports: ["Collapsible", "CollapsibleTrigger", "CollapsibleContent"],
}
