import { Tabs, TabsList, TabsTrigger, TabsContent } from "@aogusto/arui"

export default function Example() {
  return (
    <Tabs defaultValue="overview" className="w-full max-w-md">
      <TabsList variant="glass">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="activity">Activity</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="p-3 text-subhead text-label-secondary">
        The active pill glides between tabs with a spring, tinted by the theme.
      </TabsContent>
      <TabsContent value="activity" className="p-3 text-subhead text-label-secondary">
        Activity content.
      </TabsContent>
      <TabsContent value="settings" className="p-3 text-subhead text-label-secondary">
        Settings content.
      </TabsContent>
    </Tabs>
  )
}
