import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "sheet",
  name: "Sheet",
  category: "Overlays",
  description: "A panel that slides in from an edge of the screen, built on the same modal primitive as Dialog. Good fit for filters, details, and forms that don't need a full page.",
  imports: [
    "Sheet",
    "SheetTrigger",
    "SheetContent",
    "SheetHeader",
    "SheetFooter",
    "SheetTitle",
    "SheetDescription",
    "SheetClose",
  ],
}
