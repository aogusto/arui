import { Switch } from "@aogusto/arui"

export default function Example() {
  return (
    <div className="flex items-center gap-4">
      <Switch size="sm" defaultChecked aria-label="Small" />
      <Switch size="default" defaultChecked aria-label="Default" />
    </div>
  )
}
