import { Demo } from "../../Demo"
import { PropsTable } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta, tabsProps, tabsListProps, tabsTriggerProps, tabsContentProps } from "./meta"

import Default from "./examples/default"
import defaultCode from "./examples/default.tsx?raw"
import Variants from "./examples/variants"
import variantsCode from "./examples/variants.tsx?raw"
import WithIcons from "./examples/with-icons"
import withIconsCode from "./examples/with-icons.tsx?raw"
import Vertical from "./examples/vertical"
import verticalCode from "./examples/vertical.tsx?raw"
import Disabled from "./examples/disabled"
import disabledCode from "./examples/disabled.tsx?raw"

export default function TabsDoc() {
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
        <Demo title="Variants" code={variantsCode}><Variants /></Demo>
        <Demo title="With icons" code={withIconsCode}><WithIcons /></Demo>
        <Demo title="Vertical orientation" code={verticalCode}><Vertical /></Demo>
        <Demo title="Disabled tab" code={disabledCode}><Disabled /></Demo>
      </div>

      <section className="space-y-6">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">Tabs</h3>
          <PropsTable rows={tabsProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">TabsList</h3>
          <PropsTable rows={tabsListProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">TabsTrigger</h3>
          <PropsTable rows={tabsTriggerProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">TabsContent</h3>
          <PropsTable rows={tabsContentProps} />
        </div>
      </section>
    </article>
  )
}
