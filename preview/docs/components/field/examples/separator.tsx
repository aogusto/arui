import { FieldGroup, Field, FieldLabel, FieldSeparator, Button, Input } from "@aogusto/arui"

export default function Example() {
  return (
    <FieldGroup className="w-full max-w-md">
      <Field>
        <Button variant="outline">Continue with Google</Button>
      </Field>
      <FieldSeparator>Or continue with email</FieldSeparator>
      <Field>
        <FieldLabel htmlFor="signup-email">Email</FieldLabel>
        <Input id="signup-email" type="email" placeholder="jane@example.com" />
      </Field>
    </FieldGroup>
  )
}
