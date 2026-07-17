import { Demo } from "../../Demo"
import { PropsTable, type PropRow } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta } from "./meta"

import Default from "./examples/default"
import defaultCode from "./examples/default.tsx?raw"
import WithLabel from "./examples/with-label"
import withLabelCode from "./examples/with-label.tsx?raw"
import Types from "./examples/types"
import typesCode from "./examples/types.tsx?raw"
import Disabled from "./examples/disabled"
import disabledCode from "./examples/disabled.tsx?raw"
import Invalid from "./examples/invalid"
import invalidCode from "./examples/invalid.tsx?raw"

const props: PropRow[] = [
  {
    prop: "type",
    type: "React.HTMLInputTypeAttribute",
    default: '"text"',
    description: "Native input type (text, email, password, number, search, tel, url, date, file, etc.).",
  },
  {
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables the input and applies the disabled styles.",
  },
  {
    prop: "aria-invalid",
    type: "boolean | 'true' | 'false'",
    description: "Marks the input as invalid, switching the border and focus ring to the destructive color.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'input'>",
    description: "The remaining native <input> attributes (value, placeholder, onChange, etc.).",
  },
]

export default function InputDoc() {
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
        <Demo title="With label" code={withLabelCode}><WithLabel /></Demo>
        <Demo title="Types" code={typesCode}><Types /></Demo>
        <Demo title="Disabled" code={disabledCode}><Disabled /></Demo>
        <Demo title="Invalid" code={invalidCode}><Invalid /></Demo>
      </div>

      <section className="space-y-3">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>
        <PropsTable rows={props} />
      </section>
    </article>
  )
}
