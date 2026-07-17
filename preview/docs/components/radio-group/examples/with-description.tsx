import { Label, RadioGroup, RadioGroupItem } from "@aogusto/arui"

export default function Example() {
  return (
    <RadioGroup defaultValue="pro" className="max-w-sm">
      <Label htmlFor="plan-starter" className="items-start gap-3 rounded-xl border border-input p-4">
        <RadioGroupItem value="starter" id="plan-starter" className="mt-1" />
        <span className="grid gap-1">
          <span className="text-callout font-medium">Starter</span>
          <span className="text-footnote text-label-secondary">For solo projects, up to 3 seats</span>
        </span>
      </Label>
      <Label htmlFor="plan-pro" className="items-start gap-3 rounded-xl border border-input p-4">
        <RadioGroupItem value="pro" id="plan-pro" className="mt-1" />
        <span className="grid gap-1">
          <span className="text-callout font-medium">Pro</span>
          <span className="text-footnote text-label-secondary">Unlimited seats and priority support</span>
        </span>
      </Label>
    </RadioGroup>
  )
}
