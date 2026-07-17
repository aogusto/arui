import { Tabs, TabsList, TabsTrigger, TabsContent } from "@aogusto/arui"
import { LayoutGrid, Bell, Settings } from "lucide-react"

export default function Example() {
  return (
    <Tabs defaultValue="overview" className="w-full max-w-sm">
      <TabsList variant="segmented">
        <TabsTrigger value="overview">
          <LayoutGrid data-icon="inline-start" />
          Overview
        </TabsTrigger>
        <TabsTrigger value="notifications">
          <Bell data-icon="inline-start" />
          Notifications
        </TabsTrigger>
        <TabsTrigger value="settings">
          <Settings data-icon="inline-start" />
          Settings
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="text-footnote text-label-secondary">
        A snapshot of what changed since your last visit.
      </TabsContent>
      <TabsContent value="notifications" className="text-footnote text-label-secondary">
        Email and push preferences for your account.
      </TabsContent>
      <TabsContent value="settings" className="text-footnote text-label-secondary">
        Manage billing and team access.
      </TabsContent>
    </Tabs>
  )
}
