import { Demo } from "../../Demo"
import { PropsTable } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta, radioGroupProps, radioGroupItemProps } from "./meta"

import Default from "./examples/default"
import defaultCode from "./examples/default.tsx?raw"
import WithDescription from "./examples/with-description"
import withDescriptionCode from "./examples/with-description.tsx?raw"
import Horizontal from "./examples/horizontal"
import horizontalCode from "./examples/horizontal.tsx?raw"
import Disabled from "./examples/disabled"
import disabledCode from "./examples/disabled.tsx?raw"
import Invalid from "./examples/invalid"
import invalidCode from "./examples/invalid.tsx?raw"

export default function RadioGroupDoc() {
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
        <Demo title="With description" code={withDescriptionCode}><WithDescription /></Demo>
        <Demo title="Horizontal" code={horizontalCode}><Horizontal /></Demo>
        <Demo title="Disabled item" code={disabledCode}><Disabled /></Demo>
        <Demo title="Invalid" code={invalidCode}><Invalid /></Demo>
      </div>

      <section className="space-y-8">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">RadioGroup</h3>
          <PropsTable rows={radioGroupProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">RadioGroupItem</h3>
          <PropsTable rows={radioGroupItemProps} />
        </div>
      </section>
    </article>
  )
}
