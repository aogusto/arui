import { Demo } from "../../Demo"
import { PropsTable } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta, props } from "./meta"

import Variants from "./examples/variants"
import variantsCode from "./examples/variants.tsx?raw"
import Dim from "./examples/dim"
import dimCode from "./examples/dim.tsx?raw"
import WithContent from "./examples/with-content"
import withContentCode from "./examples/with-content.tsx?raw"
import FloatingToolbar from "./examples/floating-toolbar"
import floatingToolbarCode from "./examples/floating-toolbar.tsx?raw"
import ActionBar from "./examples/action-bar"
import actionBarCode from "./examples/action-bar.tsx?raw"
import Tinted from "./examples/tinted"
import tintedCode from "./examples/tinted.tsx?raw"

export default function GlassSurfaceDoc() {
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
        <Demo title="Materials" code={variantsCode}><Variants /></Demo>
        <Demo title="Dim overlay" code={dimCode}><Dim /></Demo>
        <Demo title="With content" code={withContentCode}><WithContent /></Demo>
        <Demo title="Floating toolbar" code={floatingToolbarCode}><FloatingToolbar /></Demo>
        <Demo title="Docked action bar" code={actionBarCode}><ActionBar /></Demo>
        <Demo title="Tinted" code={tintedCode}><Tinted /></Demo>
      </div>

      <section className="space-y-3">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>
        <PropsTable rows={props} />
      </section>
    </article>
  )
}
