import { Demo } from "../../Demo"
import { PropsTable, type PropRow } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta } from "./meta"

import Orientation from "./examples/orientation"
import orientationCode from "./examples/orientation.tsx?raw"
import FieldSetExample from "./examples/field-set"
import fieldSetCode from "./examples/field-set.tsx?raw"
import ChoiceCards from "./examples/choice-cards"
import choiceCardsCode from "./examples/choice-cards.tsx?raw"
import WithError from "./examples/with-error"
import withErrorCode from "./examples/with-error.tsx?raw"
import SeparatorExample from "./examples/separator"
import separatorCode from "./examples/separator.tsx?raw"

const fieldProps: PropRow[] = [
  {
    prop: "orientation",
    type: '"vertical" | "horizontal" | "responsive"',
    default: '"vertical"',
    description: "Layout direction of the label/control pair. \"responsive\" stacks vertically and switches to horizontal at the @md container breakpoint.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "Extends the native <div>. Rendered with role=\"group\".",
  },
]

const fieldLabelProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof Label>",
    description: "Extends Label (LabelPrimitive.Root). Wrap a <Field> as a child to turn it into a selectable card that highlights when its control is checked.",
  },
]

const fieldDescriptionProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'p'>",
    description: "Extends the native <p>. Rendered as muted helper text below the control.",
  },
]

const fieldErrorProps: PropRow[] = [
  {
    prop: "errors",
    type: "Array<{ message?: string } | undefined>",
    description: "react-hook-form style error objects. Duplicate messages are deduped; more than one renders as a bullet list.",
  },
  {
    prop: "children",
    type: "React.ReactNode",
    description: "Explicit error content. Takes precedence over errors when provided.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "Extends the native <div>. Rendered with role=\"alert\" and renders nothing when there is no content.",
  },
]

const fieldSetProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'fieldset'>",
    description: "Extends the native <fieldset> element.",
  },
]

const fieldLegendProps: PropRow[] = [
  {
    prop: "variant",
    type: '"legend" | "label"',
    default: '"legend"',
    description: "Controls the text size: \"legend\" for a section heading, \"label\" for a smaller inline caption.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'legend'>",
    description: "Extends the native <legend> element.",
  },
]

const fieldGroupProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "Extends the native <div>. Groups Field/FieldSet children and manages the vertical rhythm between them.",
  },
]

const fieldSeparatorProps: PropRow[] = [
  {
    prop: "children",
    type: "React.ReactNode",
    description: "Optional label rendered on top of the separator line, e.g. \"Or continue with\".",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "Extends the native <div>.",
  },
]

const fieldContentProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "Extends the native <div>. Wraps a label/description pair so they share the flexible column inside a horizontal or responsive Field.",
  },
]

const fieldTitleProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "Extends the native <div>. A non-interactive label style, use inside FieldContent when the Field itself (not a <label>) is the clickable target, e.g. radio or checkbox cards.",
  },
]

export default function FieldDoc() {
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
        <Demo title="Orientation" code={orientationCode}><Orientation /></Demo>
        <Demo title="FieldSet and FieldGroup" code={fieldSetCode}><FieldSetExample /></Demo>
        <Demo title="Choice cards" code={choiceCardsCode}><ChoiceCards /></Demo>
        <Demo title="With error" code={withErrorCode}><WithError /></Demo>
        <Demo title="Separator" code={separatorCode}><SeparatorExample /></Demo>
      </div>

      <section className="space-y-6">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">Field</h3>
          <PropsTable rows={fieldProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">FieldLabel</h3>
          <PropsTable rows={fieldLabelProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">FieldDescription</h3>
          <PropsTable rows={fieldDescriptionProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">FieldError</h3>
          <PropsTable rows={fieldErrorProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">FieldSet</h3>
          <PropsTable rows={fieldSetProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">FieldLegend</h3>
          <PropsTable rows={fieldLegendProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">FieldGroup</h3>
          <PropsTable rows={fieldGroupProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">FieldSeparator</h3>
          <PropsTable rows={fieldSeparatorProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">FieldContent</h3>
          <PropsTable rows={fieldContentProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">FieldTitle</h3>
          <PropsTable rows={fieldTitleProps} />
        </div>
      </section>
    </article>
  )
}
