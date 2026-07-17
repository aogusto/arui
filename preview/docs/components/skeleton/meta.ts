import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "skeleton",
  name: "Skeleton",
  category: "Data & Display",
  description: "A pulsing placeholder that mimics the shape of content while it loads, such as avatars, lines of text, or whole cards.",
  imports: ["Skeleton"],
}
