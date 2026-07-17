import { Demo } from "../../Demo"
import { PropsTable, type PropRow } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta } from "./meta"

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

const popoverProps: PropRow[] = [
  {
    prop: "...props",
    type: "React.ComponentProps<typeof PopoverPrimitive.Root>",
    description: "Extends Popover.Root from radix-ui. Controls the open state via open / onOpenChange, or defaultOpen for uncontrolled usage.",
  },
]

const popoverTriggerProps: PropRow[] = [
  {
    prop: "...props",
    type: "React.ComponentProps<typeof PopoverPrimitive.Trigger>",
    description: "Extends Popover.Trigger from radix-ui. Pass asChild to render a custom element (e.g. a Button) as the trigger instead of the default button.",
  },
]

const popoverAnchorProps: PropRow[] = [
  {
    prop: "...props",
    type: "React.ComponentProps<typeof PopoverPrimitive.Anchor>",
    description: "Extends Popover.Anchor from radix-ui. Sets the element the content positions against, when it should differ from the trigger itself.",
  },
]

const popoverContentProps: PropRow[] = [
  {
    prop: "align",
    type: '"start" | "center" | "end"',
    default: '"center"',
    description: "Alignment of the content relative to the trigger (or anchor) along the perpendicular axis.",
  },
  {
    prop: "sideOffset",
    type: "number",
    default: "4",
    description: "Distance in pixels between the content and the trigger.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof PopoverPrimitive.Content>",
    description: "Extends Popover.Content from radix-ui (side, collisionPadding, onOpenAutoFocus, etc). Rendered inside a Portal, with a glassmorphism surface applied by default.",
  },
]

const popoverHeaderProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "Extends the native <div>. Groups PopoverTitle and PopoverDescription with vertical spacing.",
  },
]

const popoverTitleProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'h2'>",
    description: "Extends the <h2> element's attributes, though the component itself renders a <div> with medium font weight, not a heading element.",
  },
]

const popoverDescriptionProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'p'>",
    description: "Extends the native <p>. Renders muted secondary text below the title.",
  },
]

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
