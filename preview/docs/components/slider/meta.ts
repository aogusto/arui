import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "slider",
  name: "Slider",
  category: "Forms & Inputs",
  description: "A control for selecting a single value, or a range between two values, by dragging a thumb along a track. Built on Radix UI.",
  imports: ["Slider"],
}

export const props: PropRow[] = [
  {
    prop: "value",
    type: "number[]",
    description: "Controlled value(s). A single number renders one thumb; two numbers render a range with two thumbs. Use with onValueChange.",
  },
  {
    prop: "defaultValue",
    type: "number[]",
    description: "Initial value(s) for uncontrolled usage.",
  },
  {
    prop: "onValueChange",
    type: "(value: number[]) => void",
    description: "Called continuously while a thumb is being dragged.",
  },
  {
    prop: "onValueCommit",
    type: "(value: number[]) => void",
    description: "Called once when the thumb is released.",
  },
  {
    prop: "min",
    type: "number",
    default: "0",
    description: "Minimum value of the track.",
  },
  {
    prop: "max",
    type: "number",
    default: "100",
    description: "Maximum value of the track.",
  },
  {
    prop: "step",
    type: "number",
    default: "1",
    description: "Step increment for value changes.",
  },
  {
    prop: "minStepsBetweenThumbs",
    type: "number",
    default: "0",
    description: "Minimum number of steps enforced between thumbs on a range slider.",
  },
  {
    prop: "orientation",
    type: '"horizontal" | "vertical"',
    default: '"horizontal"',
    description: "Layout axis of the track and thumbs.",
  },
  {
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables the slider and prevents interaction.",
  },
  {
    prop: "name",
    type: "string",
    description: "Name submitted with the form data.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof SliderPrimitive.Root>",
    description: "Extends Slider.Root from radix-ui.",
  },
]
