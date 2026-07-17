import { Demo } from "../../Demo"
import { PropsTable, type PropRow } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta } from "./meta"

import Default from "./examples/default"
import defaultCode from "./examples/default.tsx?raw"
import Variants from "./examples/variants"
import variantsCode from "./examples/variants.tsx?raw"
import Sizes from "./examples/sizes"
import sizesCode from "./examples/sizes.tsx?raw"
import Disabled from "./examples/disabled"
import disabledCode from "./examples/disabled.tsx?raw"
import WithText from "./examples/with-text"
import withTextCode from "./examples/with-text.tsx?raw"
import Toolbar from "./examples/toolbar"
import toolbarCode from "./examples/toolbar.tsx?raw"

const props: PropRow[] = [
  {
    prop: "variant",
    type: '"default" | "outline"',
    default: '"default"',
    description: "Visual style of the toggle.",
  },
  {
    prop: "size",
    type: '"default" | "sm" | "lg"',
    default: '"default"',
    description: "Size of the toggle.",
  },
  {
    prop: "pressed",
    type: "boolean",
    description: "Controlled pressed state. Use with onPressedChange.",
  },
  {
    prop: "defaultPressed",
    type: "boolean",
    default: "false",
    description: "Initial pressed state for uncontrolled usage.",
  },
  {
    prop: "onPressedChange",
    type: "(pressed: boolean) => void",
    description: "Called when the pressed state changes.",
  },
  {
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables the toggle and prevents interaction.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof TogglePrimitive.Root>",
    description: "Extends Toggle.Root from radix-ui.",
  },
]

export default function ToggleDoc() {
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
        <Demo title="Variants" code={variantsCode}><Variants /></Demo>
        <Demo title="Sizes" code={sizesCode}><Sizes /></Demo>
        <Demo title="Disabled" code={disabledCode}><Disabled /></Demo>
        <Demo title="With text" code={withTextCode}><WithText /></Demo>
        <Demo title="Toolbar" code={toolbarCode}><Toolbar /></Demo>
      </div>

      <section className="space-y-3">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>
        <PropsTable rows={props} />
      </section>
    </article>
  )
}
