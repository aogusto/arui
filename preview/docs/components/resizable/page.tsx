import { Demo } from "../../Demo"
import { PropsTable, type PropRow } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta } from "./meta"

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

const groupProps: PropRow[] = [
  {
    prop: "orientation",
    type: '"horizontal" | "vertical"',
    default: '"horizontal"',
    description: "Layout direction of the group. Horizontal arranges panels side by side; vertical stacks them.",
  },
  {
    prop: "defaultLayout",
    type: "Record<string, number>",
    description: "Initial size (0 to 100) for each panel by id. Useful for restoring a layout persisted between sessions.",
  },
  {
    prop: "disableCursor",
    type: "boolean",
    default: "false",
    description: "Disables the custom drag cursor the library applies to the page while a panel is being resized.",
  },
  {
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables resizing for every panel and handle in the group.",
  },
  {
    prop: "onLayoutChange",
    type: "(layout: Record<string, number>) => void",
    description: "Called continuously while the layout is changing, e.g. on every pointer move during a drag.",
  },
  {
    prop: "onLayoutChanged",
    type: "(layout: Record<string, number>, meta: { isUserInteraction: boolean }) => void",
    description: "Called once after a layout change settles. Recommended over onLayoutChange when persisting layouts.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ResizablePrimitive.Group>",
    description: "Extends react-resizable-panels' Group. Common props: id, style, resizeTargetMinimumSize.",
  },
]

const panelProps: PropRow[] = [
  {
    prop: "defaultSize",
    type: "number | string",
    description: "Initial size of the panel. Plain numbers are pixels; strings without a unit are a percentage (e.g. \"50\" is 50%).",
  },
  {
    prop: "minSize",
    type: "number | string",
    description: "Minimum size of the panel, using the same number/percentage/unit rules as defaultSize.",
  },
  {
    prop: "maxSize",
    type: "number | string",
    description: "Maximum size of the panel, using the same number/percentage/unit rules as defaultSize.",
  },
  {
    prop: "collapsible",
    type: "boolean",
    default: "false",
    description: "Lets the panel collapse to its collapsedSize once dragged below minSize.",
  },
  {
    prop: "collapsedSize",
    type: "number | string",
    default: '"0%"',
    description: "Size the panel snaps to when collapsed.",
  },
  {
    prop: "onResize",
    type: "(size: { asPercentage: number; inPixels: number }, id: string | number | undefined, prevSize) => void",
    description: "Called when the panel's size changes, with the new size in both percentage and pixels.",
  },
  {
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Prevents this panel from being resized, either directly or indirectly by a neighboring panel.",
  },
  {
    prop: "id",
    type: "string | number",
    description: "Uniquely identifies the panel within its group. Falls back to a generated id when not provided.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes for the panel's content. Passed straight through; the panel has no default styles to merge with.",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ResizablePrimitive.Panel>",
    description: "Extends react-resizable-panels' Panel. Common props: groupResizeBehavior, panelRef, style.",
  },
]

const handleProps: PropRow[] = [
  {
    prop: "withHandle",
    type: "boolean",
    default: "false",
    description: "Shows a small grip indicator centered on the handle.",
  },
  {
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Prevents this handle from resizing its neighboring panels directly (they may still change size indirectly).",
  },
  {
    prop: "disableDoubleClick",
    type: "boolean",
    default: "false",
    description: "Disables the default behavior of resetting neighboring panels to their default size on double click.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ResizablePrimitive.Separator>",
    description: "Extends react-resizable-panels' Separator. Renders role=\"separator\" with the required ARIA attributes.",
  },
]

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
