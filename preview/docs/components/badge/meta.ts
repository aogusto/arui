import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "badge",
  name: "Badge",
  category: "Data & Display",
  description: "A compact label for status, count, or metadata, with intent variants (default, secondary, destructive, outline, ghost, link). Supports leading and trailing icons and an asChild prop to render as another element, such as a link.",
  imports: ["Badge"],
}
