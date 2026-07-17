import { Demo } from "../../Demo"
import { PropsTable } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import {
  meta,
  accordionProps,
  accordionItemProps,
  accordionTriggerProps,
  accordionContentProps,
} from "./meta"

import Default from "./examples/default"
import defaultCode from "./examples/default.tsx?raw"
import Multiple from "./examples/multiple"
import multipleCode from "./examples/multiple.tsx?raw"
import NotCollapsible from "./examples/not-collapsible"
import notCollapsibleCode from "./examples/not-collapsible.tsx?raw"
import DisabledItem from "./examples/disabled-item"
import disabledItemCode from "./examples/disabled-item.tsx?raw"

export default function AccordionDoc() {
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
        <Demo title="Single, collapsible" code={defaultCode}><Default /></Demo>
        <Demo title="Multiple items open" code={multipleCode}><Multiple /></Demo>
        <Demo title="Single, not collapsible" code={notCollapsibleCode}><NotCollapsible /></Demo>
        <Demo title="Disabled item" code={disabledItemCode}><DisabledItem /></Demo>
      </div>

      <section className="space-y-6">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">Accordion</h3>
          <PropsTable rows={accordionProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">AccordionItem</h3>
          <PropsTable rows={accordionItemProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">AccordionTrigger</h3>
          <PropsTable rows={accordionTriggerProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">AccordionContent</h3>
          <PropsTable rows={accordionContentProps} />
        </div>
      </section>
    </article>
  )
}
