import { Demo } from "../../Demo"
import { PropsTable } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta, props } from "./meta"

import Default from "./examples/default"
import defaultCode from "./examples/default.tsx?raw"
import Range from "./examples/range"
import rangeCode from "./examples/range.tsx?raw"
import Step from "./examples/step"
import stepCode from "./examples/step.tsx?raw"
import Vertical from "./examples/vertical"
import verticalCode from "./examples/vertical.tsx?raw"
import Disabled from "./examples/disabled"
import disabledCode from "./examples/disabled.tsx?raw"
import WithLabel from "./examples/with-label"
import withLabelCode from "./examples/with-label.tsx?raw"

export default function SliderDoc() {
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
        <Demo title="Range" code={rangeCode}><Range /></Demo>
        <Demo title="Step" code={stepCode}><Step /></Demo>
        <Demo title="Vertical" code={verticalCode}><Vertical /></Demo>
        <Demo title="Disabled" code={disabledCode}><Disabled /></Demo>
        <Demo title="With label" code={withLabelCode}><WithLabel /></Demo>
      </div>

      <section className="space-y-3">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>
        <PropsTable rows={props} />
      </section>
    </article>
  )
}
