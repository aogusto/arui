import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "button-group",
  name: "Button Group",
  category: "Forms & Inputs",
  description: "Groups related Buttons into a single visually merged control, fusing shared borders and rounding only the outer corners. Supports horizontal or vertical orientation, plus optional separators and text labels between segments.",
  imports: ["ButtonGroup", "ButtonGroupText", "ButtonGroupSeparator"],
}
