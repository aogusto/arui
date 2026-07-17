import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "hover-card",
  name: "Hover Card",
  category: "Overlays",
  description: "A card that appears when hovering over a trigger, used to preview content like a user profile without navigating away.",
  imports: ["HoverCard", "HoverCardTrigger", "HoverCardContent"],
}
