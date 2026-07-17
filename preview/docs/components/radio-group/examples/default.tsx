import { Label, RadioGroup, RadioGroupItem } from "@aogusto/arui"

export default function Example() {
  return (
    <RadioGroup defaultValue="comfortable" className="max-w-sm">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="default" id="density-default" />
        <Label htmlFor="density-default">Default</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="comfortable" id="density-comfortable" />
        <Label htmlFor="density-comfortable">Comfortable</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="compact" id="density-compact" />
        <Label htmlFor="density-compact">Compact</Label>
      </div>
    </RadioGroup>
  )
}
