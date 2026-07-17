import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "aspect-ratio",
  name: "Aspect Ratio",
  category: "Data & Display",
  description: "Constrains content, typically an image, video, or embed, to a fixed width to height ratio (like 16 / 9) that holds steady across breakpoints. Built on Radix UI's AspectRatio primitive.",
  imports: ["AspectRatio"],
}
