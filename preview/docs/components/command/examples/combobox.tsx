import { useState } from "react"
import {
  Button,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@aogusto/arui"
import { ChevronsUpDown } from "lucide-react"

const sellers = ["Acme Co", "Globex", "Initech", "Umbrella"]

export default function Example() {
  const [open, setOpen] = useState(false)
  const [seller, setSeller] = useState("Acme Co")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-56 justify-between">
          {seller}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56 p-0">
        <Command>
          <CommandInput placeholder="Search seller..." />
          <CommandList>
            <CommandEmpty>No seller found.</CommandEmpty>
            <CommandGroup>
              {sellers.map((name) => (
                <CommandItem
                  key={name}
                  value={name}
                  data-checked={seller === name}
                  onSelect={(current) => {
                    setSeller(current)
                    setOpen(false)
                  }}
                >
                  {name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
