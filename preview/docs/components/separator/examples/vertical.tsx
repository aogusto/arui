import { Button, Separator } from "@aogusto/arui"
import { Bold, Italic, Underline } from "lucide-react"

export default function Example() {
  return (
    <div className="flex h-9 items-center gap-1 rounded-lg border border-separator px-1">
      <Button variant="ghost" size="icon-sm" aria-label="Bold">
        <Bold />
      </Button>
      <Button variant="ghost" size="icon-sm" aria-label="Italic">
        <Italic />
      </Button>
      <Separator orientation="vertical" className="mx-1 h-5" />
      <Button variant="ghost" size="icon-sm" aria-label="Underline">
        <Underline />
      </Button>
    </div>
  )
}
