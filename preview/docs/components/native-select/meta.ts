import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "native-select",
  name: "Native Select",
  category: "Forms & Inputs",
  description: "A native <select> element styled to match the rest of the form controls, with a chevron icon layered on top. NativeSelectOption and NativeSelectOptGroup style the underlying <option> and <optgroup> elements, and the trigger supports a default and a sm size plus the native disabled state.",
  imports: ["NativeSelect", "NativeSelectOption", "NativeSelectOptGroup", "Label"],
}
