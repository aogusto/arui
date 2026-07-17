import { Label, Checkbox } from "@aogusto/arui"

export default function Example() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="disabled-terms" disabled />
      <Label htmlFor="disabled-terms">Accept terms and conditions</Label>
    </div>
  )
}
