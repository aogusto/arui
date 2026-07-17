import { Demo } from "../../Demo"
import { PropsTable, type PropRow } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta } from "./meta"

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

const rootProps: PropRow[] = [
  {
    prop: "direction",
    type: '"top" | "bottom" | "left" | "right"',
    default: '"bottom"',
    description: "Edge of the screen the drawer slides in from.",
  },
  {
    prop: "modal",
    type: "boolean",
    default: "true",
    description: "When false, the rest of the page stays interactive while the drawer is open.",
  },
  {
    prop: "dismissible",
    type: "boolean",
    default: "true",
    description: "When false, dragging, clicking outside and Escape no longer close the drawer. Use together with open/onOpenChange.",
  },
  {
    prop: "shouldScaleBackground",
    type: "boolean",
    default: "false",
    description: "Scales the page behind the drawer down for a stacked look while it's open.",
  },
  {
    prop: "snapPoints",
    type: "(number | string)[]",
    description: "Heights (percentages or pixel values) the drawer can rest at while dragging, from least to most visible.",
  },
  {
    prop: "activeSnapPoint",
    type: "number | string | null",
    description: "The currently active snap point. Pair with setActiveSnapPoint to control snapping.",
  },
  {
    prop: "open",
    type: "boolean",
    description: "Controls the open state. Use together with onOpenChange.",
  },
  {
    prop: "onOpenChange",
    type: "(open: boolean) => void",
    description: "Called whenever the open state changes.",
  },
  {
    prop: "defaultOpen",
    type: "boolean",
    default: "false",
    description: "Initial open state for uncontrolled usage.",
  },
  {
    prop: "container",
    type: "HTMLElement | null",
    description: "Element the drawer's portal renders into. Defaults to document.body.",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof DrawerPrimitive.Root>",
    description: "Extends Root from vaul (closeThreshold, handleOnly, fixed, nested, scrollLockTimeout, onClose, and other drag tuning props).",
  },
]

const triggerCloseProps: PropRow[] = [
  {
    prop: "asChild",
    type: "boolean",
    default: "false",
    description: "Renders the child as the trigger or close element (via Slot), inheriting its behavior.",
  },
  {
    prop: "...props (DrawerTrigger)",
    type: "React.ComponentProps<typeof DrawerPrimitive.Trigger>",
    description: "Extends Trigger from vaul, a native <button>.",
  },
  {
    prop: "...props (DrawerClose)",
    type: "React.ComponentProps<typeof DrawerPrimitive.Close>",
    description: "Extends Close from vaul, a native <button> that closes the drawer on click.",
  },
]

const contentProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof DrawerPrimitive.Content>",
    description: "Extends Content from vaul (Radix Dialog Content: onOpenAutoFocus, onEscapeKeyDown, onPointerDownOutside, forceMount, etc). Renders inside a portal above a DrawerOverlay, with a drag handle bar shown only when direction is bottom.",
  },
]

const layoutProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props (DrawerHeader / DrawerFooter)",
    type: 'React.ComponentProps<"div">',
    description: "Extends a native <div>. DrawerHeader centers its text when direction is top or bottom; DrawerFooter pins itself to the bottom of the content with mt-auto.",
  },
  {
    prop: "...props (DrawerTitle)",
    type: "React.ComponentProps<typeof DrawerPrimitive.Title>",
    description: "Extends Title from vaul, an accessible heading tied to the drawer via aria-labelledby.",
  },
  {
    prop: "...props (DrawerDescription)",
    type: "React.ComponentProps<typeof DrawerPrimitive.Description>",
    description: "Extends Description from vaul, tied to the drawer via aria-describedby.",
  },
]

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
