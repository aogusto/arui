import { Demo } from "../../Demo"
import { PropsTable, type PropRow } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta } from "./meta"

import Default from "./examples/default"
import defaultCode from "./examples/default.tsx?raw"
import Vertical from "./examples/vertical"
import verticalCode from "./examples/vertical.tsx?raw"
import InAList from "./examples/in-a-list"
import inAListCode from "./examples/in-a-list.tsx?raw"
import Decorative from "./examples/decorative"
import decorativeCode from "./examples/decorative.tsx?raw"

const props: PropRow[] = [
  {
    prop: "orientation",
    type: '"horizontal" | "vertical"',
    default: '"horizontal"',
    description: "Direction of the separator line.",
  },
  {
    prop: "decorative",
    type: "boolean",
    default: "true",
    description: "When true, the separator is purely visual and hidden from the accessibility tree. Set to false to expose it as a semantic boundary between content.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof SeparatorPrimitive.Root>",
    description: "Extends Separator.Root from radix-ui.",
  },
]

export default function SeparatorDoc() {
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
        <Demo title="Vertical" code={verticalCode}><Vertical /></Demo>
        <Demo title="In a list" code={inAListCode}><InAList /></Demo>
        <Demo title="Decorative" code={decorativeCode}><Decorative /></Demo>
      </div>

      <section className="space-y-3">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>
        <PropsTable rows={props} />
      </section>
    </article>
  )
}
