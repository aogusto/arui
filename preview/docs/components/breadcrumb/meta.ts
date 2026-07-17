import type { DocCategory } from "../../registry"

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
