import { Demo } from "../../Demo"
import { PropsTable, type PropRow } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta } from "./meta"

import Variants from "./examples/variants"
import variantsCode from "./examples/variants.tsx?raw"
import WithoutIcon from "./examples/without-icon"
import withoutIconCode from "./examples/without-icon.tsx?raw"
import DescriptionOnly from "./examples/description-only"
import descriptionOnlyCode from "./examples/description-only.tsx?raw"
import WithLink from "./examples/with-link"
import withLinkCode from "./examples/with-link.tsx?raw"
import WithAction from "./examples/with-action"
import withActionCode from "./examples/with-action.tsx?raw"

const alertProps: PropRow[] = [
  {
    prop: "variant",
    type: '"default" | "destructive"',
    default: '"default"',
    description: "Visual style and intent of the alert.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"div">',
    description: 'The remaining native <div> attributes. Rendered with role="alert". Place an icon as the first child to switch the layout to two columns.',
  },
]

const titleProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"div">',
    description: "The remaining native <div> attributes. Optional: omit it when the alert only needs a description.",
  },
]

const descriptionProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"div">',
    description: "The remaining native <div> attributes. Supports multiple <p> children and links, styled and spaced automatically.",
  },
]

const actionProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"div">',
    description: "The remaining native <div> attributes. Positions its content (typically a Button) in the top right corner of the alert.",
  },
]

export default function AlertDoc() {
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
        <Demo title="Without icon" code={withoutIconCode}><WithoutIcon /></Demo>
        <Demo title="Description only" description="AlertTitle is optional, an icon plus a description is enough for lighter notices." code={descriptionOnlyCode}><DescriptionOnly /></Demo>
        <Demo title="Description with link" code={withLinkCode}><WithLink /></Demo>
        <Demo title="With action" description="AlertAction places a trailing control, such as a Button, in the top right corner." code={withActionCode}><WithAction /></Demo>
      </div>

      <section className="space-y-6">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">Alert</h3>
          <PropsTable rows={alertProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">AlertTitle</h3>
          <PropsTable rows={titleProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">AlertDescription</h3>
          <PropsTable rows={descriptionProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">AlertAction</h3>
          <PropsTable rows={actionProps} />
        </div>
      </section>
    </article>
  )
}
