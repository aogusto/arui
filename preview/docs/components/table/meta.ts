import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "table",
  name: "Table",
  category: "Data & Display",
  description: "A responsive table primitive with header, body, footer and caption parts, built on plain HTML table elements with an automatic horizontal scroll container.",
  imports: ["Table", "TableHeader", "TableBody", "TableFooter", "TableHead", "TableRow", "TableCell", "TableCaption"],
}
