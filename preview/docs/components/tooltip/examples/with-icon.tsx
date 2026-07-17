import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@aogusto/arui"
import { Plus } from "lucide-react"

export default function Example() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" variant="outline" aria-label="Add item">
            <Plus />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Add item</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
