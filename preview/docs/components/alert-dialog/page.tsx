import { Demo } from "../../Demo"
import { PropsTable } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta, contentProps, actionProps, cancelProps, mediaProps } from "./meta"

import Default from "./examples/default"
import defaultCode from "./examples/default.tsx?raw"
import Sizes from "./examples/sizes"
import sizesCode from "./examples/sizes.tsx?raw"
import WithMedia from "./examples/with-media"
import withMediaCode from "./examples/with-media.tsx?raw"
import ActionVariant from "./examples/action-variant"
import actionVariantCode from "./examples/action-variant.tsx?raw"
import DescriptionLink from "./examples/description-link"
import descriptionLinkCode from "./examples/description-link.tsx?raw"

export default function AlertDialogDoc() {
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
        <Demo title="Sizes" code={sizesCode}><Sizes /></Demo>
        <Demo title="With media" code={withMediaCode}><WithMedia /></Demo>
        <Demo title="Action variant" code={actionVariantCode}><ActionVariant /></Demo>
        <Demo title="Description with link" code={descriptionLinkCode}><DescriptionLink /></Demo>
      </div>

      <section className="space-y-6">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">AlertDialogContent</h3>
          <PropsTable rows={contentProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">AlertDialogAction</h3>
          <PropsTable rows={actionProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">AlertDialogCancel</h3>
          <PropsTable rows={cancelProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">AlertDialogMedia</h3>
          <PropsTable rows={mediaProps} />
        </div>

        <p className="text-subhead text-label-secondary">
          AlertDialog is the root (uncontrolled or controlled via open / onOpenChange). AlertDialogTrigger opens it
          and is typically used with asChild around a Button. AlertDialogHeader, AlertDialogFooter, AlertDialogTitle
          and AlertDialogDescription are layout and typography wrappers, each accepting className plus the native
          props of the element or Radix primitive they render.
        </p>
      </section>
    </article>
  )
}
