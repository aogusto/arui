import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "input-group",
  name: "Input Group",
  category: "Forms & Inputs",
  description: "Wraps an input or textarea with addons such as icons, text, and buttons, aligned inline on either side of the field or as a block above/below it.",
  imports: [
    "InputGroup",
    "InputGroupAddon",
    "InputGroupButton",
    "InputGroupText",
    "InputGroupInput",
    "InputGroupTextarea",
  ],
}

export const inputGroupProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "The remaining native <div> attributes. Rendered with role=\"group\"; wraps the field (InputGroupInput / InputGroupTextarea) and its addons.",
  },
]

export const addonProps: PropRow[] = [
  {
    prop: "align",
    type: '"inline-start" | "inline-end" | "block-start" | "block-end"',
    default: '"inline-start"',
    description: "Position of the addon: inline on either side of the field, or as a full width bar above/below it.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "The remaining native <div> attributes. Rendered with role=\"group\"; clicking it focuses the adjacent field.",
  },
]

export const buttonProps: PropRow[] = [
  {
    prop: "variant",
    type: '"default" | "outline" | "secondary" | "ghost" | "destructive" | "link"',
    default: '"ghost"',
    description: "Visual style, inherited from Button.",
  },
  {
    prop: "size",
    type: '"xs" | "sm" | "icon-xs" | "icon-sm"',
    default: '"xs"',
    description: "Size tuned to sit inside an addon, including icon only sizes.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "Omit<React.ComponentProps<typeof Button>, 'size'>",
    description: "Extends Button (asChild, disabled, onClick, type, etc.), minus its own size prop.",
  },
]

export const textProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'span'>",
    description: "The remaining native <span> attributes. Use for plain text affixes such as $, .dev, or a character count.",
  },
]

export const inputProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'input'>",
    description: "The remaining native <input> attributes. Renders as Input, borderless and transparent so it blends into the group.",
  },
]

export const textareaProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'textarea'>",
    description: "The remaining native <textarea> attributes. Renders as Textarea, borderless, transparent, and non resizable.",
  },
]

export const props: PropRow[] = [
  ...inputGroupProps,
  ...addonProps,
  ...buttonProps,
  ...textProps,
  ...inputProps,
  ...textareaProps,
]
