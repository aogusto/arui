import { ToggleGroup, ToggleGroupItem } from "@aogusto/arui"
import { Sun, Cloud, Moon } from "lucide-react"

export default function Example() {
  return (
    <ToggleGroup type="single" variant="outline" spacing={4} defaultValue="sun">
      <ToggleGroupItem value="sun" aria-label="Sun">
        <Sun />
      </ToggleGroupItem>
      <ToggleGroupItem value="cloud" aria-label="Cloud">
        <Cloud />
      </ToggleGroupItem>
      <ToggleGroupItem value="moon" aria-label="Moon">
        <Moon />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
