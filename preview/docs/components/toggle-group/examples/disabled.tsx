import { ToggleGroup, ToggleGroupItem } from "@aogusto/arui"
import { Bold, Italic, Underline } from "lucide-react"

export default function Example() {
  return (
    <ToggleGroup type="multiple" disabled defaultValue={["bold"]}>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
