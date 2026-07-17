import { ToggleGroup, ToggleGroupItem } from "@aogusto/arui"
import { LayoutGrid, List } from "lucide-react"

export default function Example() {
  return (
    <ToggleGroup type="single" variant="outline" defaultValue="grid">
      <ToggleGroupItem value="grid" aria-label="Grid view">
        <LayoutGrid />
        Grid
      </ToggleGroupItem>
      <ToggleGroupItem value="list" aria-label="List view">
        <List />
        List
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
