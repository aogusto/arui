import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "empty",
  name: "Empty",
  category: "Data & Display",
  description: "A dashed placeholder for empty and zero states, composed from an icon or illustration, a title, a description, and an optional area for actions.",
  imports: ["Empty", "EmptyHeader", "EmptyMedia", "EmptyTitle", "EmptyDescription", "EmptyContent"],
}
