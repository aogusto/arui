import { Button, ButtonGroup } from "@aogusto/arui"
import { Bold, Italic, Underline } from "lucide-react"

export default function Example() {
  return (
    <ButtonGroup>
      <Button variant="outline" size="icon" aria-label="Bold">
        <Bold />
      </Button>
      <Button variant="outline" size="icon" aria-label="Italic">
        <Italic />
      </Button>
      <Button variant="outline" size="icon" aria-label="Underline">
        <Underline />
      </Button>
    </ButtonGroup>
  )
}
