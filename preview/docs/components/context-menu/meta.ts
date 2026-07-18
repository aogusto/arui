import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "context-menu",
  name: "Context Menu",
  category: "Overlays",
  description: "A menu that appears at the pointer position when right-clicking a trigger area, with items, checkboxes, radio groups, and submenus, all on a glassmorphism surface. The highlighted item uses an animated glass pill by default.",
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

export const contextMenuProps: PropRow[] = [
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ContextMenuPrimitive.Root>",
    description: "Extends ContextMenu.Root from radix-ui. Controls the open state via onOpenChange, or modal to change focus trapping behavior.",
  },
]

export const contextMenuTriggerProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ContextMenuPrimitive.Trigger>",
    description: "Extends ContextMenu.Trigger from radix-ui. The wrapped element becomes the area that opens the menu on right click (or long press on touch devices).",
  },
]

export const contextMenuContentProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ContextMenuPrimitive.Content>",
    description: "Extends ContextMenu.Content from radix-ui (collisionPadding, onCloseAutoFocus, etc). Rendered inside a Portal, positioned at the pointer, with a glassmorphism surface applied by default.",
  },
]

export const contextMenuItemProps: PropRow[] = [
  {
    prop: "variant",
    type: '"default" | "destructive"',
    default: '"default"',
    description: "Visual intent of the item. destructive tints the label and focus state for dangerous actions like delete.",
  },
  {
    prop: "inset",
    type: "boolean",
    default: "false",
    description: "Adds left padding so the label aligns with items that show an icon or indicator.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ContextMenuPrimitive.Item>",
    description: "Extends ContextMenu.Item from radix-ui (onSelect, disabled, etc).",
  },
]

export const contextMenuCheckboxItemProps: PropRow[] = [
  {
    prop: "checked",
    type: "boolean",
    description: "Whether the item is checked. Renders a check mark indicator when true.",
  },
  {
    prop: "inset",
    type: "boolean",
    default: "false",
    description: "Adds left padding so the label aligns with items that show an icon or indicator.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>",
    description: "Extends ContextMenu.CheckboxItem from radix-ui, including onCheckedChange.",
  },
]

export const contextMenuRadioGroupProps: PropRow[] = [
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>",
    description: "Extends ContextMenu.RadioGroup from radix-ui. Groups ContextMenuRadioItem children and controls the selected value via value / onValueChange.",
  },
]

export const contextMenuRadioItemProps: PropRow[] = [
  {
    prop: "value",
    type: "string",
    description: "The value represented by this item, compared against the parent ContextMenuRadioGroup's value.",
  },
  {
    prop: "inset",
    type: "boolean",
    default: "false",
    description: "Adds left padding so the label aligns with items that show an icon or indicator.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ContextMenuPrimitive.RadioItem>",
    description: "Extends ContextMenu.RadioItem from radix-ui.",
  },
]

export const contextMenuLabelProps: PropRow[] = [
  {
    prop: "inset",
    type: "boolean",
    default: "false",
    description: "Adds left padding so the label aligns with items that show an icon or indicator.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ContextMenuPrimitive.Label>",
    description: "Extends ContextMenu.Label from radix-ui. Renders small muted heading text above a group of items.",
  },
]

export const contextMenuSeparatorProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ContextMenuPrimitive.Separator>",
    description: "Extends ContextMenu.Separator from radix-ui. Renders a thin horizontal rule between groups of items.",
  },
]

export const contextMenuShortcutProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'span'>",
    description: "Extends the native <span>. Place as the last child of a ContextMenuItem to right align a keyboard shortcut hint.",
  },
]

export const contextMenuGroupProps: PropRow[] = [
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ContextMenuPrimitive.Group>",
    description: "Extends ContextMenu.Group from radix-ui. Groups related items together for accessibility, with no visual effect on its own.",
  },
]

export const contextMenuSubProps: PropRow[] = [
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ContextMenuPrimitive.Sub>",
    description: "Extends ContextMenu.Sub from radix-ui. Wraps a ContextMenuSubTrigger and its ContextMenuSubContent to build a nested menu.",
  },
]

export const contextMenuSubTriggerProps: PropRow[] = [
  {
    prop: "inset",
    type: "boolean",
    default: "false",
    description: "Adds left padding so the label aligns with items that show an icon or indicator.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ContextMenuPrimitive.SubTrigger>",
    description: "Extends ContextMenu.SubTrigger from radix-ui. Renders a chevron indicator after the children automatically.",
  },
]

export const contextMenuSubContentProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ContextMenuPrimitive.SubContent>",
    description: "Extends ContextMenu.SubContent from radix-ui. Rendered next to the sub trigger with the same glassmorphism surface as ContextMenuContent.",
  },
]

export const props: PropRow[] = [
  ...contextMenuProps,
  ...contextMenuTriggerProps,
  ...contextMenuContentProps,
  ...contextMenuItemProps,
  ...contextMenuCheckboxItemProps,
  ...contextMenuRadioGroupProps,
  ...contextMenuRadioItemProps,
  ...contextMenuLabelProps,
  ...contextMenuSeparatorProps,
  ...contextMenuShortcutProps,
  ...contextMenuGroupProps,
  ...contextMenuSubProps,
  ...contextMenuSubTriggerProps,
  ...contextMenuSubContentProps,
]
