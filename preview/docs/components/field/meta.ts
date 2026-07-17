import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "field",
  name: "Field",
  category: "Forms & Inputs",
  description: "A layout primitive for building form fields, pairing a label, control, and description or error message. Supports vertical, horizontal, and responsive orientations, plus FieldSet, FieldGroup, and FieldSeparator for composing full sections.",
  imports: ["Field", "FieldLabel", "FieldDescription", "FieldError", "FieldGroup", "FieldLegend", "FieldSeparator", "FieldSet", "FieldContent", "FieldTitle"],
}
