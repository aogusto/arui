import { Label, Input } from "@aogusto/arui"

export default function Example() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Label htmlFor="full-name">
        Full name <span className="text-destructive">*</span>
      </Label>
      <Input id="full-name" placeholder="Ada Lovelace" required />
    </div>
  )
}
