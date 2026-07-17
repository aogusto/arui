import { Switch } from "@aogusto/arui"

export default function Example() {
  return (
    <div className="flex items-center gap-4">
      <Switch disabled aria-label="Disabled, off" />
      <Switch disabled defaultChecked aria-label="Disabled, on" />
    </div>
  )
}
