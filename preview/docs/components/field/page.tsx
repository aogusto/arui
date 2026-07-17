import { Demo } from "../../Demo"
import { PropsTable } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import {
  meta,
  fieldProps,
  fieldLabelProps,
  fieldDescriptionProps,
  fieldErrorProps,
  fieldSetProps,
  fieldLegendProps,
  fieldGroupProps,
  fieldSeparatorProps,
  fieldContentProps,
  fieldTitleProps,
} from "./meta"

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
