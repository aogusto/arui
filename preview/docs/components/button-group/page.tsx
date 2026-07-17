import { Demo } from "../../Demo"
import { PropsTable } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta, buttonGroupProps, buttonGroupTextProps, buttonGroupSeparatorProps } from "./meta"

import Variants from "./examples/variants"
import variantsCode from "./examples/variants.tsx?raw"
import Orientation from "./examples/orientation"
import orientationCode from "./examples/orientation.tsx?raw"
import WithIcons from "./examples/with-icons"
import withIconsCode from "./examples/with-icons.tsx?raw"
import WithSeparator from "./examples/with-separator"
import withSeparatorCode from "./examples/with-separator.tsx?raw"
import WithText from "./examples/with-text"
import withTextCode from "./examples/with-text.tsx?raw"

export default function ButtonGroupDoc() {
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
        <Demo title="Orientation" code={orientationCode}><Orientation /></Demo>
        <Demo title="With icons" code={withIconsCode}><WithIcons /></Demo>
        <Demo title="With separator" code={withSeparatorCode}><WithSeparator /></Demo>
        <Demo title="With text" code={withTextCode}><WithText /></Demo>
      </div>

      <section className="space-y-6">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ButtonGroup</h3>
          <PropsTable rows={buttonGroupProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ButtonGroupText</h3>
          <PropsTable rows={buttonGroupTextProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ButtonGroupSeparator</h3>
          <PropsTable rows={buttonGroupSeparatorProps} />
        </div>
      </section>
    </article>
  )
}
