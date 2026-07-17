import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "input",
  name: "Input",
  category: "Forms & Inputs",
  description: "A styled native input field for single line text, supporting every native HTML input type, placeholders, disabled and invalid states.",
  imports: ["Input", "Label"],
}

export const props: PropRow[] = [
  {
    prop: "type",
    type: "React.HTMLInputTypeAttribute",
    default: '"text"',
    description: "Native input type (text, email, password, number, search, tel, url, date, file, etc.).",
  },
  {
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables the input and applies the disabled styles.",
  },
  {
    prop: "aria-invalid",
    type: "boolean | 'true' | 'false'",
    description: "Marks the input as invalid, switching the border and focus ring to the destructive color.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'input'>",
    description: "The remaining native <input> attributes (value, placeholder, onChange, etc.).",
  },
]
