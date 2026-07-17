import { FieldLabel, Field, FieldContent, FieldTitle, FieldDescription, RadioGroup, RadioGroupItem } from "@aogusto/arui"

export default function Example() {
  return (
    <RadioGroup defaultValue="pro" className="w-full max-w-md">
      <FieldLabel htmlFor="plan-basic">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>Basic</FieldTitle>
            <FieldDescription>Up to 10 orders per month.</FieldDescription>
          </FieldContent>
          <RadioGroupItem value="basic" id="plan-basic" />
        </Field>
      </FieldLabel>
      <FieldLabel htmlFor="plan-pro">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>Pro</FieldTitle>
            <FieldDescription>Unlimited orders and priority support.</FieldDescription>
          </FieldContent>
          <RadioGroupItem value="pro" id="plan-pro" />
        </Field>
      </FieldLabel>
    </RadioGroup>
  )
}
