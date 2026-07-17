import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "input",
  name: "Input",
  category: "Forms & Inputs",
  description: "A styled native input field for single line text, supporting every native HTML input type, placeholders, disabled and invalid states.",
  imports: ["Input", "Label"],
}
