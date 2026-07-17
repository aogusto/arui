import { Demo } from "../../Demo"
import { PropsTable } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta, toggleGroupProps, toggleGroupItemProps } from "./meta"

import Single from "./examples/single"
import singleCode from "./examples/single.tsx?raw"
import Multiple from "./examples/multiple"
import multipleCode from "./examples/multiple.tsx?raw"
import Outline from "./examples/outline"
import outlineCode from "./examples/outline.tsx?raw"
import Sizes from "./examples/sizes"
import sizesCode from "./examples/sizes.tsx?raw"
import Spacing from "./examples/spacing"
import spacingCode from "./examples/spacing.tsx?raw"
import Disabled from "./examples/disabled"
import disabledCode from "./examples/disabled.tsx?raw"

export default function ToggleGroupDoc() {
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
        <Demo title="Single selection" code={singleCode}><Single /></Demo>
        <Demo title="Multiple selection" code={multipleCode}><Multiple /></Demo>
        <Demo title="Outline variant" code={outlineCode}><Outline /></Demo>
        <Demo title="Sizes" code={sizesCode}><Sizes /></Demo>
        <Demo title="Spacing" code={spacingCode}><Spacing /></Demo>
        <Demo title="Disabled" code={disabledCode}><Disabled /></Demo>
      </div>

      <section className="space-y-6">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ToggleGroup</h3>
          <PropsTable rows={toggleGroupProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ToggleGroupItem</h3>
          <PropsTable rows={toggleGroupItemProps} />
        </div>
      </section>
    </article>
  )
}
