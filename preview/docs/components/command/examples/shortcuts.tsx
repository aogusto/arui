import { Command, CommandGroup, CommandItem, CommandList, CommandShortcut } from "@aogusto/arui"
import { ClipboardPaste, Copy, Scissors } from "lucide-react"

export default function Example() {
  return (
    <Command className="w-full max-w-sm border border-separator">
      <CommandList>
        <CommandGroup heading="Edit">
          <CommandItem>
            <Scissors />
            <span>Cut</span>
            <CommandShortcut>⌘X</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Copy />
            <span>Copy</span>
            <CommandShortcut>⌘C</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <ClipboardPaste />
            <span>Paste</span>
            <CommandShortcut>⌘V</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
