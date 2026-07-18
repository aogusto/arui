import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const menubarProps: PropRow[] = [
  {
    prop: "...props",
    type: "React.ComponentProps<typeof MenubarPrimitive.Root>",
    description: "Extends Menubar.Root from radix-ui. Lays out its MenubarMenu children in a row. Controls which menu is open via value / onValueChange (or defaultValue for uncontrolled), and loop to wrap arrow key navigation.",
  },
]

export const menubarMenuProps: PropRow[] = [
  {
    prop: "...props",
    type: "React.ComponentProps<typeof MenubarPrimitive.Menu>",
    description: "Extends Menubar.Menu from radix-ui. Wraps one MenubarTrigger and its MenubarContent. value identifies this menu when the parent Menubar's open state is controlled.",
  },
]

export const menubarTriggerProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof MenubarPrimitive.Trigger>",
    description: "Extends Menubar.Trigger from radix-ui. Opens its content on click, or immediately on hover once another menu in the same bar is already open.",
  },
]

export const menubarContentProps: PropRow[] = [
  {
    prop: "align",
    type: '"start" | "center" | "end"',
    default: '"start"',
    description: "Alignment of the content relative to its trigger.",
  },
  {
    prop: "alignOffset",
    type: "number",
    default: "-4",
    description: "Offset in pixels from the aligned edge.",
  },
  {
    prop: "sideOffset",
    type: "number",
    default: "8",
    description: "Distance in pixels between the content and the menu bar.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof MenubarPrimitive.Content>",
    description: "Extends Menubar.Content from radix-ui. Rendered inside a Portal with a glassmorphism surface applied by default.",
  },
]

export const menubarGroupProps: PropRow[] = [
  {
    prop: "...props",
    type: "React.ComponentProps<typeof MenubarPrimitive.Group>",
    description: "Extends Menubar.Group from radix-ui. Groups related items together for accessibility, with no visual effect on its own.",
  },
]

export const menubarLabelProps: PropRow[] = [
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
    type: "React.ComponentProps<typeof MenubarPrimitive.Label>",
    description: "Extends Menubar.Label from radix-ui. Renders small heading text above a group of items.",
  },
]

export const menubarItemProps: PropRow[] = [
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
    type: "React.ComponentProps<typeof MenubarPrimitive.Item>",
    description: "Extends Menubar.Item from radix-ui (onSelect, disabled, etc).",
  },
]

export const menubarShortcutProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"span">',
    description: "Extends the native <span>. Place as the last child of a MenubarItem to right align a keyboard shortcut hint.",
  },
]

export const menubarCheckboxItemProps: PropRow[] = [
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
    type: "React.ComponentProps<typeof MenubarPrimitive.CheckboxItem>",
    description: "Extends Menubar.CheckboxItem from radix-ui, including onCheckedChange.",
  },
]

export const menubarRadioGroupProps: PropRow[] = [
  {
    prop: "...props",
    type: "React.ComponentProps<typeof MenubarPrimitive.RadioGroup>",
    description: "Extends Menubar.RadioGroup from radix-ui. Groups MenubarRadioItem children and controls the selected value via value / onValueChange.",
  },
]

export const menubarRadioItemProps: PropRow[] = [
  {
    prop: "value",
    type: "string",
    description: "The value represented by this item, compared against the parent MenubarRadioGroup's value.",
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
    type: "React.ComponentProps<typeof MenubarPrimitive.RadioItem>",
    description: "Extends Menubar.RadioItem from radix-ui.",
  },
]

export const menubarSeparatorProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof MenubarPrimitive.Separator>",
    description: "Extends Menubar.Separator from radix-ui. Renders a thin horizontal rule between groups of items.",
  },
]

export const menubarSubProps: PropRow[] = [
  {
    prop: "...props",
    type: "React.ComponentProps<typeof MenubarPrimitive.Sub>",
    description: "Extends Menubar.Sub from radix-ui. Wraps a MenubarSubTrigger and its MenubarSubContent to build a nested menu.",
  },
]

export const menubarSubTriggerProps: PropRow[] = [
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
    type: "React.ComponentProps<typeof MenubarPrimitive.SubTrigger>",
    description: "Extends Menubar.SubTrigger from radix-ui. Renders a chevron indicator after the children automatically.",
  },
]

export const menubarSubContentProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof MenubarPrimitive.SubContent>",
    description: "Extends Menubar.SubContent from radix-ui. Rendered next to the sub trigger with the same glassmorphism surface as MenubarContent.",
  },
]

export const props: PropRow[] = [
  ...menubarProps,
  ...menubarMenuProps,
  ...menubarTriggerProps,
  ...menubarContentProps,
  ...menubarGroupProps,
  ...menubarLabelProps,
  ...menubarItemProps,
  ...menubarShortcutProps,
  ...menubarCheckboxItemProps,
  ...menubarRadioGroupProps,
  ...menubarRadioItemProps,
  ...menubarSeparatorProps,
  ...menubarSubProps,
  ...menubarSubTriggerProps,
  ...menubarSubContentProps,
]

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "menubar",
  name: "Menubar",
  category: "Overlays",
  description: "A horizontal bar of dropdown menus for the primary actions of a desktop-style app, such as File, Edit, and View. Composed of items, checkboxes, radio groups, labels, separators, keyboard shortcuts, and nested submenus, all on a glassmorphism surface. The highlighted item and the open top-level trigger use an animated glass pill by default.",
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
