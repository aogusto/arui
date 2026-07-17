import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "pagination",
  name: "Pagination",
  category: "Navigation",
  description: "Navigation controls for paging through a list of results: previous/next links, numbered page links, and an ellipsis to collapse long ranges. Composed from simple building blocks styled like Button, so it drops into whatever pagination logic your data already uses.",
  imports: [
    "Pagination",
    "PaginationContent",
    "PaginationEllipsis",
    "PaginationItem",
    "PaginationLink",
    "PaginationNext",
    "PaginationPrevious",
  ],
}

export const paginationProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'nav'>",
    description: "The remaining native <nav> attributes. role=\"navigation\" and aria-label=\"pagination\" are already set internally.",
  },
]

export const paginationContentProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'ul'>",
    description: "The remaining native <ul> attributes. Lays out its PaginationItem children in a row with a small gap.",
  },
]

export const paginationItemProps: PropRow[] = [
  {
    prop: "...props",
    type: "React.ComponentProps<'li'>",
    description: "The native <li> attributes, including className. Wraps a single PaginationLink, PaginationPrevious, PaginationNext, or PaginationEllipsis.",
  },
]

export const paginationLinkProps: PropRow[] = [
  {
    prop: "isActive",
    type: "boolean",
    default: "false",
    description: "Marks the link as the current page: renders the outline Button variant instead of ghost and sets aria-current=\"page\".",
  },
  {
    prop: "size",
    type: '"default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"',
    default: '"icon"',
    description: "Size passed through to the underlying Button. Numbered page links are icon-sized by default; PaginationPrevious and PaginationNext override it to default.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'a'>",
    description: "The remaining native <a> attributes (href, onClick, etc.). Rendered as a Button with asChild, so it keeps full button styling on a real link element.",
  },
]

export const paginationPrevNextProps: PropRow[] = [
  {
    prop: "text",
    type: "string",
    default: '"Previous" / "Next"',
    description: "Label rendered next to the arrow icon. Hidden below the sm breakpoint, leaving only the icon visible on small screens.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof PaginationLink>",
    description: "Accepts every PaginationLink prop (href, isActive, size, onClick, etc.). aria-label defaults to \"Go to previous page\" / \"Go to next page\".",
  },
]

export const paginationEllipsisProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'span'>",
    description: "The remaining native <span> attributes. Renders a MoreHorizontalIcon, is aria-hidden, and carries a screen-reader-only \"More pages\" label.",
  },
]

export const props: PropRow[] = [
  ...paginationProps,
  ...paginationContentProps,
  ...paginationItemProps,
  ...paginationLinkProps,
  ...paginationPrevNextProps,
  ...paginationEllipsisProps,
]
