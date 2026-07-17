import {
  ScrollArea,
  ItemGroup,
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemSeparator,
} from "@aogusto/arui"
import { Bell, MessageSquare, UserPlus, CircleCheck } from "lucide-react"

const notifications = [
  {
    icon: MessageSquare,
    title: "New comment",
    description: "Priya replied to your comment on \"Q3 roadmap\".",
  },
  {
    icon: UserPlus,
    title: "New follower",
    description: "Marcus started following your team.",
  },
  {
    icon: CircleCheck,
    title: "Task completed",
    description: "\"Ship dark mode\" was marked as done.",
  },
  {
    icon: Bell,
    title: "Reminder",
    description: "Sprint planning starts in 30 minutes.",
  },
  {
    icon: MessageSquare,
    title: "New comment",
    description: "Ana mentioned you in \"Onboarding checklist\".",
  },
]

export default function Example() {
  return (
    <ScrollArea className="h-72 w-full max-w-sm rounded-md border">
      <ItemGroup className="gap-0 p-2">
        {notifications.map((notification, index) => (
          <div key={notification.title + index} className="flex flex-col">
            {index > 0 ? <ItemSeparator /> : null}
            <Item size="sm">
              <ItemMedia variant="icon">
                <notification.icon />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>{notification.title}</ItemTitle>
                <ItemDescription>{notification.description}</ItemDescription>
              </ItemContent>
            </Item>
          </div>
        ))}
      </ItemGroup>
    </ScrollArea>
  )
}
