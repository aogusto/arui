import { Demo } from "../../Demo"
import { PropsTable, type PropRow } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta } from "./meta"

import Default from "./examples/default"
import defaultCode from "./examples/default.tsx?raw"
import Confirmation from "./examples/confirmation"
import confirmationCode from "./examples/confirmation.tsx?raw"
import FooterCloseButton from "./examples/footer-close-button"
import footerCloseButtonCode from "./examples/footer-close-button.tsx?raw"
import WithoutCloseButton from "./examples/without-close-button"
import withoutCloseButtonCode from "./examples/without-close-button.tsx?raw"
import WithForm from "./examples/with-form"
import withFormCode from "./examples/with-form.tsx?raw"

const dialogProps: PropRow[] = [
  {
    prop: "...props",
    type: "React.ComponentProps<typeof DialogPrimitive.Root>",
    description: "Extends Radix's Dialog.Root. Common props: open, defaultOpen, onOpenChange, modal. Uncontrolled by default; control it yourself to close the dialog programmatically, for example after a form submits.",
  },
]

const dialogTriggerProps: PropRow[] = [
  {
    prop: "...props",
    type: "React.ComponentProps<typeof DialogPrimitive.Trigger>",
    description: "Extends Radix's Dialog.Trigger. Pass asChild to render your own element (typically a Button) instead of the default button.",
  },
]

const dialogContentProps: PropRow[] = [
  {
    prop: "showCloseButton",
    type: "boolean",
    default: "true",
    description: "Shows the close (X) icon button in the top right corner.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof DialogPrimitive.Content>",
    description: "Extends Radix's Dialog.Content. Rendered inside a portal with an overlay behind it, centered on screen with a glass (regular material) surface, and animates in and out.",
  },
]

const dialogHeaderProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"div">',
    description: "The remaining native <div> attributes. Stacks DialogTitle and DialogDescription vertically.",
  },
]

const dialogFooterProps: PropRow[] = [
  {
    prop: "showCloseButton",
    type: "boolean",
    default: "false",
    description: "Appends a default outline Close button after the footer's children.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"div">',
    description: "The remaining native <div> attributes. Stacks actions on mobile and right-aligns them from sm up.",
  },
]

const dialogTitleProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof DialogPrimitive.Title>",
    description: "Extends Radix's Dialog.Title. Required for accessibility, it labels the dialog for assistive tech.",
  },
]

const dialogDescriptionProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof DialogPrimitive.Description>",
    description: "Extends Radix's Dialog.Description. Optional but recommended, it describes the dialog for assistive tech; nested links are styled automatically.",
  },
]

const dialogCloseProps: PropRow[] = [
  {
    prop: "...props",
    type: "React.ComponentProps<typeof DialogPrimitive.Close>",
    description: "Extends Radix's Dialog.Close. Closes the dialog when its child is activated. Pass asChild to render your own element (typically a Button).",
  },
]

export default function DialogDoc() {
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
        <Demo title="Basic dialog" code={defaultCode}><Default /></Demo>
        <Demo title="Confirmation" code={confirmationCode}><Confirmation /></Demo>
        <Demo title="Footer close button" code={footerCloseButtonCode}><FooterCloseButton /></Demo>
        <Demo title="Without a close button" code={withoutCloseButtonCode}><WithoutCloseButton /></Demo>
        <Demo title="With a form" code={withFormCode}><WithForm /></Demo>
      </div>

      <section className="space-y-6">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">Dialog</h3>
          <PropsTable rows={dialogProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">DialogTrigger</h3>
          <PropsTable rows={dialogTriggerProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">DialogContent</h3>
          <PropsTable rows={dialogContentProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">DialogHeader</h3>
          <PropsTable rows={dialogHeaderProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">DialogFooter</h3>
          <PropsTable rows={dialogFooterProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">DialogTitle</h3>
          <PropsTable rows={dialogTitleProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">DialogDescription</h3>
          <PropsTable rows={dialogDescriptionProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">DialogClose</h3>
          <PropsTable rows={dialogCloseProps} />
        </div>
      </section>
    </article>
  )
}
