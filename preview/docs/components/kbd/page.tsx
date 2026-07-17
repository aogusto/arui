import { Demo } from "../../Demo"
import { PropsTable, type PropRow } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta } from "./meta"

import Default from "./examples/default"
import defaultCode from "./examples/default.tsx?raw"
import Group from "./examples/group"
import groupCode from "./examples/group.tsx?raw"
import WithIcon from "./examples/with-icon"
import withIconCode from "./examples/with-icon.tsx?raw"
import InText from "./examples/in-text"
import inTextCode from "./examples/in-text.tsx?raw"
import InTooltip from "./examples/in-tooltip"
import inTooltipCode from "./examples/in-tooltip.tsx?raw"

const kbdProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"kbd">',
    description: "The remaining native <kbd> attributes.",
  },
]

const kbdGroupProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"div">',
    description: "The remaining native <div> attributes, spread onto the rendered <kbd> element that wraps the group.",
  },
]

export default function KbdDoc() {
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
        <Demo title="Group" code={groupCode}><Group /></Demo>
        <Demo title="With icon" code={withIconCode}><WithIcon /></Demo>
        <Demo title="In text" code={inTextCode}><InText /></Demo>
        <Demo title="In a tooltip" code={inTooltipCode}><InTooltip /></Demo>
      </div>

      <section className="space-y-6">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">Kbd</h3>
          <PropsTable rows={kbdProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">KbdGroup</h3>
          <PropsTable rows={kbdGroupProps} />
        </div>
      </section>
    </article>
  )
}
