import { Demo } from "../../Demo"
import { PropsTable, type PropRow } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta } from "./meta"

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

const formProps: PropRow[] = [
  {
    prop: "...props",
    type: "UseFormReturn<TFieldValues>",
    description: "Form re-exports react-hook-form's FormProvider as is. Spread the object returned by useForm() onto it (<Form {...form}>) so nested FormField and useFormField calls can read the form context.",
  },
]

const formFieldProps: PropRow[] = [
  {
    prop: "control",
    type: "Control<TFieldValues>",
    description: "The control object returned by useForm().",
  },
  {
    prop: "name",
    type: "FieldPath<TFieldValues>",
    description: "The field name registered with the form. Also used to derive the ids shared by its label, description and message.",
  },
  {
    prop: "render",
    type: "({ field, fieldState, formState }) => React.ReactElement",
    description: "Render prop that receives the field bindings (value, onChange, onBlur, name, ref) and returns the field's markup.",
  },
  {
    prop: "...props",
    type: "ControllerProps<TFieldValues, TName>",
    description: "The remaining Controller props from react-hook-form (defaultValue, rules, disabled, shouldUnregister).",
  },
]

const formItemProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"div">',
    description: "The remaining native <div> attributes. FormItem also generates the id shared by its label, control, description and message.",
  },
]

const formLabelProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof LabelPrimitive.Root>",
    description: "Extends Label (Radix LabelPrimitive.Root props). htmlFor is set automatically to the field's id, and the destructive color is applied when the field has an error.",
  },
]

const formControlProps: PropRow[] = [
  {
    prop: "...props",
    type: "React.ComponentProps<typeof Slot>",
    description: "Spreads onto Radix Slot, which injects id, aria-describedby and aria-invalid onto its single child (the actual input, select, checkbox, etc.) and merges its className with the child's.",
  },
]

const formDescriptionProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"p">',
    description: "The remaining native <p> attributes.",
  },
]

const formMessageProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "children",
    type: "React.ReactNode",
    description: "Fallback text shown when the field has no validation error. Replaced by the field's error message once the field becomes invalid.",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"p">',
    description: "The remaining native <p> attributes. Renders nothing when there's no error and no children.",
  },
]

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
