import { Button, Collapsible, CollapsibleContent, CollapsibleTrigger } from "@aogusto/arui"
import { ChevronDown } from "lucide-react"

export default function Example() {
  return (
    <Collapsible className="w-full max-w-sm">
      <CollapsibleTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          What is included in the Pro plan?
          <ChevronDown className="transition-transform duration-200 group-aria-expanded/button:rotate-180" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="overflow-hidden text-sm text-muted-foreground data-open:animate-collapsible-down data-closed:animate-collapsible-up">
        <p className="pt-2">
          Unlimited projects, priority support and access to every component in the registry, including Pro-only blocks.
        </p>
      </CollapsibleContent>
    </Collapsible>
  )
}
