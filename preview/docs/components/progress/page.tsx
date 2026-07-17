import { Demo } from "../../Demo"
import { PropsTable } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta, props } from "./meta"

import Default from "./examples/default"
import defaultCode from "./examples/default.tsx?raw"
import Values from "./examples/values"
import valuesCode from "./examples/values.tsx?raw"
import WithLabel from "./examples/with-label"
import withLabelCode from "./examples/with-label.tsx?raw"
import Thick from "./examples/thick"
import thickCode from "./examples/thick.tsx?raw"

export default function ProgressDoc() {
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
        <Demo title="Values" description="A fixed value between 0 and 100 renders as that percentage of the bar." code={valuesCode}><Values /></Demo>
        <Demo title="With label" code={withLabelCode}><WithLabel /></Demo>
        <Demo title="Thick" description="The bar's height and track color are plain classes, so they can be overridden with className." code={thickCode}><Thick /></Demo>
      </div>

      <section className="space-y-3">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>
        <PropsTable rows={props} />
      </section>
    </article>
  )
}
