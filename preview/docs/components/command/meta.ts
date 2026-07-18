import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "command",
  name: "Command",
  category: "Overlays",
  description: "A composable, filterable list for building command palettes, quick-action menus, and searchable pickers. Combine Command, CommandInput, and CommandItem to search over a list of actions, with optional groups, shortcuts, and a built-in empty state. The highlighted item uses an animated glass pill by default.",
  imports: ["Command", "CommandInput", "CommandList", "CommandEmpty", "CommandGroup", "CommandItem", "CommandShortcut", "CommandSeparator"],
}

export const commandProps: PropRow[] = [
  {
    prop: "value",
    type: "string",
    description: "Controlled value of the currently highlighted item. Pair with onValueChange to control selection yourself.",
  },
  {
    prop: "onValueChange",
    type: "(value: string) => void",
    description: "Called when the highlighted item changes, from arrow keys, pointer hover, or filtering.",
  },
  {
    prop: "defaultValue",
    type: "string",
    description: "Initial highlighted item value for uncontrolled usage.",
  },
  {
    prop: "shouldFilter",
    type: "boolean",
    default: "true",
    description: "Set to false to turn off the built-in filtering and sorting, for example to filter items yourself asynchronously.",
  },
  {
    prop: "loop",
    type: "boolean",
    default: "false",
    description: "Wraps arrow key navigation from the last item back to the first, and vice versa.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof CommandPrimitive>",
    description: "Extends cmdk's Command root (filter, keywords, disablePointerSelection, vimBindings, label, etc). Its background turns transparent automatically when nested inside a DialogContent or PopoverContent.",
  },
]

export const commandInputProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof CommandPrimitive.Input>",
    description: "Extends cmdk's Command.Input (placeholder, value, onValueChange, disabled, etc). Rendered inside a compact InputGroup with a search icon suffix.",
  },
]

export const commandListProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof CommandPrimitive.List>",
    description: "Extends cmdk's Command.List. Scrolls internally past a max height, and hosts CommandGroup, CommandItem, and CommandSeparator.",
  },
]

export const commandEmptyProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof CommandPrimitive.Empty>",
    description: "Extends cmdk's Command.Empty. Renders automatically, and only, when the current search matches zero items.",
  },
]

export const commandGroupProps: PropRow[] = [
  {
    prop: "heading",
    type: "React.ReactNode",
    description: "Optional label rendered above the group's items.",
  },
  {
    prop: "value",
    type: "string",
    description: "Unique identifier for the group, used for filtering. Required if no heading is provided.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof CommandPrimitive.Group>",
    description: "Extends cmdk's Command.Group. Groups related CommandItems together; hidden entirely when none of its items match the search.",
  },
]

export const commandItemProps: PropRow[] = [
  {
    prop: "value",
    type: "string",
    description: "Unique value used for filtering and selection. Inferred from the item's text content when omitted.",
  },
  {
    prop: "onSelect",
    type: "(value: string) => void",
    description: "Called with the item's value when it is selected, via click or Enter.",
  },
  {
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables selection and dims the item.",
  },
  {
    prop: "keywords",
    type: "string[]",
    description: "Extra terms considered when matching this item against the search query.",
  },
  {
    prop: "data-checked",
    type: "boolean",
    description: "When true, reveals the item's built-in trailing check icon. The icon stays hidden by default, and is hidden entirely whenever the item also renders a CommandShortcut.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof CommandPrimitive.Item>",
    description: "Extends cmdk's Command.Item. Highlighted automatically during keyboard navigation and pointer hover.",
  },
]

export const commandShortcutProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"span">',
    description: "The remaining native <span> attributes. Renders a muted, right-aligned keyboard shortcut inside a CommandItem.",
  },
]

export const commandSeparatorProps: PropRow[] = [
  {
    prop: "alwaysRender",
    type: "boolean",
    default: "false",
    description: "Forces the separator to stay visible even while a search query is filtering the list. By default it hides while filtering.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof CommandPrimitive.Separator>",
    description: "Extends cmdk's Command.Separator.",
  },
]

export const props: PropRow[] = [
  ...commandProps,
  ...commandInputProps,
  ...commandListProps,
  ...commandEmptyProps,
  ...commandGroupProps,
  ...commandItemProps,
  ...commandShortcutProps,
  ...commandSeparatorProps,
]
