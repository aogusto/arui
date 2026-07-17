import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "badge",
  name: "Badge",
  category: "Data & Display",
  description: "A compact label for status, count, or metadata, with intent variants (default, secondary, destructive, outline, ghost, link). Supports leading and trailing icons and an asChild prop to render as another element, such as a link.",
  imports: ["Badge"],
}

export const props: PropRow[] = [
  {
    prop: "variant",
    type: '"default" | "secondary" | "destructive" | "outline" | "ghost" | "link"',
    default: '"default"',
    description: "Visual style and intent of the badge.",
  },
  {
    prop: "asChild",
    type: "boolean",
    default: "false",
    description: "Renders the child as the root element (via Slot), inheriting the badge styles.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'span'>",
    description: "The remaining native <span> attributes (aria-invalid, data-icon on children for leading/trailing icon spacing, etc.).",
  },
]
