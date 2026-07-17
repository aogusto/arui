import { Demo } from "../../Demo"
import { PropsTable, type PropRow } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta } from "./meta"

import Default from "./examples/default"
import defaultCode from "./examples/default.tsx?raw"
import Clearable from "./examples/clearable"
import clearableCode from "./examples/clearable.tsx?raw"
import Groups from "./examples/groups"
import groupsCode from "./examples/groups.tsx?raw"
import Multiple from "./examples/multiple"
import multipleCode from "./examples/multiple.tsx?raw"
import CompactTrigger from "./examples/compact-trigger"
import compactTriggerCode from "./examples/compact-trigger.tsx?raw"
import Disabled from "./examples/disabled"
import disabledCode from "./examples/disabled.tsx?raw"

const comboboxProps: PropRow[] = [
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

const comboboxInputProps: PropRow[] = [
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

const comboboxContentProps: PropRow[] = [
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

const comboboxListProps: PropRow[] = [
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

const comboboxItemProps: PropRow[] = [
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

const comboboxGroupProps: PropRow[] = [
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

const comboboxLabelProps: PropRow[] = [
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

const comboboxEmptyProps: PropRow[] = [
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

const comboboxChipsProps: PropRow[] = [
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

const comboboxChipProps: PropRow[] = [
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

const comboboxChipsInputProps: PropRow[] = [
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

const comboboxTriggerProps: PropRow[] = [
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

const comboboxValueProps: PropRow[] = [
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

export default function ComboboxDoc() {
  const importLine = `import { ${meta.imports.join(", ")} } from "@aogusto/arui"`
  return (
    <article className="mx-auto w-full max-w-3xl space-y-10">
      <header className="space-y-2">
        <p className="text-caption-1 font-semibold uppercase tracking-wide text-label-tertiary">{meta.category}</p>
        <h1 className="text-title-1 font-bold text-label">{meta.name}</h1>
        <p className="text-body text-label-secondary">{meta.description}</p>
      </header>

      <div className="flex items-center justify-between rounded-xl border border-separator bg-background-secondary px-3 py-2">
        <code className="font-mono text-caption-1 text-label">{importLine}</code>
        <CopyButton value={importLine} />
      </div>

      <div className="space-y-10">
        <Demo title="Default" code={defaultCode}><Default /></Demo>
        <Demo title="Clearable" code={clearableCode}><Clearable /></Demo>
        <Demo title="Groups" code={groupsCode}><Groups /></Demo>
        <Demo title="Multiple" code={multipleCode}><Multiple /></Demo>
        <Demo title="Compact trigger" code={compactTriggerCode}><CompactTrigger /></Demo>
        <Demo title="Disabled" code={disabledCode}><Disabled /></Demo>
      </div>

      <section className="space-y-6">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">Combobox</h3>
          <PropsTable rows={comboboxProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ComboboxInput</h3>
          <PropsTable rows={comboboxInputProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ComboboxContent</h3>
          <PropsTable rows={comboboxContentProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ComboboxList</h3>
          <PropsTable rows={comboboxListProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ComboboxItem</h3>
          <PropsTable rows={comboboxItemProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ComboboxGroup</h3>
          <PropsTable rows={comboboxGroupProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ComboboxLabel</h3>
          <PropsTable rows={comboboxLabelProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ComboboxEmpty</h3>
          <PropsTable rows={comboboxEmptyProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ComboboxChips</h3>
          <PropsTable rows={comboboxChipsProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ComboboxChip</h3>
          <PropsTable rows={comboboxChipProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ComboboxChipsInput</h3>
          <PropsTable rows={comboboxChipsInputProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ComboboxTrigger</h3>
          <PropsTable rows={comboboxTriggerProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ComboboxValue</h3>
          <PropsTable rows={comboboxValueProps} />
        </div>

        <p className="text-subhead text-label-secondary">
          ComboboxCollection renders the (item, index) =&gt; ReactNode function passed as its child for every item in
          the closest items array, the root's or an enclosing ComboboxGroup's, and is only needed when ComboboxList's
          own function-child shorthand isn't enough, e.g. inside a group. ComboboxSeparator is a structural divider
          with no props beyond className. useComboboxAnchor returns a React.RefObject&lt;HTMLDivElement | null&gt; to
          forward to ComboboxChips (or any other container) and to ComboboxContent's anchor prop, so the popup tracks
          that element's position and width instead of the default input or trigger.
        </p>
      </section>
    </article>
  )
}
