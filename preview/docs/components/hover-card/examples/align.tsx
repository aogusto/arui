import { Button, HoverCard, HoverCardContent, HoverCardTrigger } from "@aogusto/arui"

export default function Example() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline">Start</Button>
        </HoverCardTrigger>
        <HoverCardContent align="start">
          <p className="text-sm text-muted-foreground">Aligned to the start of the trigger.</p>
        </HoverCardContent>
      </HoverCard>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline">Center</Button>
        </HoverCardTrigger>
        <HoverCardContent align="center">
          <p className="text-sm text-muted-foreground">Aligned to the center of the trigger (the default).</p>
        </HoverCardContent>
      </HoverCard>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline">End</Button>
        </HoverCardTrigger>
        <HoverCardContent align="end">
          <p className="text-sm text-muted-foreground">Aligned to the end of the trigger.</p>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}
