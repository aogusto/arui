import { Demo } from "../../Demo"
import { PropsTable, type PropRow } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta } from "./meta"

import Default from "./examples/default"
import defaultCode from "./examples/default.tsx?raw"
import Multiple from "./examples/multiple"
import multipleCode from "./examples/multiple.tsx?raw"
import NotCollapsible from "./examples/not-collapsible"
import notCollapsibleCode from "./examples/not-collapsible.tsx?raw"
import DisabledItem from "./examples/disabled-item"
import disabledItemCode from "./examples/disabled-item.tsx?raw"

const accordionProps: PropRow[] = [
  {
    prop: "type",
    type: '"single" | "multiple"',
    description: "Whether a single item can be open at a time, or several at once.",
  },
  {
    prop: "collapsible",
    type: "boolean",
    default: "false",
    description: "When type is single, allows the open item to be closed again by clicking it. Has no effect when type is multiple.",
  },
  {
    prop: "value",
    type: "string | string[]",
    description: "The controlled open item(s): a string for type single, an array of strings for type multiple.",
  },
  {
    prop: "defaultValue",
    type: "string | string[]",
    description: "The open item(s) when the accordion is uncontrolled.",
  },
  {
    prop: "onValueChange",
    type: "(value: string | string[]) => void",
    description: "Called when the open item(s) change.",
  },
  {
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables the whole accordion, including every item.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof AccordionPrimitive.Root>",
    description: "Extends Radix's Accordion.Root. Also accepts orientation and dir.",
  },
]

const accordionItemProps: PropRow[] = [
  {
    prop: "value",
    type: "string",
    description: "Unique identifier for the item. Required, and used to control which item is open.",
  },
  {
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables this item only.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof AccordionPrimitive.Item>",
    description: "Extends Radix's Accordion.Item. Every item but the last gets a bottom border.",
  },
]

const accordionTriggerProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof AccordionPrimitive.Trigger>",
    description: "Extends Radix's Accordion.Trigger, wrapped in the required Accordion.Header. Renders a chevron icon that flips based on the open state.",
  },
]

const accordionContentProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, applied to the inner content wrapper (not the animated root) and merged via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof AccordionPrimitive.Content>",
    description: "Extends Radix's Accordion.Content. Animates open and closed based on its measured height.",
  },
]

export default function AccordionDoc() {
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
        <Demo title="Single, collapsible" code={defaultCode}><Default /></Demo>
        <Demo title="Multiple items open" code={multipleCode}><Multiple /></Demo>
        <Demo title="Single, not collapsible" code={notCollapsibleCode}><NotCollapsible /></Demo>
        <Demo title="Disabled item" code={disabledItemCode}><DisabledItem /></Demo>
      </div>

      <section className="space-y-6">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">Accordion</h3>
          <PropsTable rows={accordionProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">AccordionItem</h3>
          <PropsTable rows={accordionItemProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">AccordionTrigger</h3>
          <PropsTable rows={accordionTriggerProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">AccordionContent</h3>
          <PropsTable rows={accordionContentProps} />
        </div>
      </section>
    </article>
  )
}
