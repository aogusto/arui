import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "button-group",
  name: "Button Group",
  category: "Forms & Inputs",
  description: "Groups related Buttons into a single visually merged control, fusing shared borders and rounding only the outer corners. Supports horizontal or vertical orientation, plus optional separators and text labels between segments.",
  imports: ["ButtonGroup", "ButtonGroupText", "ButtonGroupSeparator"],
}

export const buttonGroupProps: PropRow[] = [
  {
    prop: "orientation",
    type: '"horizontal" | "vertical"',
    default: '"horizontal"',
    description: "Direction the buttons are laid out and merged in.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"div">',
    description: "The remaining native <div> attributes. Rendered with role=\"group\".",
  },
]

export const buttonGroupTextProps: PropRow[] = [
  {
    prop: "asChild",
    type: "boolean",
    default: "false",
    description: "Renders the child as the root element (via Slot), inheriting the button group text styles.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"div">',
    description: "The remaining native <div> attributes.",
  },
]

export const buttonGroupSeparatorProps: PropRow[] = [
  {
    prop: "orientation",
    type: '"horizontal" | "vertical"',
    default: '"vertical"',
    description: "Direction of the separator line between segments.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof Separator>",
    description: "Extends Separator (radix-ui Separator.Root) from @aogusto/arui.",
  },
]

export const props: PropRow[] = [...buttonGroupProps, ...buttonGroupTextProps, ...buttonGroupSeparatorProps]
