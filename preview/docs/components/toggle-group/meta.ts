import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "toggle-group",
  name: "Toggle Group",
  category: "Forms & Inputs",
  description: "A row of toggle buttons grouped into a single control, supporting single or multiple selection. Items share the group's variant, size and spacing, and merge into one segmented control when spacing is zero.",
  imports: ["ToggleGroup", "ToggleGroupItem"],
}
