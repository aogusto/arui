import { Demo } from "../../Demo"
import { PropsTable } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta, rootProps, triggerCloseProps, contentProps, layoutProps } from "./meta"

import Basic from "./examples/basic"
import basicCode from "./examples/basic.tsx?raw"
import Directions from "./examples/directions"
import directionsCode from "./examples/directions.tsx?raw"
import Controlled from "./examples/controlled"
import controlledCode from "./examples/controlled.tsx?raw"
import WithForm from "./examples/with-form"
import withFormCode from "./examples/with-form.tsx?raw"
import Scrollable from "./examples/scrollable"
import scrollableCode from "./examples/scrollable.tsx?raw"

export default function DrawerDoc() {
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
        <Demo title="Basic" code={basicCode}><Basic /></Demo>
        <Demo title="Directions" code={directionsCode}><Directions /></Demo>
        <Demo title="Controlled, non dismissible" code={controlledCode}><Controlled /></Demo>
        <Demo title="With a form" code={withFormCode}><WithForm /></Demo>
        <Demo title="Scrollable content" code={scrollableCode}><Scrollable /></Demo>
      </div>

      <section className="space-y-6">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">Drawer</h3>
          <PropsTable rows={rootProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">DrawerTrigger, DrawerClose</h3>
          <PropsTable rows={triggerCloseProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">DrawerContent</h3>
          <PropsTable rows={contentProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">DrawerHeader, DrawerFooter, DrawerTitle, DrawerDescription</h3>
          <PropsTable rows={layoutProps} />
        </div>
      </section>
    </article>
  )
}
