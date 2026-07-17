import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "breadcrumb",
  name: "Breadcrumb",
  category: "Navigation",
  description: "A trail of links showing the user's location within a hierarchy, ending in the current page. Composed from a list of items, links, separators, and an optional ellipsis for collapsed trails.",
  imports: [
    "Breadcrumb",
    "BreadcrumbList",
    "BreadcrumbItem",
    "BreadcrumbLink",
    "BreadcrumbPage",
    "BreadcrumbSeparator",
    "BreadcrumbEllipsis",
  ],
}

export const breadcrumbProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'nav'>",
    description: "The remaining native <nav> attributes. Renders as the root <nav aria-label=\"breadcrumb\"> of the trail.",
  },
]

export const breadcrumbListProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'ol'>",
    description: "The remaining native <ol> attributes. Wraps the items and wraps onto multiple lines when the trail doesn't fit.",
  },
]

export const breadcrumbItemProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'li'>",
    description: "The remaining native <li> attributes. Wraps a link, the current page, or an ellipsis.",
  },
]

export const breadcrumbLinkProps: PropRow[] = [
  {
    prop: "asChild",
    type: "boolean",
    default: "false",
    description: "Renders the child as the root element (via Slot) instead of an <a>, useful for a router's Link component.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'a'>",
    description: "The remaining native <a> attributes (href, target, etc.).",
  },
]

export const breadcrumbPageProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'span'>",
    description: "The remaining native <span> attributes. Renders with aria-current=\"page\" and aria-disabled=\"true\" to mark the current, non-interactive item.",
  },
]

export const breadcrumbSeparatorProps: PropRow[] = [
  {
    prop: "children",
    type: "React.ReactNode",
    default: "<ChevronRightIcon />",
    description: "Custom separator content, replacing the default chevron icon.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'li'>",
    description: "The remaining native <li> attributes. Rendered with role=\"presentation\" and aria-hidden=\"true\".",
  },
]

export const breadcrumbEllipsisProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'span'>",
    description: "The remaining native <span> attributes. Renders a MoreHorizontal icon plus a screen-reader-only \"More\" label, standing in for collapsed items.",
  },
]

export const props: PropRow[] = [
  ...breadcrumbProps,
  ...breadcrumbListProps,
  ...breadcrumbItemProps,
  ...breadcrumbLinkProps,
  ...breadcrumbPageProps,
  ...breadcrumbSeparatorProps,
  ...breadcrumbEllipsisProps,
]
