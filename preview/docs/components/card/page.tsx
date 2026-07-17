import { Demo } from "../../Demo"
import { PropsTable, type PropRow } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta } from "./meta"

import Default from "./examples/default"
import defaultCode from "./examples/default.tsx?raw"
import Sizes from "./examples/sizes"
import sizesCode from "./examples/sizes.tsx?raw"
import WithAction from "./examples/with-action"
import withActionCode from "./examples/with-action.tsx?raw"
import WithImage from "./examples/with-image"
import withImageCode from "./examples/with-image.tsx?raw"
import WithDividers from "./examples/with-dividers"
import withDividersCode from "./examples/with-dividers.tsx?raw"

const cardProps: PropRow[] = [
  {
    prop: "size",
    type: '"default" | "sm"',
    default: '"default"',
    description: "Density of the card. size=\"sm\" reduces the gap between sections and the vertical padding in the header, content, and footer.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "The remaining native <div> attributes. If the first child is an <img>, it renders edge to edge with rounded top corners (and rounded bottom corners if the last child is an <img>).",
  },
]

const cardHeaderProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn(). Add border-b to draw a divider below the header; its bottom padding grows to match.",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "The remaining native <div> attributes. Stacks CardTitle and CardDescription, and reserves a right-hand column for a CardAction when one is present.",
  },
]

const cardTitleProps: PropRow[] = [
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

const cardDescriptionProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "The remaining native <div> attributes, rendered as muted secondary text below the title.",
  },
]

const cardActionProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "The remaining native <div> attributes. Place inside CardHeader, alongside CardTitle and CardDescription, to pin an action (icon button, menu trigger) to the top right.",
  },
]

const cardContentProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "The remaining native <div> attributes. Horizontal padding matches the header and footer, and scales down with size=\"sm\" on the parent Card.",
  },
]

const cardFooterProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn(). Add border-t to draw a divider above the footer; its top padding grows to match.",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "The remaining native <div> attributes. Lays out its children in a row with items centered.",
  },
]

export default function CardDoc() {
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
        <Demo title="Sizes" code={sizesCode}><Sizes /></Demo>
        <Demo title="With action" code={withActionCode}><WithAction /></Demo>
        <Demo title="With image" code={withImageCode}><WithImage /></Demo>
        <Demo title="With dividers" code={withDividersCode}><WithDividers /></Demo>
      </div>

      <section className="space-y-6">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">Card</h3>
          <PropsTable rows={cardProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">CardHeader</h3>
          <PropsTable rows={cardHeaderProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">CardTitle</h3>
          <PropsTable rows={cardTitleProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">CardDescription</h3>
          <PropsTable rows={cardDescriptionProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">CardAction</h3>
          <PropsTable rows={cardActionProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">CardContent</h3>
          <PropsTable rows={cardContentProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">CardFooter</h3>
          <PropsTable rows={cardFooterProps} />
        </div>
      </section>
    </article>
  )
}
