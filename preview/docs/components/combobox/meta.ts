import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "combobox",
  name: "Combobox",
  category: "Forms & Inputs",
  description: "A searchable select built on @base-ui/react's Combobox, combining a text input with a filtered list of options. Supports single or multiple selection, grouped items, and a chips layout for picking more than one value. The highlighted option uses an animated glass pill by default.",
  imports: [
    "Combobox",
    "ComboboxInput",
    "ComboboxContent",
    "ComboboxList",
    "ComboboxItem",
    "ComboboxGroup",
    "ComboboxLabel",
    "ComboboxCollection",
    "ComboboxEmpty",
    "ComboboxSeparator",
    "ComboboxChips",
    "ComboboxChip",
    "ComboboxChipsInput",
    "ComboboxTrigger",
    "ComboboxValue",
    "useComboboxAnchor",
  ],
}

export const comboboxProps: PropRow[] = [
  {
    prop: "items",
    type: "readonly unknown[] | readonly { items: readonly unknown[] }[]",
    description: "Flat array of selectable values, or an array of groups (objects with their own items array) to render with ComboboxGroup. Required for the input to filter as the user types.",
  },
  {
    prop: "value",
    type: "Value | Value[] | null",
    description: "Controlled selected value (an array when multiple). Use with onValueChange.",
  },
  {
    prop: "defaultValue",
    type: "Value | Value[] | null",
    description: "Initial selected value for uncontrolled usage.",
  },
  {
    prop: "onValueChange",
    type: "(value, eventDetails) => void",
    description: "Called when the selected value changes.",
  },
  {
    prop: "multiple",
    type: "boolean",
    default: "false",
    description: "Whether more than one item can be selected. Pair with ComboboxChips to render the selection as removable chips.",
  },
  {
    prop: "open",
    type: "boolean",
    description: "Controlled open state of the popup. Use with onOpenChange.",
  },
  {
    prop: "defaultOpen",
    type: "boolean",
    default: "false",
    description: "Initial open state for uncontrolled usage.",
  },
  {
    prop: "onOpenChange",
    type: "(open: boolean, eventDetails) => void",
    description: "Called when the popup opens or closes.",
  },
  {
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables the whole combobox, including its input and trigger.",
  },
  {
    prop: "readOnly",
    type: "boolean",
    default: "false",
    description: "Prevents choosing a different item while still allowing focus and scrolling.",
  },
  {
    prop: "required",
    type: "boolean",
    default: "false",
    description: "Marks the combobox as required in a form.",
  },
  {
    prop: "autoHighlight",
    type: 'boolean | "always"',
    default: "false",
    description: 'Highlights the first matching item while typing. "always" highlights it as soon as the list opens.',
  },
  {
    prop: "filter",
    type: "((itemValue, query) => boolean) | null",
    description: "Custom match function tested against the input query. Defaults to a locale-aware substring match; pass null to disable built-in filtering.",
  },
  {
    prop: "itemToStringLabel / itemToStringValue",
    type: "(itemValue: Value) => string",
    description: "Converts object item values to a display string and a form submission string. Not needed when items are shaped as { value, label }.",
  },
  {
    prop: "name",
    type: "string",
    description: "Name submitted with the form data.",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ComboboxPrimitive.Root>",
    description: "Extends Combobox.Root from @base-ui/react. Renders no DOM element of its own.",
  },
]

export const comboboxInputProps: PropRow[] = [
  {
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables the input.",
  },
  {
    prop: "showTrigger",
    type: "boolean",
    default: "true",
    description: "Renders the built-in dropdown trigger (chevron button) inline, in the input's end addon.",
  },
  {
    prop: "showClear",
    type: "boolean",
    default: "false",
    description: "Renders a clear button inline once a value is selected. Hides the trigger button while it's visible.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn(). Applied to the outer InputGroup wrapper.",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ComboboxPrimitive.Input>",
    description: "Extends Combobox.Input from @base-ui/react (the underlying <input>).",
  },
]

