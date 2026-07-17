import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  Button,
} from "@aogusto/arui"
import { MoreVertical } from "lucide-react"

export default function Example() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Team members</CardTitle>
        <CardDescription>3 people have access to this project.</CardDescription>
        <CardAction>
          <Button variant="ghost" size="icon-sm">
            <MoreVertical />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Invite more people from the project settings.
        </p>
      </CardContent>
    </Card>
  )
}
