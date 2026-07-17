import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "dropdown-menu",
  name: "Dropdown Menu",
  category: "Overlays",
  description: "A menu of actions or options revealed from a trigger button and positioned relative to it. Composed of items, checkboxes, radio groups, labels, separators, keyboard shortcuts, and nested submenus, all inside a glassmorphism surface.",
  imports: [
    "DropdownMenu",
    "DropdownMenuTrigger",
    "DropdownMenuContent",
    "DropdownMenuGroup",
    "DropdownMenuLabel",
    "DropdownMenuItem",
    "DropdownMenuCheckboxItem",
    "DropdownMenuRadioGroup",
    "DropdownMenuRadioItem",
    "DropdownMenuSeparator",
    "DropdownMenuShortcut",
    "DropdownMenuSub",
    "DropdownMenuSubTrigger",
    "DropdownMenuSubContent",
  ],
}
