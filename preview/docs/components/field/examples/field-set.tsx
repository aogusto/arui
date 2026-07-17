import { FieldSet, FieldLegend, FieldGroup, Field, FieldLabel, FieldDescription, Input } from "@aogusto/arui"

export default function Example() {
  return (
    <FieldSet className="w-full max-w-md">
      <FieldLegend>Shipping address</FieldLegend>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="set-street">Street</FieldLabel>
          <Input id="set-street" placeholder="123 Main St" />
        </Field>
        <Field>
          <FieldLabel htmlFor="set-city">City</FieldLabel>
          <Input id="set-city" placeholder="Springfield" />
          <FieldDescription>Used to calculate delivery time.</FieldDescription>
        </Field>
      </FieldGroup>
    </FieldSet>
  )
}
