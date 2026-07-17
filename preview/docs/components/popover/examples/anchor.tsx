import { Button, Popover, PopoverAnchor, PopoverContent, PopoverDescription, PopoverTrigger } from "@aogusto/arui"
import { Info } from "lucide-react"

export default function Example() {
  return (
    <Popover>
      <PopoverAnchor asChild>
        <div className="flex items-center gap-2 rounded-md border border-input px-3 py-2 text-sm">
          <span>Seller status: active</span>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon-sm" aria-label="More info">
              <Info />
            </Button>
          </PopoverTrigger>
        </div>
      </PopoverAnchor>
      <PopoverContent>
        <PopoverDescription>
          The popover opens next to the anchor element, not necessarily next to the trigger that opened it.
        </PopoverDescription>
      </PopoverContent>
    </Popover>
  )
}
