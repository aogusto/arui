import { Button } from "@aogusto/arui"
import { Plus } from "lucide-react"

export default function Example() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="xs">Extra small</Button>
      <Button size="sm">Small</Button>
      <Button>Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon-xs" aria-label="Add">
        <Plus />
      </Button>
      <Button size="icon-sm" aria-label="Add">
        <Plus />
      </Button>
      <Button size="icon" aria-label="Add">
        <Plus />
      </Button>
      <Button size="icon-lg" aria-label="Add">
        <Plus />
      </Button>
    </div>
  )
}
