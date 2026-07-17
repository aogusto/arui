import { Demo } from "../../Demo"
import { PropsTable, type PropRow } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta } from "./meta"

import Default from "./examples/default"
import defaultCode from "./examples/default.tsx?raw"
import Sides from "./examples/sides"
import sidesCode from "./examples/sides.tsx?raw"
import WithIcon from "./examples/with-icon"
import withIconCode from "./examples/with-icon.tsx?raw"
import DelayDuration from "./examples/delay-duration"
import delayDurationCode from "./examples/delay-duration.tsx?raw"

const providerProps: PropRow[] = [
  {
    prop: "delayDuration",
    type: "number",
    default: "0",
    description: "Time in milliseconds the trigger must be hovered or focused before the tooltip opens.",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof TooltipPrimitive.Provider>",
    description: "Extends Provider from radix-ui (skipDelayDuration, disableHoverableContent, etc). Wrap it once near the root to share timing across every tooltip.",
  },
]

const tooltipProps: PropRow[] = [
  {
    prop: "...props",
    type: "React.ComponentProps<typeof TooltipPrimitive.Root>",
    description: "Extends Root from radix-ui (open, defaultOpen, onOpenChange, delayDuration). Controls the open state of a single tooltip instance.",
  },
]

const triggerProps: PropRow[] = [
  {
    prop: "asChild",
    type: "boolean",
    default: "false",
    description: "Merges its props onto the child element instead of rendering its own node.",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof TooltipPrimitive.Trigger>",
    description: "Extends Trigger from radix-ui.",
  },
]

const contentProps: PropRow[] = [
  {
    prop: "sideOffset",
    type: "number",
    default: "0",
    description: "Distance in pixels between the trigger and the tooltip.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof TooltipPrimitive.Content>",
    description: "Extends Content from radix-ui (side, align, alignOffset, avoidCollisions, etc). Rendered in a Portal on top of a glass surface.",
  },
]

export default function TooltipDoc() {
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
        <Demo title="Sides" code={sidesCode}><Sides /></Demo>
        <Demo title="With icon" code={withIconCode}><WithIcon /></Demo>
        <Demo title="Delay duration" code={delayDurationCode}><DelayDuration /></Demo>
      </div>

      <section className="space-y-6">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">TooltipProvider</h3>
          <PropsTable rows={providerProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">Tooltip</h3>
          <PropsTable rows={tooltipProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">TooltipTrigger</h3>
          <PropsTable rows={triggerProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">TooltipContent</h3>
          <PropsTable rows={contentProps} />
        </div>
      </section>
    </article>
  )
}
