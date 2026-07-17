import { Checkbox, Label } from "@aogusto/arui"

export default function Example() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="marketing-emails" defaultChecked />
      <Label htmlFor="marketing-emails">Send me marketing emails</Label>
    </div>
  )
}
