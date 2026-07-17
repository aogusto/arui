import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "kbd",
  name: "Kbd",
  category: "Data & Display",
  description: "A small label for displaying keyboard keys and shortcuts, like ⌘K or Ctrl+Shift+P. Combine multiple keys with KbdGroup, and it adapts its color automatically when nested inside a Tooltip.",
  imports: ["Kbd", "KbdGroup"],
}
