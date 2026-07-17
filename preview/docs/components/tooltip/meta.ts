import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "tooltip",
  name: "Tooltip",
  category: "Overlays",
  description: "A floating label that appears on hover or keyboard focus to describe a trigger element, rendered on a glass surface.",
  imports: ["Tooltip", "TooltipContent", "TooltipProvider", "TooltipTrigger"],
}
