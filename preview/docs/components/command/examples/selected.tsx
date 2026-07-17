import { useState } from "react"
import { Command, CommandGroup, CommandItem, CommandList } from "@aogusto/arui"
import { Laptop, Moon, Sun } from "lucide-react"

const themes = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Laptop },
]

export default function Example() {
  const [theme, setTheme] = useState("system")

  return (
    <Command className="w-full max-w-sm border border-separator">
      <CommandList>
        <CommandGroup heading="Theme">
          {themes.map(({ value, label, icon: Icon }) => (
            <CommandItem key={value} value={value} data-checked={theme === value} onSelect={setTheme}>
              <Icon />
              <span>{label}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
