import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "textarea",
  name: "Textarea",
  category: "Forms & Inputs",
  description: "A multi-line text input that grows with its content and matches the styling of the other form fields.",
  imports: ["Textarea"],
}

export const props: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"textarea">',
    description: "The remaining native <textarea> attributes (value, onChange, rows, placeholder, etc.).",
  },
]
