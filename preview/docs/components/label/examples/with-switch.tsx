import { Label, Switch } from "@aogusto/arui"

export default function Example() {
  return (
    <div className="flex w-full max-w-sm items-center justify-between gap-4">
      <Label htmlFor="notifications">Push notifications</Label>
      <Switch id="notifications" />
    </div>
  )
}
