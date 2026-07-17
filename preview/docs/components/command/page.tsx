import { Demo } from "../../Demo"
import { PropsTable } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import {
  meta,
  commandProps,
  commandInputProps,
  commandListProps,
  commandEmptyProps,
  commandGroupProps,
  commandItemProps,
  commandShortcutProps,
  commandSeparatorProps,
} from "./meta"

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
