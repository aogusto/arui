import { Input, Label } from "@aogusto/arui"

export default function Example() {
  return (
    <div className="grid w-full max-w-xs gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
    </div>
  )
}
