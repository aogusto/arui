import { Demo } from "../../Demo"
import { PropsTable, type PropRow } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta } from "./meta"

import Default from "./examples/default"
import defaultCode from "./examples/default.tsx?raw"
import Horizontal from "./examples/horizontal"
import horizontalCode from "./examples/horizontal.tsx?raw"
import Notifications from "./examples/notifications"
import notificationsCode from "./examples/notifications.tsx?raw"
import InCard from "./examples/in-card"
import inCardCode from "./examples/in-card.tsx?raw"

const scrollAreaProps: PropRow[] = [
  {
    prop: "type",
    type: '"auto" | "always" | "scroll" | "hover"',
    default: '"hover"',
    description: "When scrollbars are shown. hover shows them while the pointer is over the area, scroll while scrolling, always keeps them visible, and auto shows them only when the content overflows.",
  },
  {
    prop: "scrollHideDelay",
    type: "number",
    default: "600",
    description: "Milliseconds to wait before hiding the scrollbars after the pointer leaves or scrolling stops. Only relevant for the hover and scroll types.",
  },
  {
    prop: "dir",
    type: '"ltr" | "rtl"',
    description: "Reading direction used to resolve scrolling behavior. Defaults to the document direction.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn(). Set a fixed height and width here (e.g. h-72 w-48) to define the scrollable viewport.",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ScrollAreaPrimitive.Root>",
    description: "Extends ScrollArea.Root from radix-ui.",
  },
]

const scrollBarProps: PropRow[] = [
  {
    prop: "orientation",
    type: '"vertical" | "horizontal"',
    default: '"vertical"',
    description: "Axis the scrollbar controls. ScrollArea already renders a vertical one; add a ScrollBar with orientation=\"horizontal\" alongside your content for horizontal scrolling.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>",
    description: "Extends ScrollArea.Scrollbar from radix-ui.",
  },
]

export default function ScrollAreaDoc() {
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
        <Demo title="Default" description="A fixed-height list, with a vertical scrollbar that appears on hover." code={defaultCode}><Default /></Demo>
        <Demo title="Horizontal" description="Add a ScrollBar with horizontal orientation for a horizontally scrolling gallery." code={horizontalCode}><Horizontal /></Demo>
        <Demo title="Notifications list" description="Composed with Item to scroll a list of rows." code={notificationsCode}><Notifications /></Demo>
        <Demo title="Inside a card" description="Nested in a Card's content, scrolling an activity feed." code={inCardCode}><InCard /></Demo>
      </div>

      <section className="space-y-8">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ScrollArea</h3>
          <PropsTable rows={scrollAreaProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ScrollBar</h3>
          <PropsTable rows={scrollBarProps} />
        </div>
      </section>
    </article>
  )
}
