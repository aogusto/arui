import { Demo } from "../../Demo"
import { PropsTable, type PropRow } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta } from "./meta"

import Default from "./examples/default"
import defaultCode from "./examples/default.tsx?raw"
import Align from "./examples/align"
import alignCode from "./examples/align.tsx?raw"
import OpenDelay from "./examples/open-delay"
import openDelayCode from "./examples/open-delay.tsx?raw"
import TeamMentions from "./examples/team-mentions"
import teamMentionsCode from "./examples/team-mentions.tsx?raw"

const hoverCardProps: PropRow[] = [
  {
    prop: "openDelay",
    type: "number",
    default: "700",
    description: "Delay in milliseconds before the content opens after the trigger is hovered.",
  },
  {
    prop: "closeDelay",
    type: "number",
    default: "300",
    description: "Delay in milliseconds before the content closes after the pointer leaves the trigger or content.",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof HoverCardPrimitive.Root>",
    description: "Extends Radix's HoverCard.Root. Common props: open, defaultOpen, onOpenChange. Uncontrolled by default.",
  },
]

const hoverCardTriggerProps: PropRow[] = [
  {
    prop: "asChild",
    type: "boolean",
    default: "false",
    description: "Renders the child as the trigger element instead of the default <a>.",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof HoverCardPrimitive.Trigger>",
    description: "Extends Radix's HoverCard.Trigger, which renders as an <a> by default, so href, target, etc. work natively.",
  },
]

const hoverCardContentProps: PropRow[] = [
  {
    prop: "align",
    type: '"start" | "center" | "end"',
    default: '"center"',
    description: "Alignment of the content relative to the trigger.",
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
    type: "React.ComponentProps<typeof HoverCardPrimitive.Content>",
    description: "Extends Radix's HoverCard.Content. Rendered inside a portal with a glass (regular material) surface, fixed at w-64, and animates in and out based on the side it opens on.",
  },
]

export default function HoverCardDoc() {
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
        <Demo title="Profile card" code={defaultCode}><Default /></Demo>
        <Demo title="Align" code={alignCode}><Align /></Demo>
        <Demo title="Open and close delay" code={openDelayCode}><OpenDelay /></Demo>
        <Demo title="Inline mentions" code={teamMentionsCode}><TeamMentions /></Demo>
      </div>

      <section className="space-y-6">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">HoverCard</h3>
          <PropsTable rows={hoverCardProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">HoverCardTrigger</h3>
          <PropsTable rows={hoverCardTriggerProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">HoverCardContent</h3>
          <PropsTable rows={hoverCardContentProps} />
        </div>
      </section>
    </article>
  )
}