export const comboboxContentProps: PropRow[] = [
  {
    prop: "side",
    type: '"top" | "bottom" | "left" | "right" | "inline-start" | "inline-end"',
    default: '"bottom"',
    description: "Preferred side of the anchor the popup opens on.",
  },
  {
    prop: "align",
    type: '"start" | "center" | "end"',
    default: '"start"',
    description: "Alignment against the anchor.",
  },
  {
    prop: "sideOffset",
    type: "number",
    default: "6",
    description: "Distance in pixels between the anchor and the popup.",
  },
  {
    prop: "alignOffset",
    type: "number",
    default: "0",
    description: "Offset in pixels along the alignment axis.",
  },
  {
    prop: "anchor",
    type: "Element | React.RefObject<Element | null> | (() => Element | null)",
    description: "Element the popup is positioned against. Defaults to the input or trigger. Pass the ref from useComboboxAnchor to anchor against ComboboxChips in a multi-select layout.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ComboboxPrimitive.Popup>",
    description: "Extends Combobox.Popup from @base-ui/react. Rendered in a Portal, positioned by Combobox.Positioner, with a glassmorphism (regular material) background.",
  },
]

export const comboboxListProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ComboboxPrimitive.List>",
    description: "Extends Combobox.List from @base-ui/react. children can be static content or a (item, index) => ReactNode function driven by the items passed to Combobox.",
  },
]

export const comboboxItemProps: PropRow[] = [
  {
    prop: "value",
    type: "unknown",
    default: "null",
    description: "The value this item represents, compared against the selected value to render the checked state.",
  },
  {
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables this item and prevents it from being selected.",
  },
  {
    prop: "index",
    type: "number",
    description: "Explicit index in the list. Improves performance by skipping a DOM-based index lookup.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ComboboxPrimitive.Item>",
    description: "Extends Combobox.Item from @base-ui/react. Renders a check ItemIndicator automatically when selected.",
  },
]

export const comboboxGroupProps: PropRow[] = [
  {
    prop: "items",
    type: "readonly unknown[]",
    description: "Items rendered within this group. A child ComboboxCollection reads from this array instead of the root's items.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ComboboxPrimitive.Group>",
    description: "Extends Combobox.Group from @base-ui/react.",
  },
]

export const comboboxLabelProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ComboboxPrimitive.GroupLabel>",
    description: "Extends Combobox.GroupLabel from @base-ui/react. Labels the enclosing ComboboxGroup.",
  },
]

export const comboboxEmptyProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ComboboxPrimitive.Empty>",
    description: "Extends Combobox.Empty from @base-ui/react. Requires items on Combobox and only renders its children when the filtered list is empty.",
  },
]

export const comboboxChipsProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ComboboxPrimitive.Chips>",
    description: "Extends Combobox.Chips from @base-ui/react. Container for ComboboxChip and ComboboxChipsInput in a multiple select. Forward a ref, e.g. from useComboboxAnchor, to anchor the popup to it.",
  },
]

export const comboboxChipProps: PropRow[] = [
  {
    prop: "showRemove",
    type: "boolean",
    default: "true",
    description: "Renders a built-in remove button at the end of the chip.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ComboboxPrimitive.Chip>",
    description: "Extends Combobox.Chip from @base-ui/react.",
  },
]

export const comboboxChipsInputProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ComboboxPrimitive.Input>",
    description: "Extends Combobox.Input from @base-ui/react. The text input rendered inside ComboboxChips, sized to sit alongside the chips.",
  },
]

export const comboboxTriggerProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ComboboxPrimitive.Trigger>",
    description: "Extends Combobox.Trigger from @base-ui/react. Appends a chevron icon after its children automatically. Used internally by ComboboxInput's built-in trigger button, or standalone as a compact Select-like control.",
  },
]

export const comboboxValueProps: PropRow[] = [
  {
    prop: "placeholder",
    type: "React.ReactNode",
    description: "Content shown when no value is selected.",
  },
  {
    prop: "children",
    type: "React.ReactNode | ((selectedValue) => React.ReactNode)",
    description: "Custom render for the current value, e.g. to map an array of selected items into ComboboxChip elements.",
  },
]

export const props: PropRow[] = [
  ...comboboxProps,
  ...comboboxInputProps,
  ...comboboxContentProps,
  ...comboboxListProps,
  ...comboboxItemProps,
  ...comboboxGroupProps,
  ...comboboxLabelProps,
  ...comboboxEmptyProps,
  ...comboboxChipsProps,
  ...comboboxChipProps,
  ...comboboxChipsInputProps,
  ...comboboxTriggerProps,
  ...comboboxValueProps,
]
