import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "separator",
  name: "Separator",
  category: "Data & Display",
  description: "A thin visual divider that separates content, either horizontally or vertically. Built on Radix UI's Separator primitive, with sensible defaults for accessibility.",
  imports: ["Separator"],
}

export const props: PropRow[] = [
  {
    prop: "orientation",
    type: '"horizontal" | "vertical"',
    default: '"horizontal"',
    description: "Direction of the separator line.",
  },
  {
    prop: "decorative",
    type: "boolean",
    default: "true",
    description: "When true, the separator is purely visual and hidden from the accessibility tree. Set to false to expose it as a semantic boundary between content.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof SeparatorPrimitive.Root>",
    description: "Extends Separator.Root from radix-ui.",
  },
]
