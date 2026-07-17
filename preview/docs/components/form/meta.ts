import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "form",
  name: "Form",
  category: "Forms & Inputs",
  description: "A set of composable primitives built on react-hook-form that connect labels, controls, descriptions and validation messages, wiring up ids and aria attributes automatically.",
  imports: ["Form", "FormControl", "FormDescription", "FormField", "FormItem", "FormLabel", "FormMessage"],
}

export const formProps: PropRow[] = [
  {
    prop: "...props",
    type: "UseFormReturn<TFieldValues>",
    description: "Form re-exports react-hook-form's FormProvider as is. Spread the object returned by useForm() onto it (<Form {...form}>) so nested FormField and useFormField calls can read the form context.",
  },
]

export const formFieldProps: PropRow[] = [
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

export const formItemProps: PropRow[] = [
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

export const formLabelProps: PropRow[] = [
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

export const formControlProps: PropRow[] = [
  {
    prop: "...props",
    type: "React.ComponentProps<typeof Slot>",
    description: "Spreads onto Radix Slot, which injects id, aria-describedby and aria-invalid onto its single child (the actual input, select, checkbox, etc.) and merges its className with the child's.",
  },
]

export const formDescriptionProps: PropRow[] = [
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

export const formMessageProps: PropRow[] = [
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

export const props: PropRow[] = [
  ...formProps,
  ...formFieldProps,
  ...formItemProps,
  ...formLabelProps,
  ...formControlProps,
  ...formDescriptionProps,
  ...formMessageProps,
]
