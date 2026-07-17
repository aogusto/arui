import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "field",
  name: "Field",
  category: "Forms & Inputs",
  description: "A layout primitive for building form fields, pairing a label, control, and description or error message. Supports vertical, horizontal, and responsive orientations, plus FieldSet, FieldGroup, and FieldSeparator for composing full sections.",
  imports: ["Field", "FieldLabel", "FieldDescription", "FieldError", "FieldGroup", "FieldLegend", "FieldSeparator", "FieldSet", "FieldContent", "FieldTitle"],
}

export const fieldProps: PropRow[] = [
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

export const fieldLabelProps: PropRow[] = [
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

export const fieldDescriptionProps: PropRow[] = [
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

export const fieldErrorProps: PropRow[] = [
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

export const fieldSetProps: PropRow[] = [
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

export const fieldLegendProps: PropRow[] = [
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

export const fieldGroupProps: PropRow[] = [
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

export const fieldSeparatorProps: PropRow[] = [
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

export const fieldContentProps: PropRow[] = [
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

export const fieldTitleProps: PropRow[] = [
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

export const props: PropRow[] = [
  ...fieldProps,
  ...fieldLabelProps,
  ...fieldDescriptionProps,
  ...fieldErrorProps,
  ...fieldSetProps,
  ...fieldLegendProps,
  ...fieldGroupProps,
  ...fieldSeparatorProps,
  ...fieldContentProps,
  ...fieldTitleProps,
]
