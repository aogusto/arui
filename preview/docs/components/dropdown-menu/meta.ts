import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "dropdown-menu",
  name: "Dropdown Menu",
  category: "Overlays",
  description: "A menu of actions or options revealed from a trigger button and positioned relative to it. Composed of items, checkboxes, radio groups, labels, separators, keyboard shortcuts, and nested submenus, all inside a glassmorphism surface. The highlighted item uses an animated glass pill by default.",
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

export const dropdownMenuProps: PropRow[] = [
  {
    prop: "...props",
    type: "React.ComponentProps<typeof DropdownMenuPrimitive.Root>",
    description: "Extends Radix's DropdownMenu.Root. Controls the open state via open / onOpenChange, or defaultOpen for uncontrolled usage. Accepts modal to control whether outside pointer events are blocked while open.",
  },
]

export const dropdownMenuTriggerProps: PropRow[] = [
  {
    prop: "...props",
    type: "React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>",
    description: "Extends Radix's DropdownMenu.Trigger. Pass asChild to render a custom element (typically a Button) as the trigger instead of the default button.",
  },
]

export const dropdownMenuContentProps: PropRow[] = [
  {
    prop: "align",
    type: '"start" | "center" | "end"',
    default: '"start"',
    description: "Alignment of the content relative to the trigger along the perpendicular axis.",
  },
  {
    prop: "sideOffset",
    type: "number",
    default: "4",
    description: "Distance in pixels between the content and the trigger.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn(). By default the content's width tracks the trigger's width (with a min-w-32 floor); pass a width utility to override it.",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof DropdownMenuPrimitive.Content>",
    description: "Extends Radix's DropdownMenu.Content (side, collisionPadding, onCloseAutoFocus, loop, etc). Rendered inside a Portal, with a glassmorphism surface and enter/exit animations based on the side it opens from.",
  },
]

export const dropdownMenuGroupProps: PropRow[] = [
  {
    prop: "...props",
    type: "React.ComponentProps<typeof DropdownMenuPrimitive.Group>",
    description: "Extends Radix's DropdownMenu.Group. Wraps a set of items under a shared DropdownMenuLabel; visually unstyled on its own.",
  },
]

export const dropdownMenuLabelProps: PropRow[] = [
  {
    prop: "inset",
    type: "boolean",
    default: "false",
    description: "Adds left padding so the label aligns with items that carry a leading icon.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof DropdownMenuPrimitive.Label>",
    description: "Extends Radix's DropdownMenu.Label. Renders small muted text used to head a group of items.",
  },
]

export const dropdownMenuItemProps: PropRow[] = [
  {
    prop: "variant",
    type: '"default" | "destructive"',
    default: '"default"',
    description: "Visual intent of the item. Destructive tints the text and focus background, for irreversible actions like delete.",
  },
  {
    prop: "inset",
    type: "boolean",
    default: "false",
    description: "Adds left padding so the item aligns with items that carry a leading icon.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof DropdownMenuPrimitive.Item>",
    description: "Extends Radix's DropdownMenu.Item. Pass disabled to make the item unselectable, and asChild to render a custom element (e.g. a Link) in its place.",
  },
]

export const dropdownMenuCheckboxItemProps: PropRow[] = [
  {
    prop: "checked",
    type: 'boolean | "indeterminate"',
    description: "The controlled checked state. Pair with onCheckedChange.",
  },
  {
    prop: "inset",
    type: "boolean",
    default: "false",
    description: "Adds left padding so the item aligns with items that carry a leading icon.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>",
    description: "Extends Radix's DropdownMenu.CheckboxItem (onCheckedChange, disabled, etc). Renders a check icon on the right when checked.",
  },
]

export const dropdownMenuRadioGroupProps: PropRow[] = [
  {
    prop: "value",
    type: "string",
    description: "The controlled selected value, shared by every DropdownMenuRadioItem inside. Pair with onValueChange.",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>",
    description: "Extends Radix's DropdownMenu.RadioGroup. Also accepts defaultValue for uncontrolled usage.",
  },
]

export const dropdownMenuRadioItemProps: PropRow[] = [
  {
    prop: "value",
    type: "string",
    description: "The value this item represents within the enclosing DropdownMenuRadioGroup. Required.",
  },
  {
    prop: "inset",
    type: "boolean",
    default: "false",
    description: "Adds left padding so the item aligns with items that carry a leading icon.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>",
    description: "Extends Radix's DropdownMenu.RadioItem. Renders a filled dot on the right when selected.",
  },
]

export const dropdownMenuSeparatorProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof DropdownMenuPrimitive.Separator>",
    description: "Extends Radix's DropdownMenu.Separator. Renders a thin horizontal rule to divide groups of items.",
  },
]

export const dropdownMenuShortcutProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"span">',
    description: "The remaining native <span> attributes. Right-aligns muted text, such as a keyboard shortcut, inside a DropdownMenuItem.",
  },
]

export const dropdownMenuSubProps: PropRow[] = [
  {
    prop: "...props",
    type: "React.ComponentProps<typeof DropdownMenuPrimitive.Sub>",
    description: "Extends Radix's DropdownMenu.Sub. Wraps a DropdownMenuSubTrigger and its DropdownMenuSubContent to build a nested submenu. Also accepts open, defaultOpen and onOpenChange to control the submenu independently of the parent menu.",
  },
]

export const dropdownMenuSubTriggerProps: PropRow[] = [
  {
    prop: "inset",
    type: "boolean",
    default: "false",
    description: "Adds left padding so the trigger aligns with items that carry a leading icon.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger>",
    description: "Extends Radix's DropdownMenu.SubTrigger. Renders a trailing chevron and opens its DropdownMenuSubContent on hover or focus.",
  },
]

export const dropdownMenuSubContentProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>",
    description: "Extends Radix's DropdownMenu.SubContent (sideOffset, alignOffset, collisionPadding, etc). Positioned beside its DropdownMenuSubTrigger, with the same glassmorphism surface as DropdownMenuContent.",
  },
]

export const props: PropRow[] = [
  ...dropdownMenuProps,
  ...dropdownMenuTriggerProps,
  ...dropdownMenuContentProps,
  ...dropdownMenuGroupProps,
  ...dropdownMenuLabelProps,
  ...dropdownMenuItemProps,
  ...dropdownMenuCheckboxItemProps,
  ...dropdownMenuRadioGroupProps,
  ...dropdownMenuRadioItemProps,
  ...dropdownMenuSeparatorProps,
  ...dropdownMenuShortcutProps,
  ...dropdownMenuSubProps,
  ...dropdownMenuSubTriggerProps,
  ...dropdownMenuSubContentProps,
]
