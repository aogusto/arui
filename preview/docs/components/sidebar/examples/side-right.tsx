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
  TooltipProvider,
} from "@aogusto/arui"
import { Bell, LayoutGrid, LineChart } from "lucide-react"

const items = [
  { title: "Overview", icon: LayoutGrid },
  { title: "Analytics", icon: LineChart },
  { title: "Notifications", icon: Bell },
]

export default function Example() {
  return (
    <TooltipProvider>
      <div className="relative h-[360px] w-full overflow-hidden rounded-xl border border-sidebar-border">
        <SidebarProvider className="h-full min-h-0">
          <SidebarInset>
            <header className="flex h-12 shrink-0 items-center justify-between gap-2 border-b border-separator px-3">
              <span className="text-sm font-medium">Reports</span>
              <SidebarTrigger />
            </header>
            <div className="flex-1 overflow-auto p-4">
              <p className="text-sm text-label-secondary">
                The trigger still lives in the header since the sidebar itself sits off to the right.
              </p>
            </div>
          </SidebarInset>
          <Sidebar side="right" variant="floating" collapsible="icon" className="absolute h-full">
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Menu</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton tooltip={item.title}>
                          <item.icon />
                          <span>{item.title}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
        </SidebarProvider>
      </div>
    </TooltipProvider>
  )
}
