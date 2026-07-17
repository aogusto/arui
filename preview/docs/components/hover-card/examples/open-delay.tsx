import { Button, HoverCard, HoverCardContent, HoverCardTrigger } from "@aogusto/arui"

export default function Example() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline">Default timing</Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <p className="text-sm text-muted-foreground">
            Opens after 700ms of hover and closes 300ms after the pointer leaves (the defaults).
          </p>
        </HoverCardContent>
      </HoverCard>
      <HoverCard openDelay={100} closeDelay={0}>
        <HoverCardTrigger asChild>
          <Button variant="secondary">Fast timing</Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <p className="text-sm text-muted-foreground">
            Opens after only 100ms and closes immediately when the pointer leaves.
          </p>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}
