import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "sidebar",
  name: "Sidebar",
  category: "Navigation",
  description: "A collapsible application sidebar built from a provider and a full set of composable parts: header, content, groups, menus, submenus, search input, and a skeleton loading state. Collapses to icons or off canvas on desktop and becomes a sheet on mobile.",
  imports: [
    "Sidebar",
    "SidebarContent",
    "SidebarFooter",
    "SidebarGroup",
    "SidebarGroupAction",
    "SidebarGroupContent",
    "SidebarGroupLabel",
    "SidebarHeader",
    "SidebarInput",
    "SidebarInset",
    "SidebarMenu",
    "SidebarMenuAction",
    "SidebarMenuBadge",
    "SidebarMenuButton",
    "SidebarMenuItem",
    "SidebarMenuSkeleton",
    "SidebarMenuSub",
    "SidebarMenuSubButton",
    "SidebarMenuSubItem",
    "SidebarProvider",
    "SidebarRail",
    "SidebarSeparator",
    "SidebarTrigger",
    "useSidebar",
  ],
}

export const sidebarProviderProps: PropRow[] = [
  {
    prop: "defaultOpen",
    type: "boolean",
    default: "true",
    description: "Initial expanded state on desktop, when open is not provided.",
  },
  {
    prop: "open",
    type: "boolean",
    description: "Controlled expanded state on desktop. Pairs with onOpenChange.",
  },
  {
    prop: "onOpenChange",
    type: "(open: boolean) => void",
    description: "Called when the desktop expanded state changes. Required to control open.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "The remaining native <div> attributes. Provides the sidebar context to its children, persists the expanded state in a sidebar_state cookie, and binds Cmd/Ctrl+B to toggle it.",
  },
]

export const sidebarProps: PropRow[] = [
  {
    prop: "side",
    type: '"left" | "right"',
    default: '"left"',
    description: "Which edge of the layout the sidebar is docked to.",
  },
  {
    prop: "variant",
    type: '"sidebar" | "floating" | "inset"',
    default: '"sidebar"',
    description: "Visual treatment: a flush panel, a floating card with a ring, or an inset panel that adds margin and rounding to SidebarInset.",
  },
  {
    prop: "collapsible",
    type: '"offcanvas" | "icon" | "none"',
    default: '"offcanvas"',
    description: "How the sidebar collapses on desktop. offcanvas slides fully out of view, icon shrinks it to an icon only rail, none disables collapsing entirely.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "The remaining native <div> attributes. Renders as a Sheet automatically below the mobile breakpoint, regardless of collapsible.",
  },
]

export const sidebarTriggerProps: PropRow[] = [
  {
    prop: "...props",
    type: "React.ComponentProps<typeof Button>",
    description: "Extends Button (rendered as variant ghost, size icon-sm). Calls toggleSidebar from useSidebar on click, alongside any onClick you pass.",
  },
]

export const sidebarRailProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'button'>",
    description: "The remaining native <button> attributes. A thin, mostly invisible drag handle at the sidebar's edge; clicking it also calls toggleSidebar.",
  },
]

export const sidebarInsetProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'main'>",
    description: "The remaining native <main> attributes. Holds the page content next to the sidebar; gains margin, rounded corners, and a shadow when the sidebar's variant is inset.",
  },
]

export const sidebarInputProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof Input>",
    description: "Extends Input, sized and styled for the sidebar header (h-8, no shadow).",
  },
]

export const sidebarHeaderProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "The remaining native <div> attributes. A pinned area at the top of the sidebar, typically a logo, a team switcher, or a SidebarInput.",
  },
]

export const sidebarFooterProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "The remaining native <div> attributes. A pinned area at the bottom of the sidebar, typically a user menu.",
  },
]

export const sidebarSeparatorProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof Separator>",
    description: "Extends Separator, inset horizontally and colored for the sidebar.",
  },
]

export const sidebarContentProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "The remaining native <div> attributes. The scrollable area between the header and footer; holds one or more SidebarGroup.",
  },
]

export const sidebarGroupProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "The remaining native <div> attributes. A labeled section of the sidebar, usually a SidebarGroupLabel followed by a SidebarGroupContent.",
  },
]

export const sidebarGroupLabelProps: PropRow[] = [
  {
    prop: "asChild",
    type: "boolean",
    default: "false",
    description: "Renders the child as the root element (via Slot) instead of a div.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "The remaining native <div> attributes. The group's heading; fades out when the sidebar is collapsed to icons.",
  },
]

export const sidebarGroupActionProps: PropRow[] = [
  {
    prop: "asChild",
    type: "boolean",
    default: "false",
    description: "Renders the child as the root element (via Slot) instead of a button.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'button'>",
    description: "The remaining native <button> attributes. A small icon button anchored to the group's top right corner, next to its SidebarGroupLabel.",
  },
]

export const sidebarGroupContentProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "The remaining native <div> attributes. Wraps a group's content, typically a SidebarMenu.",
  },
]

export const sidebarMenuProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'ul'>",
    description: "The remaining native <ul> attributes. A vertical list of SidebarMenuItem.",
  },
]

