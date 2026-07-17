import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "input-group",
  name: "Input Group",
  category: "Forms & Inputs",
  description: "Wraps an input or textarea with addons such as icons, text, and buttons, aligned inline on either side of the field or as a block above/below it.",
  imports: [
    "InputGroup",
    "InputGroupAddon",
    "InputGroupButton",
    "InputGroupText",
    "InputGroupInput",
    "InputGroupTextarea",
  ],
}
