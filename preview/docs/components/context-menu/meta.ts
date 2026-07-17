import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "context-menu",
  name: "Context Menu",
  category: "Overlays",
  description: "A menu that appears at the pointer position when right-clicking a trigger area, with items, checkboxes, radio groups, and submenus, all on a glassmorphism surface.",
  imports: [
    "ContextMenu",
    "ContextMenuTrigger",
    "ContextMenuContent",
    "ContextMenuItem",
    "ContextMenuCheckboxItem",
    "ContextMenuRadioItem",
    "ContextMenuRadioGroup",
    "ContextMenuLabel",
    "ContextMenuSeparator",
    "ContextMenuShortcut",
    "ContextMenuGroup",
    "ContextMenuSub",
    "ContextMenuSubTrigger",
    "ContextMenuSubContent",
  ],
}
