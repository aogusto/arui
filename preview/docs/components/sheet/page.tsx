import { Demo } from "../../Demo"
import { PropsTable } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import {
  meta,
  sheetProps,
  sheetTriggerProps,
  sheetContentProps,
  sheetHeaderProps,
  sheetFooterProps,
  sheetTitleProps,
  sheetDescriptionProps,
  sheetCloseProps,
} from "./meta"

import Sides from "./examples/sides"
import sidesCode from "./examples/sides.tsx?raw"
import Basic from "./examples/basic"
import basicCode from "./examples/basic.tsx?raw"
import CustomWidth from "./examples/custom-width"
import customWidthCode from "./examples/custom-width.tsx?raw"
import NoCloseButton from "./examples/no-close-button"
import noCloseButtonCode from "./examples/no-close-button.tsx?raw"

export default function SheetDoc() {
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
        <Demo title="Sides" description="Pass side to SheetContent to slide in from the top, right, bottom or left." code={sidesCode}><Sides /></Demo>
        <Demo title="Custom width" description="className merges with the panel's own styles via cn(), so the default width can be overridden." code={customWidthCode}><CustomWidth /></Demo>
        <Demo title="Without the close button" description="Set showCloseButton to false and provide your own dismiss action, for example in the footer." code={noCloseButtonCode}><NoCloseButton /></Demo>
      </div>

      <section className="space-y-6">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">Sheet</h3>
          <PropsTable rows={sheetProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">SheetTrigger</h3>
          <PropsTable rows={sheetTriggerProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">SheetContent</h3>
          <PropsTable rows={sheetContentProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">SheetHeader</h3>
          <PropsTable rows={sheetHeaderProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">SheetFooter</h3>
          <PropsTable rows={sheetFooterProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">SheetTitle</h3>
          <PropsTable rows={sheetTitleProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">SheetDescription</h3>
          <PropsTable rows={sheetDescriptionProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">SheetClose</h3>
          <PropsTable rows={sheetCloseProps} />
        </div>
      </section>
    </article>
  )
}
