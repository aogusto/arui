import { Demo } from "../../Demo"
import { PropsTable } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta, groupProps, panelProps, handleProps } from "./meta"

import Default from "./examples/default"
import defaultCode from "./examples/default.tsx?raw"
import WithHandle from "./examples/with-handle"
import withHandleCode from "./examples/with-handle.tsx?raw"
import Vertical from "./examples/vertical"
import verticalCode from "./examples/vertical.tsx?raw"
import ThreePanels from "./examples/three-panels"
import threePanelsCode from "./examples/three-panels.tsx?raw"
import Nested from "./examples/nested"
import nestedCode from "./examples/nested.tsx?raw"
import Collapsible from "./examples/collapsible"
import collapsibleCode from "./examples/collapsible.tsx?raw"

export default function ResizableDoc() {
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
        <Demo title="With handle" code={withHandleCode}><WithHandle /></Demo>
        <Demo title="Vertical orientation" code={verticalCode}><Vertical /></Demo>
        <Demo title="Three panels" code={threePanelsCode}><ThreePanels /></Demo>
        <Demo title="Nested groups" code={nestedCode}><Nested /></Demo>
        <Demo title="Collapsible panel" code={collapsibleCode}><Collapsible /></Demo>
      </div>

      <section className="space-y-6">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ResizablePanelGroup</h3>
          <PropsTable rows={groupProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ResizablePanel</h3>
          <PropsTable rows={panelProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ResizableHandle</h3>
          <PropsTable rows={handleProps} />
        </div>
      </section>
    </article>
  )
}
