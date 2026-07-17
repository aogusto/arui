import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "command",
  name: "Command",
  category: "Overlays",
  description: "A composable, filterable list for building command palettes, quick-action menus, and searchable pickers. Combine Command, CommandInput, and CommandItem to search over a list of actions, with optional groups, shortcuts, and a built-in empty state.",
  imports: ["Command", "CommandInput", "CommandList", "CommandEmpty", "CommandGroup", "CommandItem", "CommandShortcut", "CommandSeparator"],
}
