import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "accordion",
  name: "Accordion",
  category: "Data & Display",
  description: "A vertically stacked set of collapsible sections for showing and hiding related content, such as an FAQ or a settings panel. Supports a single open item or several open at once.",
  imports: ["Accordion", "AccordionItem", "AccordionTrigger", "AccordionContent"],
}

export const accordionProps: PropRow[] = [
  {
    prop: "type",
    type: '"single" | "multiple"',
    description: "Whether a single item can be open at a time, or several at once.",
  },
  {
    prop: "collapsible",
    type: "boolean",
    default: "false",
    description: "When type is single, allows the open item to be closed again by clicking it. Has no effect when type is multiple.",
  },
  {
    prop: "value",
    type: "string | string[]",
    description: "The controlled open item(s): a string for type single, an array of strings for type multiple.",
  },
  {
    prop: "defaultValue",
    type: "string | string[]",
    description: "The open item(s) when the accordion is uncontrolled.",
  },
  {
    prop: "onValueChange",
    type: "(value: string | string[]) => void",
    description: "Called when the open item(s) change.",
  },
  {
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables the whole accordion, including every item.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof AccordionPrimitive.Root>",
    description: "Extends Radix's Accordion.Root. Also accepts orientation and dir.",
  },
]

export const accordionItemProps: PropRow[] = [
  {
    prop: "value",
    type: "string",
    description: "Unique identifier for the item. Required, and used to control which item is open.",
  },
  {
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables this item only.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof AccordionPrimitive.Item>",
    description: "Extends Radix's Accordion.Item. Every item but the last gets a bottom border.",
  },
]

export const accordionTriggerProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof AccordionPrimitive.Trigger>",
    description: "Extends Radix's Accordion.Trigger, wrapped in the required Accordion.Header. Renders a chevron icon that flips based on the open state.",
  },
]

export const accordionContentProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, applied to the inner content wrapper (not the animated root) and merged via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof AccordionPrimitive.Content>",
    description: "Extends Radix's Accordion.Content. Animates open and closed based on its measured height.",
  },
]

export const props: PropRow[] = [
  ...accordionProps,
  ...accordionItemProps,
  ...accordionTriggerProps,
  ...accordionContentProps,
]
