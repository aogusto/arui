import {
  Avatar,
  AvatarFallback,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@aogusto/arui"

function Mention({
  handle,
  name,
  role,
  initials,
}: {
  handle: string
  name: string
  role: string
  initials: string
}) {
  return (
    <HoverCard>
      <HoverCardTrigger
        href="#"
        className="font-medium text-primary underline-offset-4 hover:underline"
      >
        {handle}
      </HoverCardTrigger>
      <HoverCardContent className="w-56">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-semibold text-foreground">{name}</p>
            <p className="text-xs text-muted-foreground">{role}</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export default function Example() {
  return (
    <p className="max-w-md text-sm text-muted-foreground">
      This order was reviewed by{" "}
      <Mention handle="@marianac" name="Mariana Costa" role="Support lead" initials="MC" /> and
      approved by{" "}
      <Mention handle="@paulol" name="Paulo Lima" role="Operations manager" initials="PL" />.
    </p>
  )
}
