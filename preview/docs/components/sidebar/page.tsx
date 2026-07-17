import { Demo } from "../../Demo"
import { PropsTable, type PropRow } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta } from "./meta"

import Default from "./examples/default"
import defaultCode from "./examples/default.tsx?raw"
import SideRight from "./examples/side-right"
import sideRightCode from "./examples/side-right.tsx?raw"
import MenuButtonVariants from "./examples/menu-button-variants"
import menuButtonVariantsCode from "./examples/menu-button-variants.tsx?raw"
import GroupsAndSubmenu from "./examples/groups-and-submenu"
import groupsAndSubmenuCode from "./examples/groups-and-submenu.tsx?raw"
import SearchAndSkeleton from "./examples/search-and-skeleton"
import searchAndSkeletonCode from "./examples/search-and-skeleton.tsx?raw"
import Controlled from "./examples/controlled"
import controlledCode from "./examples/controlled.tsx?raw"

const sidebarProviderProps: PropRow[] = [
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

const sidebarProps: PropRow[] = [
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

const sidebarTriggerProps: PropRow[] = [
  {
    prop: "...props",
    type: "React.ComponentProps<typeof Button>",
    description: "Extends Button (rendered as variant ghost, size icon-sm). Calls toggleSidebar from useSidebar on click, alongside any onClick you pass.",
  },
]

const sidebarRailProps: PropRow[] = [
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

const sidebarInsetProps: PropRow[] = [
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

const sidebarInputProps: PropRow[] = [
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

const sidebarHeaderProps: PropRow[] = [
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

const sidebarFooterProps: PropRow[] = [
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

const sidebarSeparatorProps: PropRow[] = [
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

const sidebarContentProps: PropRow[] = [
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

const sidebarGroupProps: PropRow[] = [
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

const sidebarGroupLabelProps: PropRow[] = [
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

const sidebarGroupActionProps: PropRow[] = [
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

const sidebarGroupContentProps: PropRow[] = [
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

const sidebarMenuProps: PropRow[] = [
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

const sidebarMenuItemProps: PropRow[] = [
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

const sidebarMenuButtonProps: PropRow[] = [
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

const sidebarMenuActionProps: PropRow[] = [
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

const sidebarMenuBadgeProps: PropRow[] = [
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

const sidebarMenuSkeletonProps: PropRow[] = [
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

const sidebarMenuSubProps: PropRow[] = [
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

const sidebarMenuSubItemProps: PropRow[] = [
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

const sidebarMenuSubButtonProps: PropRow[] = [
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

const useSidebarReturns: PropRow[] = [
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

export default function SidebarDoc() {
  const importLine = `import { ${meta.imports.join(", ")} } from "@aogusto/arui"`
  return (
    <article className="mx-auto w-full max-w-3xl space-y-10">
      <header className="space-y-2">
        <p className="text-caption-1 font-semibold uppercase tracking-wide text-label-tertiary">{meta.category}</p>
        <h1 className="text-title-1 font-bold text-label">{meta.name}</h1>
        <p className="text-body text-label-secondary">{meta.description}</p>
      </header>

      <div className="flex items-center justify-between rounded-xl border border-separator bg-background-secondary px-3 py-2">
        <code className="font-mono text-caption-1 text-label">{importLine}</code>
        <CopyButton value={importLine} />
      </div>

      <div className="space-y-10">
        <Demo title="Default" description="An icon collapsible sidebar with a header, grouped menu, footer, rail, and trigger. Collapse it with the trigger, the rail, or Cmd/Ctrl+B." code={defaultCode}>
          <Default />
        </Demo>
        <Demo title="Right side, floating" description="side and variant control which edge the sidebar docks to and how its surface looks." code={sideRightCode}>
          <SideRight />
        </Demo>
        <Demo title="Menu button variant and size" code={menuButtonVariantsCode}>
          <MenuButtonVariants />
        </Demo>
        <Demo title="Groups, actions, badges, and submenus" description="SidebarGroupAction, SidebarMenuAction, SidebarMenuBadge, and a nested SidebarMenuSub." code={groupsAndSubmenuCode}>
          <GroupsAndSubmenu />
        </Demo>
        <Demo title="Search input and loading skeleton" code={searchAndSkeletonCode}>
          <SearchAndSkeleton />
        </Demo>
        <Demo title="Controlled state" description="open and onOpenChange lift the expanded state out of the sidebar; useSidebar reads it back from anywhere inside the provider." code={controlledCode}>
          <Controlled />
        </Demo>
      </div>

      <section className="space-y-6">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">SidebarProvider</h3>
          <PropsTable rows={sidebarProviderProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">Sidebar</h3>
          <PropsTable rows={sidebarProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">SidebarTrigger</h3>
          <PropsTable rows={sidebarTriggerProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">SidebarRail</h3>
          <PropsTable rows={sidebarRailProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">SidebarInset</h3>
          <PropsTable rows={sidebarInsetProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">SidebarInput</h3>
          <PropsTable rows={sidebarInputProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">SidebarHeader</h3>
          <PropsTable rows={sidebarHeaderProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">SidebarFooter</h3>
          <PropsTable rows={sidebarFooterProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">SidebarSeparator</h3>
          <PropsTable rows={sidebarSeparatorProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">SidebarContent</h3>
          <PropsTable rows={sidebarContentProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">SidebarGroup</h3>
          <PropsTable rows={sidebarGroupProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">SidebarGroupLabel</h3>
          <PropsTable rows={sidebarGroupLabelProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">SidebarGroupAction</h3>
          <PropsTable rows={sidebarGroupActionProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">SidebarGroupContent</h3>
          <PropsTable rows={sidebarGroupContentProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">SidebarMenu</h3>
          <PropsTable rows={sidebarMenuProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">SidebarMenuItem</h3>
          <PropsTable rows={sidebarMenuItemProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">SidebarMenuButton</h3>
          <PropsTable rows={sidebarMenuButtonProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">SidebarMenuAction</h3>
          <PropsTable rows={sidebarMenuActionProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">SidebarMenuBadge</h3>
          <PropsTable rows={sidebarMenuBadgeProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">SidebarMenuSkeleton</h3>
          <PropsTable rows={sidebarMenuSkeletonProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">SidebarMenuSub</h3>
          <PropsTable rows={sidebarMenuSubProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">SidebarMenuSubItem</h3>
          <PropsTable rows={sidebarMenuSubItemProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">SidebarMenuSubButton</h3>
          <PropsTable rows={sidebarMenuSubButtonProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">useSidebar()</h3>
          <p className="text-subhead text-label-secondary">Reads the sidebar context. Must be called from a descendant of SidebarProvider. Returns:</p>
          <PropsTable rows={useSidebarReturns} />
        </div>
      </section>
    </article>
  )
}
