import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "select",
  name: "Select",
  category: "Forms & Inputs",
  description: "A composable dropdown for choosing a single option from a list, built on Radix UI's Select primitive. Supports placeholders, grouped and labeled options with separators, and a compact trigger size. The highlighted option uses an animated glass pill by default.",
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

export const selectProps: PropRow[] = [
  {
    prop: "value",
    type: "string",
    description: "Controlled selected value. Use with onValueChange.",
  },
  {
    prop: "defaultValue",
    type: "string",
    description: "Initial selected value for uncontrolled usage.",
  },
  {
    prop: "onValueChange",
    type: "(value: string) => void",
    description: "Called when the selected value changes.",
  },
  {
    prop: "open",
    type: "boolean",
    description: "Controlled open state of the dropdown. Use with onOpenChange.",
  },
  {
    prop: "onOpenChange",
    type: "(open: boolean) => void",
    description: "Called when the dropdown opens or closes.",
  },
  {
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables the whole select, including its trigger.",
  },
  {
    prop: "required",
    type: "boolean",
    default: "false",
    description: "Marks the select as required in a form.",
  },
  {
    prop: "name",
    type: "string",
    description: "Name submitted with the form data.",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof SelectPrimitive.Root>",
    description: "Extends Select.Root from radix-ui. Renders no DOM element of its own.",
  },
]

export const selectTriggerProps: PropRow[] = [
  {
    prop: "size",
    type: '"sm" | "default"',
    default: '"default"',
    description: "Height and padding of the trigger button.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof SelectPrimitive.Trigger>",
    description: "Extends Select.Trigger from radix-ui.",
  },
]

export const selectValueProps: PropRow[] = [
  {
    prop: "placeholder",
    type: "React.ReactNode",
    description: "Content shown when no value is selected.",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof SelectPrimitive.Value>",
    description: "Extends Select.Value from radix-ui.",
  },
]

export const selectContentProps: PropRow[] = [
  {
    prop: "position",
    type: '"item-aligned" | "popper"',
    default: '"item-aligned"',
    description: "Positioning strategy: aligned to the selected item, or floated below/above the trigger like a popover.",
  },
  {
    prop: "align",
    type: '"start" | "center" | "end"',
    default: '"center"',
    description: 'Alignment against the trigger. Only relevant when position is "popper".',
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof SelectPrimitive.Content>",
    description: "Extends Select.Content from radix-ui. Renders in a Portal with a glassmorphism background and built-in scroll buttons.",
  },
]

export const selectItemProps: PropRow[] = [
  {
    prop: "value",
    type: "string",
    description: "The value submitted and passed to onValueChange when this item is selected.",
  },
  {
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables this item and prevents it from being selected.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof SelectPrimitive.Item>",
    description: "Extends Select.Item from radix-ui.",
  },
]

export const props: PropRow[] = [
  ...selectProps,
  ...selectTriggerProps,
  ...selectValueProps,
  ...selectContentProps,
  ...selectItemProps,
]
