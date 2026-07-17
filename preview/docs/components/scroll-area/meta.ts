import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "scroll-area",
  name: "Scroll Area",
  category: "Data & Display",
  description: "A scrollable region with custom, cross-browser styled scrollbars, for a fixed-height panel of content such as a list, a card's body, or a horizontally scrolling gallery.",
  imports: ["ScrollArea", "ScrollBar"],
}
