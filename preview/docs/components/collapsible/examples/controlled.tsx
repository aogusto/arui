import { useState } from "react"
import { Button, Collapsible, CollapsibleContent, CollapsibleTrigger } from "@aogusto/arui"

export default function Example() {
  const [open, setOpen] = useState(false)

  return (
    <div className="w-full max-w-sm space-y-3">
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" onClick={() => setOpen(true)}>
          Open
        </Button>
        <Button variant="outline" size="sm" onClick={() => setOpen(false)}>
          Close
        </Button>
        <span className="text-sm text-muted-foreground">Currently {open ? "open" : "closed"}</span>
      </div>
      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-full justify-start">
            {open ? "Hide" : "Show"} shipping address
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="px-3 pt-2 text-sm text-muted-foreground">
          Rua Augusta, 500, São Paulo, SP, Brazil
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
