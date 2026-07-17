import { Button, ButtonGroup, ButtonGroupText } from "@aogusto/arui"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Example() {
  return (
    <ButtonGroup>
      <Button variant="outline" size="icon" aria-label="Previous page">
        <ChevronLeft />
      </Button>
      <ButtonGroupText>Page 1 of 10</ButtonGroupText>
      <Button variant="outline" size="icon" aria-label="Next page">
        <ChevronRight />
      </Button>
    </ButtonGroup>
  )
}
