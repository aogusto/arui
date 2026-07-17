import { Demo } from "../../Demo"
import { PropsTable, type PropRow } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta } from "./meta"

import Sides from "./examples/sides"
import sidesCode from "./examples/sides.tsx?raw"
import Basic from "./examples/basic"
import basicCode from "./examples/basic.tsx?raw"
import CustomWidth from "./examples/custom-width"
import customWidthCode from "./examples/custom-width.tsx?raw"
import NoCloseButton from "./examples/no-close-button"
import noCloseButtonCode from "./examples/no-close-button.tsx?raw"

const sheetProps: PropRow[] = [
  {
    prop: "...props",
    type: "React.ComponentProps<typeof SheetPrimitive.Root>",
    description: "Extends Dialog.Root from radix-ui (open, defaultOpen, onOpenChange, modal).",
  },
]

const sheetTriggerProps: PropRow[] = [
  {
    prop: "...props",
    type: "React.ComponentProps<typeof SheetPrimitive.Trigger>",
    description: "Extends Dialog.Trigger from radix-ui. Renders a button by default; pass asChild to render your own trigger element instead.",
  },
]

const sheetContentProps: PropRow[] = [
  {
    prop: "side",
    type: '"top" | "right" | "bottom" | "left"',
    default: '"right"',
    description: "Edge of the screen the panel slides in from. Controls position, size, entry border and animation direction.",
  },
  {
    prop: "showCloseButton",
    type: "boolean",
    default: "true",
    description: "Renders the built in close button (an icon Button) pinned to the top right corner.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof SheetPrimitive.Content>",
    description: "Extends Dialog.Content from radix-ui. Rendered inside a SheetPortal, right after a SheetOverlay.",
  },
]

const sheetHeaderProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"div">',
    description: "The remaining native <div> attributes.",
  },
]

const sheetFooterProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"div">',
    description: "The remaining native <div> attributes. Uses mt-auto so it sticks to the bottom of the panel regardless of content length.",
  },
]

const sheetTitleProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof SheetPrimitive.Title>",
    description: "Extends Dialog.Title from radix-ui.",
  },
]

const sheetDescriptionProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof SheetPrimitive.Description>",
    description: "Extends Dialog.Description from radix-ui.",
  },
]

const sheetCloseProps: PropRow[] = [
  {
    prop: "...props",
    type: "React.ComponentProps<typeof SheetPrimitive.Close>",
    description: "Extends Dialog.Close from radix-ui. Renders a button that closes the sheet; pass asChild to render your own element.",
  },
]

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
