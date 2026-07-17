import { Demo } from "../../Demo"
import { PropsTable, type PropRow } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta } from "./meta"

import Default from "./examples/default"
import defaultCode from "./examples/default.tsx?raw"
import Animated from "./examples/animated"
import animatedCode from "./examples/animated.tsx?raw"
import List from "./examples/list"
import listCode from "./examples/list.tsx?raw"
import Controlled from "./examples/controlled"
import controlledCode from "./examples/controlled.tsx?raw"
import Disabled from "./examples/disabled"
import disabledCode from "./examples/disabled.tsx?raw"

const collapsibleProps: PropRow[] = [
  {
    prop: "open",
    type: "boolean",
    description: "The controlled open state of the section.",
  },
  {
    prop: "defaultOpen",
    type: "boolean",
    default: "false",
    description: "The open state when the collapsible is uncontrolled.",
  },
  {
    prop: "onOpenChange",
    type: "(open: boolean) => void",
    description: "Called when the open state changes, either from the trigger or from an external open update.",
  },
  {
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Prevents the user from toggling the collapsible from its trigger.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes applied to the root element. Collapsible has no default styles of its own to merge with, so this fully controls the wrapper's appearance.",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof CollapsiblePrimitive.Root>",
    description: "Extends Radix's Collapsible.Root, rendered as a plain div.",
  },
]

const collapsibleTriggerProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes applied to the trigger. CollapsibleTrigger has no default styles of its own, so it renders as an unstyled button until you add classes, or use asChild to render your own trigger element (e.g. Button).",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>",
    description: "Extends Radix's Collapsible.Trigger. Toggles the open state on click, and exposes aria-expanded and data-state (\"open\" | \"closed\") for styling.",
  },
]

const collapsibleContentProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes applied to the content. CollapsibleContent has no default styles of its own, so add overflow-hidden plus the data-open: / data-closed: animation utilities here to animate it open and closed.",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>",
    description: "Extends Radix's Collapsible.Content. Only mounted while open (unless forceMount is set), and exposes the --radix-collapsible-content-height / --radix-collapsible-content-width CSS variables for height animations.",
  },
]

export default function CollapsibleDoc() {
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
        <Demo title="Animated" description="Add overflow-hidden and the data-open: / data-closed: variants to animate the content's height." code={animatedCode}><Animated /></Demo>
        <Demo title="List of independent items" description="Each Collapsible manages its own state, so any number of them can be open together." code={listCode}><List /></Demo>
        <Demo title="Controlled" code={controlledCode}><Controlled /></Demo>
        <Demo title="Disabled" code={disabledCode}><Disabled /></Demo>
      </div>

      <section className="space-y-6">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">Collapsible</h3>
          <PropsTable rows={collapsibleProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">CollapsibleTrigger</h3>
          <PropsTable rows={collapsibleTriggerProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">CollapsibleContent</h3>
          <PropsTable rows={collapsibleContentProps} />
        </div>
      </section>
    </article>
  )
}
