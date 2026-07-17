import { Demo } from "../../Demo"
import { PropsTable } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import {
  meta,
  popoverProps,
  popoverTriggerProps,
  popoverAnchorProps,
  popoverContentProps,
  popoverHeaderProps,
  popoverTitleProps,
  popoverDescriptionProps,
} from "./meta"

import Default from "./examples/default"
import defaultCode from "./examples/default.tsx?raw"
import Align from "./examples/align"
import alignCode from "./examples/align.tsx?raw"
import SideOffset from "./examples/side-offset"
import sideOffsetCode from "./examples/side-offset.tsx?raw"
import FormExample from "./examples/form"
import formCode from "./examples/form.tsx?raw"
import Anchor from "./examples/anchor"
import anchorCode from "./examples/anchor.tsx?raw"

export default function PopoverDoc() {
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
        <Demo title="Basic" code={defaultCode}><Default /></Demo>
        <Demo title="Alignment" code={alignCode}><Align /></Demo>
        <Demo title="Side offset" code={sideOffsetCode}><SideOffset /></Demo>
        <Demo title="With a form" code={formCode}><FormExample /></Demo>
        <Demo title="Custom anchor" code={anchorCode}><Anchor /></Demo>
      </div>

      <section className="space-y-6">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">Popover</h3>
          <PropsTable rows={popoverProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">PopoverTrigger</h3>
          <PropsTable rows={popoverTriggerProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">PopoverContent</h3>
          <PropsTable rows={popoverContentProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">PopoverAnchor</h3>
          <PropsTable rows={popoverAnchorProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">PopoverHeader</h3>
          <PropsTable rows={popoverHeaderProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">PopoverTitle</h3>
          <PropsTable rows={popoverTitleProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">PopoverDescription</h3>
          <PropsTable rows={popoverDescriptionProps} />
        </div>
      </section>
    </article>
  )
}
