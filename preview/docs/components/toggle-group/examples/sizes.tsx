import { ToggleGroup, ToggleGroupItem } from "@aogusto/arui"
import { Bold, Italic, Underline } from "lucide-react"

export default function Example() {
  return (
    <div className="flex flex-col items-center gap-4">
      <ToggleGroup type="multiple" variant="outline" size="sm" defaultValue={["bold"]}>
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
      <ToggleGroup type="multiple" variant="outline" defaultValue={["bold"]}>
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
      <ToggleGroup type="multiple" variant="outline" size="lg" defaultValue={["bold"]}>
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
    </div>
  )
}
