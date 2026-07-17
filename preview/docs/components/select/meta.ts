import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "select",
  name: "Select",
  category: "Forms & Inputs",
  description: "A composable dropdown for choosing a single option from a list, built on Radix UI's Select primitive. Supports placeholders, grouped and labeled options with separators, and a compact trigger size.",
  imports: [
    "Select",
    "SelectContent",
    "SelectGroup",
    "SelectItem",
    "SelectLabel",
    "SelectScrollDownButton",
    "SelectScrollUpButton",
    "SelectSeparator",
    "SelectTrigger",
    "SelectValue",
  ],
}
