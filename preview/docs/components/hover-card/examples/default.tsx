import {
  Avatar,
  AvatarFallback,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@aogusto/arui"
import { CalendarDays } from "lucide-react"

export default function Example() {
  return (
    <HoverCard>
      <HoverCardTrigger
        href="#"
        className="font-medium text-primary underline-offset-4 hover:underline"
      >
        @arui
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex gap-3">
          <Avatar size="lg">
            <AvatarFallback>AR</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-foreground">arui</h4>
            <p className="text-sm text-muted-foreground">
              Open source component registry built with Radix UI and Tailwind CSS.
            </p>
            <div className="flex items-center gap-1.5 pt-1">
              <CalendarDays className="size-3.5 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Joined December 2024</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
