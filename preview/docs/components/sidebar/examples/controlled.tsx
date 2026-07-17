import { useState } from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@aogusto/arui"
import { FileText, Layers } from "lucide-react"

function StatusPill() {
  const { state } = useSidebar()
  return (
    <span className="rounded-full bg-sidebar-accent px-2 py-0.5 text-xs font-medium text-sidebar-accent-foreground">
      {state}
    </span>
  )
}

export default function Example() {
  const [open, setOpen] = useState(true)

  return (
    <div className="relative h-[360px] w-full overflow-hidden rounded-xl border border-sidebar-border">
      <SidebarProvider open={open} onOpenChange={setOpen} className="h-full min-h-0">
        <Sidebar collapsible="icon" className="absolute h-full">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Docs</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <FileText />
                      <span>Guides</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Layers />
                      <span>Components</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <header className="flex h-12 shrink-0 items-center gap-2 border-b border-separator px-3">
            <SidebarTrigger />
            <span className="text-sm font-medium">Controlled state</span>
            <StatusPill />
          </header>
          <div className="flex-1 overflow-auto p-4">
            <p className="text-sm text-label-secondary">
              open is lifted to this example's own useState, so it can be read or set from outside the sidebar too.
            </p>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
