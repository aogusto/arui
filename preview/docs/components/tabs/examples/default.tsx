import { Tabs, TabsList, TabsTrigger, TabsContent } from "@aogusto/arui"

export default function Example() {
  return (
    <Tabs defaultValue="overview" className="w-full max-w-sm">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="text-footnote text-label-secondary">
        A snapshot of what changed since your last visit.
      </TabsContent>
      <TabsContent value="analytics" className="text-footnote text-label-secondary">
        Traffic, conversion, and retention over the last 30 days.
      </TabsContent>
      <TabsContent value="settings" className="text-footnote text-label-secondary">
        Manage notifications, billing, and team access.
      </TabsContent>
    </Tabs>
  )
}
