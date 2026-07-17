import { Demo } from "../../Demo"
import { PropsTable } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta, props } from "./meta"

import Default from "./examples/default"
import defaultCode from "./examples/default.tsx?raw"
import WithCheckbox from "./examples/with-checkbox"
import withCheckboxCode from "./examples/with-checkbox.tsx?raw"
import WithSwitch from "./examples/with-switch"
import withSwitchCode from "./examples/with-switch.tsx?raw"
import Required from "./examples/required"
import requiredCode from "./examples/required.tsx?raw"
import Disabled from "./examples/disabled"
import disabledCode from "./examples/disabled.tsx?raw"

export default function LabelDoc() {
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
        <Demo title="With checkbox" code={withCheckboxCode}><WithCheckbox /></Demo>
        <Demo title="With switch" code={withSwitchCode}><WithSwitch /></Demo>
        <Demo title="Required field" code={requiredCode}><Required /></Demo>
        <Demo title="Disabled" code={disabledCode}><Disabled /></Demo>
      </div>

      <section className="space-y-3">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>
        <PropsTable rows={props} />
      </section>
    </article>
  )
}
