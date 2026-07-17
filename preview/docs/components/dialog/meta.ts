import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "dialog",
  name: "Dialog",
  category: "Overlays",
  description: "A modal window that interrupts the page to focus attention on a single task, such as a confirmation, a form, or a piece of detail. Composed of a trigger and a portalled, centered content with a glass surface, an optional header and footer, and a built-in close button.",
  imports: ["Dialog", "DialogTrigger", "DialogContent", "DialogHeader", "DialogTitle", "DialogDescription", "DialogFooter", "DialogClose"],
}
