import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "drawer",
  name: "Drawer",
  category: "Overlays",
  description: "A bottom sheet style panel built on vaul, with a glassmorphism surface and support for all four edges, controlled state and snap points. Great for mobile forms and quick actions.",
  imports: ["Drawer", "DrawerTrigger", "DrawerContent", "DrawerHeader", "DrawerTitle", "DrawerDescription", "DrawerFooter", "DrawerClose"],
}
