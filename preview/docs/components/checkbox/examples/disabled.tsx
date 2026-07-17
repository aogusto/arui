import { Checkbox } from "@aogusto/arui"

export default function Example() {
  return (
    <div className="flex items-center gap-4">
      <Checkbox disabled aria-label="Disabled, unchecked" />
      <Checkbox disabled defaultChecked aria-label="Disabled, checked" />
    </div>
  )
}
