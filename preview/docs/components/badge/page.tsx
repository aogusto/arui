import { Demo } from "../../Demo"
import { PropsTable } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta, props } from "./meta"

import Variants from "./examples/variants"
import variantsCode from "./examples/variants.tsx?raw"
import WithIcon from "./examples/with-icon"
import withIconCode from "./examples/with-icon.tsx?raw"
import AsChild from "./examples/as-child"
import asChildCode from "./examples/as-child.tsx?raw"
import Invalid from "./examples/invalid"
import invalidCode from "./examples/invalid.tsx?raw"

export default function BadgeDoc() {
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
        <Demo title="Variants" code={variantsCode}><Variants /></Demo>
        <Demo title="With icon" code={withIconCode}><WithIcon /></Demo>
        <Demo title="As child" description="Renders as another element (here, a link) while keeping the badge styles and hover state." code={asChildCode}><AsChild /></Demo>
        <Demo title="Invalid state" code={invalidCode}><Invalid /></Demo>
      </div>

      <section className="space-y-3">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>
        <PropsTable rows={props} />
      </section>
    </article>
  )
}
