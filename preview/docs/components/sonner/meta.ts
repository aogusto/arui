import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "sonner",
  name: "Sonner (Toaster)",
  category: "Feedback & Utilities",
  description: "A themed wrapper around sonner's Toaster, styled with the glass surface and preset icons for success, info, warning, error, and loading states. Pair it with the toast() function from sonner to trigger notifications from anywhere in the app.",
  imports: ["Toaster"],
}