export const sidebarMenuItemProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'li'>",
    description: "The remaining native <li> attributes. Wraps a SidebarMenuButton and its optional SidebarMenuAction, SidebarMenuBadge, and SidebarMenuSub.",
  },
]

export const sidebarMenuButtonProps: PropRow[] = [
  {
    prop: "asChild",
    type: "boolean",
    default: "false",
    description: "Renders the child as the root element (via Slot) instead of a button.",
  },
  {
    prop: "isActive",
    type: "boolean",
    default: "false",
    description: "Marks the item as the current page.",
  },
  {
    prop: "variant",
    type: '"default" | "outline"',
    default: '"default"',
    description: "Visual style of the button.",
  },
  {
    prop: "size",
    type: '"default" | "sm" | "lg"',
    default: '"default"',
    description: "Height and text size of the button.",
  },
  {
    prop: "tooltip",
    type: "string | React.ComponentProps<typeof TooltipContent>",
    description: "Shown on the right when the sidebar is collapsed to icons (desktop only). A string becomes the tooltip's children; an object is passed through to TooltipContent.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'button'>",
    description: "The remaining native <button> attributes.",
  },
]

export const sidebarMenuActionProps: PropRow[] = [
  {
    prop: "asChild",
    type: "boolean",
    default: "false",
    description: "Renders the child as the root element (via Slot) instead of a button.",
  },
  {
    prop: "showOnHover",
    type: "boolean",
    default: "false",
    description: "Keeps the action hidden until the menu item is hovered or focused, or its SidebarMenuButton is active.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'button'>",
    description: "The remaining native <button> attributes. A small icon button anchored to the menu item's top right corner, next to its SidebarMenuButton.",
  },
]

export const sidebarMenuBadgeProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "The remaining native <div> attributes. A small count or status indicator anchored to the menu item's top right corner. Hidden when the sidebar is collapsed to icons.",
  },
]

export const sidebarMenuSkeletonProps: PropRow[] = [
  {
    prop: "showIcon",
    type: "boolean",
    default: "false",
    description: "Reserves space for a leading icon placeholder.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "The remaining native <div> attributes. A placeholder row for a SidebarMenuItem while its data is loading; its text width is randomized per row.",
  },
]

export const sidebarMenuSubProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'ul'>",
    description: "The remaining native <ul> attributes. A nested list of SidebarMenuSubItem rendered under a SidebarMenuItem. Hidden when the sidebar is collapsed to icons.",
  },
]

export const sidebarMenuSubItemProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'li'>",
    description: "The remaining native <li> attributes. Wraps a SidebarMenuSubButton.",
  },
]

export const sidebarMenuSubButtonProps: PropRow[] = [
  {
    prop: "asChild",
    type: "boolean",
    default: "false",
    description: "Renders the child as the root element (via Slot) instead of an anchor.",
  },
  {
    prop: "size",
    type: '"sm" | "md"',
    default: '"md"',
    description: "Text size of the button.",
  },
  {
    prop: "isActive",
    type: "boolean",
    default: "false",
    description: "Marks the item as the current page.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'a'>",
    description: "The remaining native <a> attributes. Renders an <a> by default, pass asChild to render a router Link instead.",
  },
]

export const useSidebarReturns: PropRow[] = [
  {
    prop: "state",
    type: '"expanded" | "collapsed"',
    description: "The desktop expanded state, derived from open.",
  },
  {
    prop: "open",
    type: "boolean",
    description: "Whether the sidebar is expanded on desktop.",
  },
  {
    prop: "setOpen",
    type: "(open: boolean) => void",
    description: "Sets the desktop expanded state.",
  },
  {
    prop: "openMobile",
    type: "boolean",
    description: "Whether the sidebar sheet is open on mobile.",
  },
  {
    prop: "setOpenMobile",
    type: "(open: boolean) => void",
    description: "Sets the mobile sheet's open state.",
  },
  {
    prop: "isMobile",
    type: "boolean",
    description: "Whether the viewport is currently below the mobile breakpoint.",
  },
  {
    prop: "toggleSidebar",
    type: "() => void",
    description: "Toggles open on desktop, or openMobile on mobile. Also bound to Cmd/Ctrl+B.",
  },
]

export const props: PropRow[] = [
  ...sidebarProviderProps,
  ...sidebarProps,
  ...sidebarTriggerProps,
  ...sidebarRailProps,
  ...sidebarInsetProps,
  ...sidebarInputProps,
  ...sidebarHeaderProps,
  ...sidebarFooterProps,
  ...sidebarSeparatorProps,
  ...sidebarContentProps,
  ...sidebarGroupProps,
  ...sidebarGroupLabelProps,
  ...sidebarGroupActionProps,
  ...sidebarGroupContentProps,
  ...sidebarMenuProps,
  ...sidebarMenuItemProps,
  ...sidebarMenuButtonProps,
  ...sidebarMenuActionProps,
  ...sidebarMenuBadgeProps,
  ...sidebarMenuSkeletonProps,
  ...sidebarMenuSubProps,
  ...sidebarMenuSubItemProps,
  ...sidebarMenuSubButtonProps,
  ...useSidebarReturns,
]
