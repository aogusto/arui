import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "radio-group",
  name: "Radio Group",
  category: "Forms & Inputs",
  description: "A set of mutually exclusive options, built on Radix UI's Radio Group primitive. Only one item can be selected at a time, and a default value can be preselected.",
  imports: ["RadioGroup", "RadioGroupItem"],
}
