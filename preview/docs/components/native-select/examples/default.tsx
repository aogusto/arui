import { NativeSelect, NativeSelectOption } from "@aogusto/arui"

export default function Example() {
  return (
    <NativeSelect defaultValue="apple">
      <NativeSelectOption value="apple">Apple</NativeSelectOption>
      <NativeSelectOption value="banana">Banana</NativeSelectOption>
      <NativeSelectOption value="grape">Grape</NativeSelectOption>
    </NativeSelect>
  )
}
