import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "scroll-area",
  name: "Scroll Area",
  category: "Data & Display",
  description: "A scrollable region with custom, cross-browser styled scrollbars, for a fixed-height panel of content such as a list, a card's body, or a horizontally scrolling gallery.",
  imports: ["ScrollArea", "ScrollBar"],
}

export const scrollAreaProps: PropRow[] = [
  {
    prop: "type",
    type: '"auto" | "always" | "scroll" | "hover"',
    default: '"hover"',
    description: "When scrollbars are shown. hover shows them while the pointer is over the area, scroll while scrolling, always keeps them visible, and auto shows them only when the content overflows.",
  },
  {
    prop: "scrollHideDelay",
    type: "number",
    default: "600",
    description: "Milliseconds to wait before hiding the scrollbars after the pointer leaves or scrolling stops. Only relevant for the hover and scroll types.",
  },
  {
    prop: "dir",
    type: '"ltr" | "rtl"',
    description: "Reading direction used to resolve scrolling behavior. Defaults to the document direction.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn(). Set a fixed height and width here (e.g. h-72 w-48) to define the scrollable viewport.",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ScrollAreaPrimitive.Root>",
    description: "Extends ScrollArea.Root from radix-ui.",
  },
]

export const scrollBarProps: PropRow[] = [
  {
    prop: "orientation",
    type: '"vertical" | "horizontal"',
    default: '"vertical"',
    description: "Axis the scrollbar controls. ScrollArea already renders a vertical one; add a ScrollBar with orientation=\"horizontal\" alongside your content for horizontal scrolling.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>",
    description: "Extends ScrollArea.Scrollbar from radix-ui.",
  },
]

export const props: PropRow[] = [...scrollAreaProps, ...scrollBarProps]
