import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "kbd",
  name: "Kbd",
  category: "Data & Display",
  description: "A small label for displaying keyboard keys and shortcuts, like ⌘K or Ctrl+Shift+P. Combine multiple keys with KbdGroup, and it adapts its color automatically when nested inside a Tooltip.",
  imports: ["Kbd", "KbdGroup"],
}

export const kbdProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"kbd">',
    description: "The remaining native <kbd> attributes.",
  },
]

export const kbdGroupProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"div">',
    description: "The remaining native <div> attributes, spread onto the rendered <kbd> element that wraps the group.",
  },
]

export const props: PropRow[] = [...kbdProps, ...kbdGroupProps]
