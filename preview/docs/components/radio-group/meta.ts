import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "radio-group",
  name: "Radio Group",
  category: "Forms & Inputs",
  description: "A set of mutually exclusive options, built on Radix UI's Radio Group primitive. Only one item can be selected at a time, and a default value can be preselected.",
  imports: ["RadioGroup", "RadioGroupItem"],
}

export const radioGroupProps: PropRow[] = [
  {
    prop: "value",
    type: "string | null",
    description: "The controlled selected value. Pair with onValueChange.",
  },
  {
    prop: "defaultValue",
    type: "string",
    description: "The value initially selected, for an uncontrolled group.",
  },
  {
    prop: "onValueChange",
    type: "(value: string) => void",
    description: "Called when the selected item changes.",
  },
  {
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables every item in the group.",
  },
  {
    prop: "name",
    type: "string",
    description: "Name submitted with the enclosing form.",
  },
  {
    prop: "required",
    type: "boolean",
    default: "false",
    description: "Marks the group as required in an HTML form.",
  },
  {
    prop: "orientation",
    type: '"horizontal" | "vertical"',
    description: "Orientation used for arrow key navigation between items.",
  },
  {
    prop: "loop",
    type: "boolean",
    default: "false",
    description: "Whether arrow key navigation loops from the last item back to the first.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof RadioGroupPrimitive.Root>",
    description: "Extends RadioGroup.Root from radix-ui, so the remaining native <div> attributes are all supported.",
  },
]

export const radioGroupItemProps: PropRow[] = [
  {
    prop: "value",
    type: "string",
    description: "The value submitted when this item is selected. Required.",
  },
  {
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables this single item, independently of the group.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof RadioGroupPrimitive.Item>",
    description: "Extends RadioGroup.Item from radix-ui, so the remaining native <button> attributes (id, aria-invalid, required, etc.) are all supported.",
  },
]

export const props: PropRow[] = [
  ...radioGroupProps,
  ...radioGroupItemProps,
]
