import { Toggle } from "@aogusto/arui"
import { Bold } from "lucide-react"

export default function Example() {
  return (
    <div className="flex items-center gap-3">
      <Toggle disabled aria-label="Disabled, off">
        <Bold />
      </Toggle>
      <Toggle disabled defaultPressed aria-label="Disabled, on">
        <Bold />
      </Toggle>
    </div>
  )
}
