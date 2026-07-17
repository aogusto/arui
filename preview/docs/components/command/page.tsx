import { Demo } from "../../Demo"
import { PropsTable, type PropRow } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta } from "./meta"

import Default from "./examples/default"
import defaultCode from "./examples/default.tsx?raw"
import Shortcuts from "./examples/shortcuts"
import shortcutsCode from "./examples/shortcuts.tsx?raw"
import Selected from "./examples/selected"
import selectedCode from "./examples/selected.tsx?raw"
import Disabled from "./examples/disabled"
import disabledCode from "./examples/disabled.tsx?raw"
import Combobox from "./examples/combobox"
import comboboxCode from "./examples/combobox.tsx?raw"

const commandProps: PropRow[] = [
  {
    prop: "value",
    type: "string",
    description: "Controlled value of the currently highlighted item. Pair with onValueChange to control selection yourself.",
  },
  {
    prop: "onValueChange",
    type: "(value: string) => void",
    description: "Called when the highlighted item changes, from arrow keys, pointer hover, or filtering.",
  },
  {
    prop: "defaultValue",
    type: "string",
    description: "Initial highlighted item value for uncontrolled usage.",
  },
  {
    prop: "shouldFilter",
    type: "boolean",
    default: "true",
    description: "Set to false to turn off the built-in filtering and sorting, for example to filter items yourself asynchronously.",
  },
  {
    prop: "loop",
    type: "boolean",
    default: "false",
    description: "Wraps arrow key navigation from the last item back to the first, and vice versa.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof CommandPrimitive>",
    description: "Extends cmdk's Command root (filter, keywords, disablePointerSelection, vimBindings, label, etc). Its background turns transparent automatically when nested inside a DialogContent or PopoverContent.",
  },
]

const commandInputProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof CommandPrimitive.Input>",
    description: "Extends cmdk's Command.Input (placeholder, value, onValueChange, disabled, etc). Rendered inside a compact InputGroup with a search icon suffix.",
  },
]

const commandListProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof CommandPrimitive.List>",
    description: "Extends cmdk's Command.List. Scrolls internally past a max height, and hosts CommandGroup, CommandItem, and CommandSeparator.",
  },
]

const commandEmptyProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof CommandPrimitive.Empty>",
    description: "Extends cmdk's Command.Empty. Renders automatically, and only, when the current search matches zero items.",
  },
]

const commandGroupProps: PropRow[] = [
  {
    prop: "heading",
    type: "React.ReactNode",
    description: "Optional label rendered above the group's items.",
  },
  {
    prop: "value",
    type: "string",
    description: "Unique identifier for the group, used for filtering. Required if no heading is provided.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof CommandPrimitive.Group>",
    description: "Extends cmdk's Command.Group. Groups related CommandItems together; hidden entirely when none of its items match the search.",
  },
]

const commandItemProps: PropRow[] = [
  {
    prop: "value",
    type: "string",
    description: "Unique value used for filtering and selection. Inferred from the item's text content when omitted.",
  },
  {
    prop: "onSelect",
    type: "(value: string) => void",
    description: "Called with the item's value when it is selected, via click or Enter.",
  },
  {
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables selection and dims the item.",
  },
  {
    prop: "keywords",
    type: "string[]",
    description: "Extra terms considered when matching this item against the search query.",
  },
  {
    prop: "data-checked",
    type: "boolean",
    description: "When true, reveals the item's built-in trailing check icon. The icon stays hidden by default, and is hidden entirely whenever the item also renders a CommandShortcut.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof CommandPrimitive.Item>",
    description: "Extends cmdk's Command.Item. Highlighted automatically during keyboard navigation and pointer hover.",
  },
]

const commandShortcutProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"span">',
    description: "The remaining native <span> attributes. Renders a muted, right-aligned keyboard shortcut inside a CommandItem.",
  },
]

const commandSeparatorProps: PropRow[] = [
  {
    prop: "alwaysRender",
    type: "boolean",
    default: "false",
    description: "Forces the separator to stay visible even while a search query is filtering the list. By default it hides while filtering.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof CommandPrimitive.Separator>",
    description: "Extends cmdk's Command.Separator.",
  },
]

export default function CommandDoc() {
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
        <Demo title="Basic palette" code={defaultCode}><Default /></Demo>
        <Demo title="With shortcuts" code={shortcutsCode}><Shortcuts /></Demo>
        <Demo title="With a selected item" code={selectedCode}><Selected /></Demo>
        <Demo title="Disabled item" code={disabledCode}><Disabled /></Demo>
        <Demo title="As a combobox, inside a popover" code={comboboxCode}><Combobox /></Demo>
      </div>

      <section className="space-y-6">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">Command</h3>
          <PropsTable rows={commandProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">CommandInput</h3>
          <PropsTable rows={commandInputProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">CommandList</h3>
          <PropsTable rows={commandListProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">CommandEmpty</h3>
          <PropsTable rows={commandEmptyProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">CommandGroup</h3>
          <PropsTable rows={commandGroupProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">CommandItem</h3>
          <PropsTable rows={commandItemProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">CommandShortcut</h3>
          <PropsTable rows={commandShortcutProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">CommandSeparator</h3>
          <PropsTable rows={commandSeparatorProps} />
        </div>
      </section>
    </article>
  )
}
