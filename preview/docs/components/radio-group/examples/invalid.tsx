import { Label, RadioGroup, RadioGroupItem } from "@aogusto/arui"

export default function Example() {
  return (
    <div className="grid gap-2">
      <RadioGroup className="max-w-sm">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="monthly" id="billing-monthly" aria-invalid />
          <Label htmlFor="billing-monthly">Monthly</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="yearly" id="billing-yearly" aria-invalid />
          <Label htmlFor="billing-yearly">Yearly</Label>
        </div>
      </RadioGroup>
      <p className="text-footnote text-destructive">Choose a billing cycle to continue.</p>
    </div>
  )
}
