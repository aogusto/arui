import { Demo } from "../../Demo"
import { PropsTable } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta, props } from "./meta"

import Default from "./examples/default"
import defaultCode from "./examples/default.tsx?raw"
import Sizes from "./examples/sizes"
import sizesCode from "./examples/sizes.tsx?raw"
import CustomColor from "./examples/custom-color"
import customColorCode from "./examples/custom-color.tsx?raw"
import WithText from "./examples/with-text"
import withTextCode from "./examples/with-text.tsx?raw"
import InButton from "./examples/in-button"
import inButtonCode from "./examples/in-button.tsx?raw"

export default function SpinnerDoc() {
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
        <Demo title="Sizes" description="Spinner takes no size prop, so sizing is a plain size-* utility." code={sizesCode}><Sizes /></Demo>
        <Demo title="Custom color" description="Loader2 reads currentColor, so any text-* utility recolors the spinner." code={customColorCode}><CustomColor /></Demo>
        <Demo title="With text" code={withTextCode}><WithText /></Demo>
        <Demo title="In a button" description="Pair Spinner with a disabled Button to show a pending action." code={inButtonCode}><InButton /></Demo>
      </div>

      <section className="space-y-3">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>
        <PropsTable rows={props} />
      </section>
    </article>
  )
}
