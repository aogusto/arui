import { Button, Collapsible, CollapsibleContent, CollapsibleTrigger } from "@aogusto/arui"
import { ChevronsUpDown } from "lucide-react"

export default function Example() {
  return (
    <Collapsible disabled className="w-full max-w-sm space-y-2">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-medium text-muted-foreground">Advanced settings (Pro plan only)</p>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon-sm" aria-label="Toggle advanced settings">
            <ChevronsUpDown />
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="text-sm text-muted-foreground">
        Custom domains, webhooks and SSO.
      </CollapsibleContent>
    </Collapsible>
  )
}
