import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "item",
  name: "Item",
  category: "Data & Display",
  description: "A flexible row for lists of content, composed from an optional media slot (icon or image), a title and description, and trailing actions. Combine with ItemGroup and ItemSeparator to build settings lists, notification feeds, or order summaries.",
  imports: ["Item", "ItemMedia", "ItemContent", "ItemActions", "ItemGroup", "ItemSeparator", "ItemTitle", "ItemDescription", "ItemHeader", "ItemFooter"],
}

export const itemProps: PropRow[] = [
  {
    prop: "variant",
    type: '"default" | "outline" | "muted"',
    default: '"default"',
    description: "Visual style of the row: transparent, bordered, or a muted background.",
  },
  {
    prop: "size",
    type: '"default" | "sm" | "xs"',
    default: '"default"',
    description: "Density of the row. Scales gap and padding, and collapses the gap inside ItemContent at xs.",
  },
  {
    prop: "asChild",
    type: "boolean",
    default: "false",
    description: "Renders the child as the root element (via Slot), inheriting the item styles. Useful for making the whole row a link.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "The remaining native <div> attributes.",
  },
]

export const itemGroupProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "The remaining native <div> attributes. Renders with role=\"list\" and stacks Item rows, with a gap that shrinks to match items using size=\"sm\" or size=\"xs\".",
  },
]

export const itemSeparatorProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn(). Defaults to my-2.",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof Separator>",
    description: "Extends Separator, oriented horizontally by default, for use between Item rows inside an ItemGroup.",
  },
]

export const itemMediaProps: PropRow[] = [
  {
    prop: "variant",
    type: '"default" | "icon" | "image"',
    default: '"default"',
    description: "default is a plain wrapper; icon sizes any child <svg> to 1rem; image renders a rounded 40px thumbnail (32px at size=\"sm\", 24px at size=\"xs\") that fills with an <img>.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "The remaining native <div> attributes.",
  },
]

export const itemContentProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn(). A second ItemContent that immediately follows another one automatically becomes flex-none, for a trailing column (a timestamp, a price) that doesn't grow.",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "The remaining native <div> attributes. Stacks ItemTitle and ItemDescription; the gap collapses when the parent Item uses size=\"xs\".",
  },
]

export const itemTitleProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "The remaining native <div> attributes. Single line, truncated with an ellipsis.",
  },
]

export const itemDescriptionProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'p'>",
    description: "The remaining native <p> attributes. Clamped to two lines; links inside are underlined and turn the primary color on hover.",
  },
]

export const itemActionsProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "The remaining native <div> attributes. Lays out trailing controls (buttons, menus) in a row.",
  },
]

export const itemHeaderProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "The remaining native <div> attributes. Takes the full row width and spaces its children apart, e.g. a title next to a badge.",
  },
]

export const itemFooterProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "The remaining native <div> attributes. Takes the full row width and spaces its children apart, typically for a trailing set of actions.",
  },
]

export const props: PropRow[] = [
  ...itemProps,
  ...itemGroupProps,
  ...itemSeparatorProps,
  ...itemMediaProps,
  ...itemContentProps,
  ...itemTitleProps,
  ...itemDescriptionProps,
  ...itemActionsProps,
  ...itemHeaderProps,
  ...itemFooterProps,
]
