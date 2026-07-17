import type { DocCategory } from "../../registry"

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
