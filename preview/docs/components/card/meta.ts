import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "card",
  name: "Card",
  category: "Data & Display",
  description: "A container for grouping related content and actions, composed from a header (title, description, and an optional action slot), a content area, and a footer. Supports a compact sm size and renders a leading or trailing image edge to edge.",
  imports: ["Card", "CardHeader", "CardTitle", "CardDescription", "CardAction", "CardContent", "CardFooter"],
}

export const cardProps: PropRow[] = [
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

export const cardHeaderProps: PropRow[] = [
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

export const cardTitleProps: PropRow[] = [
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

export const cardDescriptionProps: PropRow[] = [
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

export const cardActionProps: PropRow[] = [
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

export const cardContentProps: PropRow[] = [
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

export const cardFooterProps: PropRow[] = [
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

export const props: PropRow[] = [
  ...cardProps,
  ...cardHeaderProps,
  ...cardTitleProps,
  ...cardDescriptionProps,
  ...cardActionProps,
  ...cardContentProps,
  ...cardFooterProps,
]
