import { Demo } from "../../Demo"
import { PropsTable, type PropRow } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta } from "./meta"

import Default from "./examples/default"
import defaultCode from "./examples/default.tsx?raw"
import WithDescription from "./examples/with-description"
import withDescriptionCode from "./examples/with-description.tsx?raw"
import Horizontal from "./examples/horizontal"
import horizontalCode from "./examples/horizontal.tsx?raw"
import Disabled from "./examples/disabled"
import disabledCode from "./examples/disabled.tsx?raw"
import Invalid from "./examples/invalid"
import invalidCode from "./examples/invalid.tsx?raw"

const radioGroupProps: PropRow[] = [
  {
    prop: "value",
    type: "string | null",
    description: "The controlled selected value. Pair with onValueChange.",
  },
  {
    prop: "defaultValue",
    type: "string",
    description: "The value initially selected, for an uncontrolled group.",
  },
  {
    prop: "onValueChange",
    type: "(value: string) => void",
    description: "Called when the selected item changes.",
  },
  {
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables every item in the group.",
  },
  {
    prop: "name",
    type: "string",
    description: "Name submitted with the enclosing form.",
  },
  {
    prop: "required",
    type: "boolean",
    default: "false",
    description: "Marks the group as required in an HTML form.",
  },
  {
    prop: "orientation",
    type: '"horizontal" | "vertical"',
    description: "Orientation used for arrow key navigation between items.",
  },
  {
    prop: "loop",
    type: "boolean",
    default: "false",
    description: "Whether arrow key navigation loops from the last item back to the first.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof RadioGroupPrimitive.Root>",
    description: "Extends RadioGroup.Root from radix-ui, so the remaining native <div> attributes are all supported.",
  },
]

const radioGroupItemProps: PropRow[] = [
  {
    prop: "value",
    type: "string",
    description: "The value submitted when this item is selected. Required.",
  },
  {
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables this single item, independently of the group.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof RadioGroupPrimitive.Item>",
    description: "Extends RadioGroup.Item from radix-ui, so the remaining native <button> attributes (id, aria-invalid, required, etc.) are all supported.",
  },
]

export default function RadioGroupDoc() {
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
        <Demo title="With description" code={withDescriptionCode}><WithDescription /></Demo>
        <Demo title="Horizontal" code={horizontalCode}><Horizontal /></Demo>
        <Demo title="Disabled item" code={disabledCode}><Disabled /></Demo>
        <Demo title="Invalid" code={invalidCode}><Invalid /></Demo>
      </div>

      <section className="space-y-8">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">RadioGroup</h3>
          <PropsTable rows={radioGroupProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">RadioGroupItem</h3>
          <PropsTable rows={radioGroupItemProps} />
        </div>
      </section>
    </article>
  )
}
