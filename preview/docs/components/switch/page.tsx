import { Demo } from "../../Demo"
import { PropsTable, type PropRow } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta } from "./meta"

import Default from "./examples/default"
import defaultCode from "./examples/default.tsx?raw"
import Checked from "./examples/checked"
import checkedCode from "./examples/checked.tsx?raw"
import Sizes from "./examples/sizes"
import sizesCode from "./examples/sizes.tsx?raw"
import Disabled from "./examples/disabled"
import disabledCode from "./examples/disabled.tsx?raw"
import WithLabel from "./examples/with-label"
import withLabelCode from "./examples/with-label.tsx?raw"

const props: PropRow[] = [
  {
    prop: "checked",
    type: "boolean",
    description: "Controlled checked state. Use with onCheckedChange.",
  },
  {
    prop: "defaultChecked",
    type: "boolean",
    description: "Initial checked state for uncontrolled usage.",
  },
  {
    prop: "onCheckedChange",
    type: "(checked: boolean) => void",
    description: "Called when the checked state changes.",
  },
  {
    prop: "size",
    type: '"sm" | "default"',
    default: '"default"',
    description: "Size of the switch track and thumb.",
  },
  {
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables the switch and prevents interaction.",
  },
  {
    prop: "required",
    type: "boolean",
    default: "false",
    description: "Marks the switch as required in a form.",
  },
  {
    prop: "name",
    type: "string",
    description: "Name submitted with the form data.",
  },
  {
    prop: "value",
    type: "string",
    default: '"on"',
    description: "Value submitted with the form data when checked.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof SwitchPrimitive.Root>",
    description: "Extends Switch.Root from radix-ui.",
  },
]

export default function SwitchDoc() {
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
        <Demo title="Checked" code={checkedCode}><Checked /></Demo>
        <Demo title="Sizes" code={sizesCode}><Sizes /></Demo>
        <Demo title="Disabled" code={disabledCode}><Disabled /></Demo>
        <Demo title="With label" code={withLabelCode}><WithLabel /></Demo>
      </div>

      <section className="space-y-3">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>
        <PropsTable rows={props} />
      </section>
    </article>
  )
}
