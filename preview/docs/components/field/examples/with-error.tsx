import { Field, FieldLabel, FieldError, Input } from "@aogusto/arui"

export default function Example() {
  return (
    <Field data-invalid="true" className="w-full max-w-md">
      <FieldLabel htmlFor="error-username">Username</FieldLabel>
      <Input id="error-username" aria-invalid defaultValue="jane doe" />
      <FieldError>Username cannot contain spaces.</FieldError>
    </Field>
  )
}
