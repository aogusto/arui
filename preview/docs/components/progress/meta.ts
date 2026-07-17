import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "progress",
  name: "Progress",
  category: "Data & Display",
  description: "A thin horizontal bar that visualizes how far along a task or process is, built on Radix UI. Drive it with a numeric value between 0 and its max.",
  imports: ["Progress"],
}

export const props: PropRow[] = [
  {
    prop: "value",
    type: "number | null",
    description: "Current progress, on a 0-100 scale. The visual fill reads this number directly as a percentage width; null (or omitted) renders an empty bar.",
  },
  {
    prop: "max",
    type: "number",
    default: "100",
    description: "Upper bound of the range, forwarded to the underlying Radix root. Does not affect the visual fill width, which always reads value as a raw percentage.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ProgressPrimitive.Root>",
    description: "Extends Progress.Root from radix-ui.",
  },
]
