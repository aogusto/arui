import { Field, FieldContent, FieldLabel, FieldDescription, Input, Switch } from "@aogusto/arui"

export default function Example() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Field orientation="vertical">
        <FieldLabel htmlFor="orientation-name">Name</FieldLabel>
        <Input id="orientation-name" placeholder="Jane Doe" />
        <FieldDescription>Shown on your public profile.</FieldDescription>
      </Field>

      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="orientation-notifications">Notifications</FieldLabel>
          <FieldDescription>Get notified about new orders.</FieldDescription>
        </FieldContent>
        <Switch id="orientation-notifications" defaultChecked />
      </Field>

      <Field orientation="responsive">
        <FieldLabel htmlFor="orientation-email">Email</FieldLabel>
        <Input id="orientation-email" type="email" placeholder="jane@example.com" />
      </Field>
    </div>
  )
}
