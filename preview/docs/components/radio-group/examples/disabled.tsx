import { Label, RadioGroup, RadioGroupItem } from "@aogusto/arui"

export default function Example() {
  return (
    <RadioGroup defaultValue="tier-starter" className="max-w-sm">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="tier-starter" id="tier-starter" />
        <Label htmlFor="tier-starter">Starter</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="tier-pro" id="tier-pro" />
        <Label htmlFor="tier-pro">Pro</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="tier-enterprise" id="tier-enterprise" disabled />
        <Label htmlFor="tier-enterprise">Enterprise (coming soon)</Label>
      </div>
    </RadioGroup>
  )
}
