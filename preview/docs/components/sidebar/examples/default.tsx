import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  TooltipProvider,
} from "@aogusto/arui"
import { Home, Inbox, Search, Settings, User } from "lucide-react"

const items = [
  { title: "Home", icon: Home },
  { title: "Inbox", icon: Inbox },
  { title: "Search", icon: Search },
  { title: "Settings", icon: Settings },
]

export default function Example() {
  return (
    <TooltipProvider>
      <div className="relative h-[420px] w-full overflow-hidden rounded-xl border border-sidebar-border">
        <SidebarProvider className="h-full min-h-0">
          <Sidebar collapsible="icon" className="absolute h-full">
            <SidebarHeader>
              <div className="flex items-center gap-2 px-2 py-1.5">
                <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-sidebar-primary text-caption-2 font-semibold text-sidebar-primary-foreground">
                  A
                </div>
                <span className="text-sm font-semibold group-data-[collapsible=icon]:hidden">
                  Acme Inc
                </span>
              </div>
            </SidebarHeader>
            <SidebarSeparator />
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Platform</SidebarGroupLabel>
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
            <SidebarFooter>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Account">
                    <User />
                    <span>Account</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarFooter>
            <SidebarRail />
          </Sidebar>
          <SidebarInset>
            <header className="flex h-12 shrink-0 items-center gap-2 border-b border-separator px-3">
              <SidebarTrigger />
              <span className="text-sm font-medium">Dashboard</span>
            </header>
            <div className="flex-1 overflow-auto p-4">
              <p className="text-sm text-label-secondary">
                Collapse the sidebar with the trigger, the rail at its edge, or Cmd/Ctrl+B.
              </p>
            </div>
          </SidebarInset>
        </SidebarProvider>
      </div>
    </TooltipProvider>
  )
}
