import { Button, ButtonGroup, ButtonGroupSeparator } from "@aogusto/arui"
import { ChevronDown } from "lucide-react"

export default function Example() {
  return (
    <ButtonGroup>
      <Button>Save changes</Button>
      <ButtonGroupSeparator />
      <Button size="icon" aria-label="More options">
        <ChevronDown />
      </Button>
    </ButtonGroup>
  )
}
