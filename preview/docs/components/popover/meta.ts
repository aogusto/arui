import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "popover",
  name: "Popover",
  category: "Overlays",
  description: "A floating panel anchored to a trigger, used for small pieces of contextual content like menus, previews, or short forms.",
  imports: ["Popover", "PopoverTrigger", "PopoverContent", "PopoverAnchor", "PopoverHeader", "PopoverTitle", "PopoverDescription"],
}
