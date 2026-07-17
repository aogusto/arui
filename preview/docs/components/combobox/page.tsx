import { Demo } from "../../Demo"
import { PropsTable } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import {
  meta,
  comboboxProps,
  comboboxInputProps,
  comboboxContentProps,
  comboboxListProps,
  comboboxItemProps,
  comboboxGroupProps,
  comboboxLabelProps,
  comboboxEmptyProps,
  comboboxChipsProps,
  comboboxChipProps,
  comboboxChipsInputProps,
  comboboxTriggerProps,
  comboboxValueProps,
} from "./meta"

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
