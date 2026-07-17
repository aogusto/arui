import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "spinner",
  name: "Spinner",
  category: "Data & Display",
  description: "A spinning loader for indicating that content or an action is in progress, built on Lucide's Loader2 icon. It has no size or color props of its own, everything is a plain className you override with utilities like size-* and text-*.",
  imports: ["Spinner"],
}

export const props: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own default (size-4 animate-spin) via cn(). Use size-* to resize the spinner and text-* to recolor it, since the icon reads currentColor.",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"svg">',
    description: 'The remaining native <svg> attributes. Rendered with role="status" and aria-label="Loading" by default; pass your own aria-label to describe what is loading.',
  },
]
