import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "checkbox",
  name: "Checkbox",
  category: "Forms & Inputs",
  description: "A control for toggling a single boolean value on or off, built on Radix UI. Pairs with Label for an accessible, clickable hit area.",
  imports: ["Checkbox"],
}

export const props: PropRow[] = [
  {
    prop: "checked",
    type: 'boolean | "indeterminate"',
    description: "Controlled checked state. Use with onCheckedChange.",
  },
  {
    prop: "defaultChecked",
    type: 'boolean | "indeterminate"',
    description: "Initial checked state for uncontrolled usage.",
  },
  {
    prop: "onCheckedChange",
    type: '(checked: boolean | "indeterminate") => void',
    description: "Called when the checked state changes.",
  },
  {
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables the checkbox and prevents interaction.",
  },
  {
    prop: "required",
    type: "boolean",
    default: "false",
    description: "Marks the checkbox as required in a form.",
  },
  {
    prop: "name",
    type: "string",
    description: "Name submitted with the form data.",
  },
  {
    prop: "value",
    type: "string | number | readonly string[]",
    default: '"on"',
    description: "Value submitted with the form data when checked.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof CheckboxPrimitive.Root>",
    description: "Extends Checkbox.Root from radix-ui.",
  },
]
