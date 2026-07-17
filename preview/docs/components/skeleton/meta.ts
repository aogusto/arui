import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "skeleton",
  name: "Skeleton",
  category: "Data & Display",
  description: "A pulsing placeholder that mimics the shape of content while it loads, such as avatars, lines of text, or whole cards.",
  imports: ["Skeleton"],
}

export const props: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn(). Controls width, height, and shape (rounded-full, rounded-xl, etc), since Skeleton has no size of its own.",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"div">',
    description: "The remaining native <div> attributes. Renders as a <div data-slot=\"skeleton\"> with a pulsing muted background.",
  },
]
