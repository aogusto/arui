import { Demo } from "../../Demo"
import { PropsTable } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta, selectProps, selectTriggerProps, selectValueProps, selectContentProps, selectItemProps } from "./meta"

import Default from "./examples/default"
import defaultCode from "./examples/default.tsx?raw"
import Sizes from "./examples/sizes"
import sizesCode from "./examples/sizes.tsx?raw"
import Groups from "./examples/groups"
import groupsCode from "./examples/groups.tsx?raw"
import Disabled from "./examples/disabled"
import disabledCode from "./examples/disabled.tsx?raw"
import WithLabel from "./examples/with-label"
import withLabelCode from "./examples/with-label.tsx?raw"

export default function SelectDoc() {
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
        <Demo title="Sizes" code={sizesCode}><Sizes /></Demo>
        <Demo title="Groups" code={groupsCode}><Groups /></Demo>
        <Demo title="Disabled" code={disabledCode}><Disabled /></Demo>
        <Demo title="With label" code={withLabelCode}><WithLabel /></Demo>
      </div>

      <section className="space-y-6">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">Select</h3>
          <PropsTable rows={selectProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">SelectTrigger</h3>
          <PropsTable rows={selectTriggerProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">SelectValue</h3>
          <PropsTable rows={selectValueProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">SelectContent</h3>
          <PropsTable rows={selectContentProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">SelectItem</h3>
          <PropsTable rows={selectItemProps} />
        </div>

        <p className="text-subhead text-label-secondary">
          SelectGroup, SelectLabel, and SelectSeparator are structural building blocks with no props of their own
          beyond className and whatever their underlying Radix primitive accepts (Select.Group, Select.Label, and
          Select.Separator respectively). SelectScrollUpButton and SelectScrollDownButton render automatically
          inside SelectContent when the option list overflows, so they rarely need to be used directly.
        </p>
      </section>
    </article>
  )
}
