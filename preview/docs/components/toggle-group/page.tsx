import { Demo } from "../../Demo"
import { PropsTable, type PropRow } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta } from "./meta"

import Single from "./examples/single"
import singleCode from "./examples/single.tsx?raw"
import Multiple from "./examples/multiple"
import multipleCode from "./examples/multiple.tsx?raw"
import Outline from "./examples/outline"
import outlineCode from "./examples/outline.tsx?raw"
import Sizes from "./examples/sizes"
import sizesCode from "./examples/sizes.tsx?raw"
import Spacing from "./examples/spacing"
import spacingCode from "./examples/spacing.tsx?raw"
import Disabled from "./examples/disabled"
import disabledCode from "./examples/disabled.tsx?raw"

const toggleGroupProps: PropRow[] = [
  {
    prop: "type",
    type: '"single" | "multiple"',
    description: "Selection behavior. \"single\" allows only one pressed item at a time, \"multiple\" allows any number.",
  },
  {
    prop: "value",
    type: "string | string[]",
    description: "Controlled pressed value(s): a string for type=\"single\", a string array for type=\"multiple\".",
  },
  {
    prop: "defaultValue",
    type: "string | string[]",
    description: "Initial pressed value(s) when uncontrolled.",
  },
  {
    prop: "onValueChange",
    type: "(value: string | string[]) => void",
    description: "Fires when the pressed value(s) change.",
  },
  {
    prop: "variant",
    type: '"default" | "outline"',
    default: '"default"',
    description: "Visual style applied to every item in the group. Can be overridden per item.",
  },
  {
    prop: "size",
    type: '"default" | "sm" | "lg"',
    default: '"default"',
    description: "Size applied to every item in the group. Can be overridden per item.",
  },
  {
    prop: "spacing",
    type: "number",
    default: "0",
    description: "Gap in pixels between items. At 0, items are visually merged with shared borders and only the outer corners rounded.",
  },
  {
    prop: "orientation",
    type: '"horizontal" | "vertical"',
    default: '"horizontal"',
    description: "Layout direction of the items.",
  },
  {
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables every item in the group.",
  },
  {
    prop: "rovingFocus",
    type: "boolean",
    default: "true",
    description: "Whether arrow keys move focus between items (roving tabindex).",
  },
  {
    prop: "loop",
    type: "boolean",
    default: "true",
    description: "Whether arrow key navigation loops from the last item back to the first.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ToggleGroupPrimitive.Root>",
    description: "Extends ToggleGroup.Root from radix-ui.",
  },
]

const toggleGroupItemProps: PropRow[] = [
  {
    prop: "value",
    type: "string",
    description: "Unique value identifying this item within the group.",
  },
  {
    prop: "variant",
    type: '"default" | "outline"',
    default: "inherited from ToggleGroup",
    description: "Overrides the group's variant for this item only.",
  },
  {
    prop: "size",
    type: '"default" | "sm" | "lg"',
    default: "inherited from ToggleGroup",
    description: "Overrides the group's size for this item only.",
  },
  {
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables this item.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ToggleGroupPrimitive.Item>",
    description: "Extends ToggleGroup.Item from radix-ui.",
  },
]

export default function ToggleGroupDoc() {
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
        <Demo title="Single selection" code={singleCode}><Single /></Demo>
        <Demo title="Multiple selection" code={multipleCode}><Multiple /></Demo>
        <Demo title="Outline variant" code={outlineCode}><Outline /></Demo>
        <Demo title="Sizes" code={sizesCode}><Sizes /></Demo>
        <Demo title="Spacing" code={spacingCode}><Spacing /></Demo>
        <Demo title="Disabled" code={disabledCode}><Disabled /></Demo>
      </div>

      <section className="space-y-6">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ToggleGroup</h3>
          <PropsTable rows={toggleGroupProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ToggleGroupItem</h3>
          <PropsTable rows={toggleGroupItemProps} />
        </div>
      </section>
    </article>
  )
}
