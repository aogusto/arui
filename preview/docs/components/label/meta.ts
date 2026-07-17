import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "label",
  name: "Label",
  category: "Forms & Inputs",
  description: "An accessible label for a form control, built on Radix UI's Label primitive. Pair it with an Input, Checkbox, or Switch via htmlFor, and it automatically dims when the control it's attached to is disabled.",
  imports: ["Label"],
}
