import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "button",
  name: "Button",
  category: "Forms & Inputs",
  description: "A button with intent variants (default, outline, secondary, ghost, destructive, link) and a range of sizes. It supports icon-only sizes and an asChild prop to render as another element.",
  imports: ["Button"],
}

export const props: PropRow[] = [
  {
    prop: "variant",
    type: '"default" | "outline" | "secondary" | "ghost" | "destructive" | "link"',
    default: '"default"',
    description: "Visual style and intent of the button.",
  },
  {
    prop: "size",
    type: '"default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"',
    default: '"default"',
    description: "Size of the button, including icon only sizes for icon buttons.",
  },
  {
    prop: "asChild",
    type: "boolean",
    default: "false",
    description: "Renders the child as the root element (via Slot), inheriting the button styles.",
  },
  {
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables the button.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'button'>",
    description: "The remaining native <button> attributes (onClick, type, etc.).",
  },
]
