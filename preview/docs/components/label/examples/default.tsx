import { Label, Input } from "@aogusto/arui"

export default function Example() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
    </div>
  )
}
