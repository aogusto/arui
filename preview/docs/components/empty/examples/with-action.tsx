import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  Button,
} from "@aogusto/arui"
import { Users } from "lucide-react"

export default function Example() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Users />
        </EmptyMedia>
        <EmptyTitle>No team members</EmptyTitle>
        <EmptyDescription>
          Invite people to collaborate on this project.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Invite member</Button>
      </EmptyContent>
    </Empty>
  )
}
