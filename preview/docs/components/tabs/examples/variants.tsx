import { Tabs, TabsList, TabsTrigger, TabsContent } from "@aogusto/arui"

export default function Example() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs defaultValue="account">
        <TabsList variant="default">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="text-footnote text-label-secondary">
          Update your name and email address.
        </TabsContent>
        <TabsContent value="password" className="text-footnote text-label-secondary">
          Change your password and two-factor settings.
        </TabsContent>
      </Tabs>

      <Tabs defaultValue="account">
        <TabsList variant="line">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="text-footnote text-label-secondary">
          Update your name and email address.
        </TabsContent>
        <TabsContent value="password" className="text-footnote text-label-secondary">
          Change your password and two-factor settings.
        </TabsContent>
      </Tabs>

      <Tabs defaultValue="account">
        <TabsList variant="segmented">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="text-footnote text-label-secondary">
          Update your name and email address.
        </TabsContent>
        <TabsContent value="password" className="text-footnote text-label-secondary">
          Change your password and two-factor settings.
        </TabsContent>
      </Tabs>
    </div>
  )
}
