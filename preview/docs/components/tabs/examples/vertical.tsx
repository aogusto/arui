import { Tabs, TabsList, TabsTrigger, TabsContent } from "@aogusto/arui"

export default function Example() {
  return (
    <Tabs defaultValue="general" orientation="vertical" className="w-full max-w-sm">
      <TabsList variant="line">
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="members">Members</TabsTrigger>
        <TabsTrigger value="billing">Billing</TabsTrigger>
      </TabsList>
      <TabsContent value="general" className="text-footnote text-label-secondary">
        Workspace name, timezone, and default language.
      </TabsContent>
      <TabsContent value="members" className="text-footnote text-label-secondary">
        Invite teammates and manage their roles.
      </TabsContent>
      <TabsContent value="billing" className="text-footnote text-label-secondary">
        Plan, payment method, and invoices.
      </TabsContent>
    </Tabs>
  )
}
