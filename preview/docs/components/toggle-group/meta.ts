import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "toggle-group",
  name: "Toggle Group",
  category: "Forms & Inputs",
  description: "A row of toggle buttons grouped into a single control, supporting single or multiple selection. Items share the group's variant, size and spacing, and merge into one segmented control when spacing is zero.",
  imports: ["ToggleGroup", "ToggleGroupItem"],
}

export const toggleGroupProps: PropRow[] = [
  {
    prop: "type",
    type: '"single" | "multiple"',
    description: "Selection behavior. \"single\" allows only one pressed item at a time, \"multiple\" allows any number.",
  },
  {
    prop: "value",
    type: "string | string[]",
    description: "Controlled pressed value(s): a string for type=\"single\", a string array for type=\"multiple\".",
  },
  {
    prop: "defaultValue",
    type: "string | string[]",
    description: "Initial pressed value(s) when uncontrolled.",
  },
  {
    prop: "onValueChange",
    type: "(value: string | string[]) => void",
    description: "Fires when the pressed value(s) change.",
  },
  {
    prop: "variant",
    type: '"default" | "outline"',
    default: '"default"',
    description: "Visual style applied to every item in the group. Can be overridden per item.",
  },
  {
    prop: "size",
    type: '"default" | "sm" | "lg"',
    default: '"default"',
    description: "Size applied to every item in the group. Can be overridden per item.",
  },
  {
    prop: "spacing",
    type: "number",
    default: "0",
    description: "Gap in pixels between items. At 0, items are visually merged with shared borders and only the outer corners rounded.",
  },
  {
    prop: "orientation",
    type: '"horizontal" | "vertical"',
    default: '"horizontal"',
    description: "Layout direction of the items.",
  },
  {
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables every item in the group.",
  },
  {
    prop: "rovingFocus",
    type: "boolean",
    default: "true",
    description: "Whether arrow keys move focus between items (roving tabindex).",
  },
  {
    prop: "loop",
    type: "boolean",
    default: "true",
    description: "Whether arrow key navigation loops from the last item back to the first.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ToggleGroupPrimitive.Root>",
    description: "Extends ToggleGroup.Root from radix-ui.",
  },
]

export const toggleGroupItemProps: PropRow[] = [
  {
    prop: "value",
    type: "string",
    description: "Unique value identifying this item within the group.",
  },
  {
    prop: "variant",
    type: '"default" | "outline"',
    default: "inherited from ToggleGroup",
    description: "Overrides the group's variant for this item only.",
  },
  {
    prop: "size",
    type: '"default" | "sm" | "lg"',
    default: "inherited from ToggleGroup",
    description: "Overrides the group's size for this item only.",
  },
  {
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables this item.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ToggleGroupPrimitive.Item>",
    description: "Extends ToggleGroup.Item from radix-ui.",
  },
]

export const props: PropRow[] = [...toggleGroupProps, ...toggleGroupItemProps]
