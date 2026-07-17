import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "slider",
  name: "Slider",
  category: "Forms & Inputs",
  description: "A control for selecting a single value, or a range between two values, by dragging a thumb along a track. Built on Radix UI.",
  imports: ["Slider"],
}
