import { NativeSelect, NativeSelectOption } from "@aogusto/arui"

export default function Example() {
  return (
    <NativeSelect disabled defaultValue="apple">
      <NativeSelectOption value="apple">Apple</NativeSelectOption>
      <NativeSelectOption value="banana">Banana</NativeSelectOption>
    </NativeSelect>
  )
}
