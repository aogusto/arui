import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "switch",
  name: "Switch",
  category: "Forms & Inputs",
  description: "A control for toggling a single setting on or off, built on Radix UI. Pairs with Label for an accessible, clickable hit area.",
  imports: ["Switch"],
}

export const props: PropRow[] = [
  {
    prop: "checked",
    type: "boolean",
    description: "Controlled checked state. Use with onCheckedChange.",
  },
  {
    prop: "defaultChecked",
    type: "boolean",
    description: "Initial checked state for uncontrolled usage.",
  },
  {
    prop: "onCheckedChange",
    type: "(checked: boolean) => void",
    description: "Called when the checked state changes.",
  },
  {
    prop: "size",
    type: '"sm" | "default"',
    default: '"default"',
    description: "Size of the switch track and thumb.",
  },
  {
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables the switch and prevents interaction.",
  },
  {
    prop: "required",
    type: "boolean",
    default: "false",
    description: "Marks the switch as required in a form.",
  },
  {
    prop: "name",
    type: "string",
    description: "Name submitted with the form data.",
  },
  {
    prop: "value",
    type: "string",
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
    type: "React.ComponentProps<typeof SwitchPrimitive.Root>",
    description: "Extends Switch.Root from radix-ui.",
  },
]
