import { NativeSelect, NativeSelectOption, Label } from "@aogusto/arui"

export default function Example() {
  return (
    <div className="grid w-full max-w-xs gap-1.5">
      <Label htmlFor="country">Country</Label>
      <NativeSelect id="country" defaultValue="br">
        <NativeSelectOption value="br">Brazil</NativeSelectOption>
        <NativeSelectOption value="us">United States</NativeSelectOption>
        <NativeSelectOption value="pt">Portugal</NativeSelectOption>
      </NativeSelect>
    </div>
  )
}
