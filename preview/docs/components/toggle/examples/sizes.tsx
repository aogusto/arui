import { Toggle } from "@aogusto/arui"
import { Bold } from "lucide-react"

export default function Example() {
  return (
    <div className="flex items-center gap-3">
      <Toggle size="sm" variant="outline" aria-label="Small">
        <Bold />
      </Toggle>
      <Toggle size="default" variant="outline" aria-label="Default">
        <Bold />
      </Toggle>
      <Toggle size="lg" variant="outline" aria-label="Large">
        <Bold />
      </Toggle>
    </div>
  )
}
