import { Kbd, KbdGroup } from "@aogusto/arui"
import { Command, CornerDownLeft, ArrowUp } from "lucide-react"

export default function Example() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <KbdGroup>
        <Kbd>
          <Command />
        </Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
      <Kbd>
        <CornerDownLeft />
      </Kbd>
      <Kbd>
        <ArrowUp />
      </Kbd>
    </div>
  )
}
