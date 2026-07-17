import { Button, Collapsible, CollapsibleContent, CollapsibleTrigger } from "@aogusto/arui"
import { ChevronsUpDown } from "lucide-react"

export default function Example() {
  return (
    <Collapsible className="w-full max-w-sm space-y-2">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-medium">3 collaborators on this project</p>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon-sm" aria-label="Toggle collaborators">
            <ChevronsUpDown />
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border border-border px-4 py-2 text-sm">Alicia Rocha</div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border border-border px-4 py-2 text-sm">Marco Silva</div>
        <div className="rounded-md border border-border px-4 py-2 text-sm">Tomás Weber</div>
      </CollapsibleContent>
    </Collapsible>
  )
}
