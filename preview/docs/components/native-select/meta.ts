import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "native-select",
  name: "Native Select",
  category: "Forms & Inputs",
  description: "A native <select> element styled to match the rest of the form controls, with a chevron icon layered on top. NativeSelectOption and NativeSelectOptGroup style the underlying <option> and <optgroup> elements, and the trigger supports a default and a sm size plus the native disabled state.",
  imports: ["NativeSelect", "NativeSelectOption", "NativeSelectOptGroup", "Label"],
}

export const propsNativeSelect: PropRow[] = [
  {
    prop: "size",
    type: '"default" | "sm"',
    default: '"default"',
    description: "Size of the select. Sets the trigger height only, not the native HTML size attribute.",
  },
  {
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables the select and dims the wrapper.",
  },
  {
    prop: "aria-invalid",
    type: "boolean | 'true' | 'false'",
    description: "Marks the select as invalid, switching the border and focus ring to the destructive color.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged via cn() with the wrapper div's styles (not applied to the underlying <select>).",
  },
  {
    prop: "...props",
    type: "Omit<React.ComponentProps<'select'>, 'size'>",
    description: "The remaining native <select> attributes (value, onChange, multiple, etc.). Native size is omitted in favor of the size prop above.",
  },
]

export const propsNativeSelectOption: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'option'>",
    description: "The remaining native <option> attributes (value, disabled, etc.).",
  },
]

export const propsNativeSelectOptGroup: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'optgroup'>",
    description: "The remaining native <optgroup> attributes (label, disabled, etc.).",
  },
]

export const props: PropRow[] = [...propsNativeSelect, ...propsNativeSelectOption, ...propsNativeSelectOptGroup]
