import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "empty",
  name: "Empty",
  category: "Data & Display",
  description: "A dashed placeholder for empty and zero states, composed from an icon or illustration, a title, a description, and an optional area for actions.",
  imports: ["Empty", "EmptyHeader", "EmptyMedia", "EmptyTitle", "EmptyDescription", "EmptyContent"],
}

export const propsEmpty: PropRow[] = [
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

export const propsEmptyHeader: PropRow[] = [
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

export const propsEmptyMedia: PropRow[] = [
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

export const propsEmptyTitle: PropRow[] = [
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

export const propsEmptyDescription: PropRow[] = [
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

export const propsEmptyContent: PropRow[] = [
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

export const props: PropRow[] = [
  ...propsEmpty,
  ...propsEmptyHeader,
  ...propsEmptyMedia,
  ...propsEmptyTitle,
  ...propsEmptyDescription,
  ...propsEmptyContent,
]
