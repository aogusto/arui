import { EmptyMedia } from "@aogusto/arui"
import { Inbox } from "lucide-react"

export default function Example() {
  return (
    <div className="flex flex-wrap items-center gap-10">
      <div className="flex flex-col items-center gap-2">
        <EmptyMedia variant="default">
          <Inbox className="size-8" />
        </EmptyMedia>
        <span className="text-xs text-muted-foreground">default</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <EmptyMedia variant="icon">
          <Inbox />
        </EmptyMedia>
        <span className="text-xs text-muted-foreground">icon</span>
      </div>
    </div>
  )
}
