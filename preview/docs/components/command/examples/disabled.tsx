import { Command, CommandGroup, CommandItem, CommandList } from "@aogusto/arui"
import { Archive, Download, Trash2 } from "lucide-react"

export default function Example() {
  return (
    <Command className="w-full max-w-sm border border-separator">
      <CommandList>
        <CommandGroup heading="Actions">
          <CommandItem>
            <Download />
            <span>Download</span>
          </CommandItem>
          <CommandItem>
            <Archive />
            <span>Archive</span>
          </CommandItem>
          <CommandItem disabled>
            <Trash2 />
            <span>Delete</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
