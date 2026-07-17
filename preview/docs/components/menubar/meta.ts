import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "menubar",
  name: "Menubar",
  category: "Overlays",
  description: "A horizontal bar of dropdown menus for the primary actions of a desktop-style app, such as File, Edit, and View. Composed of items, checkboxes, radio groups, labels, separators, keyboard shortcuts, and nested submenus, all on a glassmorphism surface.",
  imports: [
    "Menubar",
    "MenubarMenu",
    "MenubarTrigger",
    "MenubarContent",
    "MenubarGroup",
    "MenubarLabel",
    "MenubarItem",
    "MenubarShortcut",
    "MenubarCheckboxItem",
    "MenubarRadioGroup",
    "MenubarRadioItem",
    "MenubarSeparator",
    "MenubarSub",
    "MenubarSubTrigger",
    "MenubarSubContent",
  ],
}
