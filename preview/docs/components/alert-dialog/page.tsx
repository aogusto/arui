import { Demo } from "../../Demo"
import { PropsTable, type PropRow } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta } from "./meta"

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

const contentProps: PropRow[] = [
  {
    prop: "size",
    type: '"default" | "sm"',
    default: '"default"',
    description: "Size of the dialog. sm keeps a narrow max width at every breakpoint and lays the footer actions out as two equal columns.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof AlertDialogPrimitive.Content>",
    description: "Extends Content from radix-ui's AlertDialog. Rendered inside a Portal with its own Overlay automatically.",
  },
]

const actionProps: PropRow[] = [
  {
    prop: "variant",
    type: '"default" | "outline" | "secondary" | "ghost" | "destructive" | "link"',
    default: '"default"',
    description: "Visual style of the action button, forwarded to Button.",
  },
  {
    prop: "size",
    type: '"default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"',
    default: '"default"',
    description: "Size of the action button, forwarded to Button.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof AlertDialogPrimitive.Action>",
    description: "Extends Action from radix-ui's AlertDialog. Confirms the alert and closes the dialog when activated.",
  },
]

const cancelProps: PropRow[] = [
  {
    prop: "variant",
    type: '"default" | "outline" | "secondary" | "ghost" | "destructive" | "link"',
    default: '"outline"',
    description: "Visual style of the cancel button, forwarded to Button.",
  },
  {
    prop: "size",
    type: '"default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"',
    default: '"default"',
    description: "Size of the cancel button, forwarded to Button.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof AlertDialogPrimitive.Cancel>",
    description: "Extends Cancel from radix-ui's AlertDialog. Dismisses the alert without confirming, and is focused automatically when the dialog opens.",
  },
]

const mediaProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"div">',
    description: "The remaining native <div> attributes. Place an icon inside as a slot before AlertDialogTitle, within AlertDialogHeader.",
  },
]

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
