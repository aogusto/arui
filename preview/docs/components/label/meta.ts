import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "label",
  name: "Label",
  category: "Forms & Inputs",
  description: "An accessible label for a form control, built on Radix UI's Label primitive. Pair it with an Input, Checkbox, or Switch via htmlFor, and it automatically dims when the control it's attached to is disabled.",
  imports: ["Label"],
}

export const props: PropRow[] = [
  {
    prop: "htmlFor",
    type: "string",
    description: "Id of the form control this label describes. Clicking the label focuses (or toggles) that control.",
  },
  {
    prop: "asChild",
    type: "boolean",
    default: "false",
    description: "Renders the child as the root element (via Slot), inheriting the label styles.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof LabelPrimitive.Root>",
    description: "Extends Label.Root from radix-ui, so the remaining native <label> attributes (id, onClick, etc.) are all supported.",
  },
]
