import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription } from "@aogusto/arui"
import { Inbox } from "lucide-react"

export default function Example() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Inbox />
        </EmptyMedia>
        <EmptyTitle>No notifications</EmptyTitle>
        <EmptyDescription>
          You are all caught up. New notifications will show up here.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  )
}
