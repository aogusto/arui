import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "spinner",
  name: "Spinner",
  category: "Data & Display",
  description: "A spinning loader for indicating that content or an action is in progress, built on Lucide's Loader2 icon. It has no size or color props of its own, everything is a plain className you override with utilities like size-* and text-*.",
  imports: ["Spinner"],
}
