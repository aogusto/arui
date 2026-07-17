import { Demo } from "../../Demo"
import { PropsTable } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import {
  meta,
  formProps,
  formFieldProps,
  formItemProps,
  formLabelProps,
  formControlProps,
  formDescriptionProps,
  formMessageProps,
} from "./meta"

import Basic from "./examples/basic"
import basicCode from "./examples/basic.tsx?raw"
import MultipleFields from "./examples/multiple-fields"
import multipleFieldsCode from "./examples/multiple-fields.tsx?raw"
import WithDescription from "./examples/with-description"
import withDescriptionCode from "./examples/with-description.tsx?raw"
import WithCheckbox from "./examples/with-checkbox"
import withCheckboxCode from "./examples/with-checkbox.tsx?raw"
import WithSelect from "./examples/with-select"
import withSelectCode from "./examples/with-select.tsx?raw"

export default function FormDoc() {
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
        <Demo title="Basic" code={basicCode}><Basic /></Demo>
        <Demo title="Multiple fields" code={multipleFieldsCode}><MultipleFields /></Demo>
        <Demo title="With description" code={withDescriptionCode}><WithDescription /></Demo>
        <Demo title="With checkbox" code={withCheckboxCode}><WithCheckbox /></Demo>
        <Demo title="With select" code={withSelectCode}><WithSelect /></Demo>
      </div>

      <section className="space-y-6">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">Form</h3>
          <PropsTable rows={formProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">FormField</h3>
          <PropsTable rows={formFieldProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">FormItem</h3>
          <PropsTable rows={formItemProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">FormLabel</h3>
          <PropsTable rows={formLabelProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">FormControl</h3>
          <PropsTable rows={formControlProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">FormDescription</h3>
          <PropsTable rows={formDescriptionProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">FormMessage</h3>
          <PropsTable rows={formMessageProps} />
        </div>

        <p className="text-subhead text-label-secondary">
          <code className="font-mono text-caption-1">useFormField()</code> is the hook that powers FormLabel, FormControl,
          FormDescription and FormMessage. Call it inside a FormField's render prop (or any descendant of FormItem) to build
          a custom field; it returns <code className="font-mono text-caption-1">{"{ id, name, formItemId, formDescriptionId, formMessageId, ...fieldState }"}</code>.
        </p>
      </section>
    </article>
  )
}
