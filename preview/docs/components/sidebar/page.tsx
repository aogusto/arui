import { Demo } from "../../Demo"
import { PropsTable } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import {
  meta,
  sidebarProviderProps,
  sidebarProps,
  sidebarTriggerProps,
  sidebarRailProps,
  sidebarInsetProps,
  sidebarInputProps,
  sidebarHeaderProps,
  sidebarFooterProps,
  sidebarSeparatorProps,
  sidebarContentProps,
  sidebarGroupProps,
  sidebarGroupLabelProps,
  sidebarGroupActionProps,
  sidebarGroupContentProps,
  sidebarMenuProps,
  sidebarMenuItemProps,
  sidebarMenuButtonProps,
  sidebarMenuActionProps,
  sidebarMenuBadgeProps,
  sidebarMenuSkeletonProps,
  sidebarMenuSubProps,
  sidebarMenuSubItemProps,
  sidebarMenuSubButtonProps,
  useSidebarReturns,
} from "./meta"

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
