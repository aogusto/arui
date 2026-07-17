import { Toggle } from "@aogusto/arui"
import { Bold } from "lucide-react"

export default function Example() {
  return (
    <div className="flex items-center gap-3">
      <Toggle variant="default" defaultPressed aria-label="Toggle bold">
        <Bold />
      </Toggle>
      <Toggle variant="outline" defaultPressed aria-label="Toggle bold">
        <Bold />
      </Toggle>
    </div>
  )
}
