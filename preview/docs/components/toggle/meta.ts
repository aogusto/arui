import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "toggle",
  name: "Toggle",
  category: "Forms & Inputs",
  description: "A two-state button for a single independent option, like a formatting control in a toolbar. Built on Radix UI with default and outline variants.",
  imports: ["Toggle"],
}

export const props: PropRow[] = [
  {
    prop: "variant",
    type: '"default" | "outline"',
    default: '"default"',
    description: "Visual style of the toggle.",
  },
  {
    prop: "size",
    type: '"default" | "sm" | "lg"',
    default: '"default"',
    description: "Size of the toggle.",
  },
  {
    prop: "pressed",
    type: "boolean",
    description: "Controlled pressed state. Use with onPressedChange.",
  },
  {
    prop: "defaultPressed",
    type: "boolean",
    default: "false",
    description: "Initial pressed state for uncontrolled usage.",
  },
  {
    prop: "onPressedChange",
    type: "(pressed: boolean) => void",
    description: "Called when the pressed state changes.",
  },
  {
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables the toggle and prevents interaction.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof TogglePrimitive.Root>",
    description: "Extends Toggle.Root from radix-ui.",
  },
]
