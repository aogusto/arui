import { Toggle } from "@aogusto/arui"
import { Bold, Italic, Underline } from "lucide-react"

export default function Example() {
  return (
    <div className="flex items-center gap-1">
      <Toggle variant="outline" size="sm" defaultPressed aria-label="Toggle bold">
        <Bold />
      </Toggle>
      <Toggle variant="outline" size="sm" aria-label="Toggle italic">
        <Italic />
      </Toggle>
      <Toggle variant="outline" size="sm" aria-label="Toggle underline">
        <Underline />
      </Toggle>
    </div>
  )
}
