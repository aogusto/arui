import { Demo } from "../../Demo"
import { PropsTable, type PropRow } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta } from "./meta"

import Variants from "./examples/variants"
import variantsCode from "./examples/variants.tsx?raw"
import WithIcon from "./examples/with-icon"
import withIconCode from "./examples/with-icon.tsx?raw"
import WithAction from "./examples/with-action"
import withActionCode from "./examples/with-action.tsx?raw"
import MultipleActions from "./examples/multiple-actions"
import multipleActionsCode from "./examples/multiple-actions.tsx?raw"
import Bordered from "./examples/bordered"
import borderedCode from "./examples/bordered.tsx?raw"

const emptyProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn(). The base styles include rounded-lg and border-dashed; add border to actually draw the dashed outline.",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "The remaining native <div> attributes. Centers its children (EmptyHeader and EmptyContent) in a column with generous padding.",
  },
]

const emptyHeaderProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "The remaining native <div> attributes. Stacks EmptyMedia, EmptyTitle, and EmptyDescription centered, capped at max-w-sm.",
  },
]

const emptyMediaProps: PropRow[] = [
  {
    prop: "variant",
    type: '"default" | "icon"',
    default: '"default"',
    description: "default renders the icon or illustration on its own. icon wraps it in a size-10 rounded-lg muted box.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "The remaining native <div> attributes. Typically wraps a single icon or a small illustration.",
  },
]

const emptyTitleProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "The remaining native <div> attributes. Rendered as a <div>, not a heading element, so pick the semantic level yourself if needed.",
  },
]

const emptyDescriptionProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'p'>",
    description: "The remaining native attributes, rendered as muted secondary text below the title. Links inside are underlined and switch to the primary color on hover.",
  },
]

const emptyContentProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "The remaining native <div> attributes. Holds buttons or other actions below the header, capped at max-w-sm.",
  },
]

export default function EmptyDoc() {
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
        <Demo title="Variants" code={variantsCode}><Variants /></Demo>
        <Demo title="With icon" code={withIconCode}><WithIcon /></Demo>
        <Demo title="With action" code={withActionCode}><WithAction /></Demo>
        <Demo title="Multiple actions" code={multipleActionsCode}><MultipleActions /></Demo>
        <Demo title="Bordered" code={borderedCode}><Bordered /></Demo>
      </div>

      <section className="space-y-6">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">Empty</h3>
          <PropsTable rows={emptyProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">EmptyHeader</h3>
          <PropsTable rows={emptyHeaderProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">EmptyMedia</h3>
          <PropsTable rows={emptyMediaProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">EmptyTitle</h3>
          <PropsTable rows={emptyTitleProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">EmptyDescription</h3>
          <PropsTable rows={emptyDescriptionProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">EmptyContent</h3>
          <PropsTable rows={emptyContentProps} />
        </div>
      </section>
    </article>
  )
}
