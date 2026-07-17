import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from "@aogusto/arui"
import { Send } from "lucide-react"

export default function Example() {
  return (
    <InputGroup className="max-w-sm">
      <InputGroupAddon align="block-start" className="border-b">
        <InputGroupText>Feedback</InputGroupText>
      </InputGroupAddon>
      <InputGroupTextarea placeholder="Tell us what you think..." rows={3} />
      <InputGroupAddon align="block-end" className="border-t">
        <InputGroupText>0 / 280</InputGroupText>
        <InputGroupButton size="sm" className="ml-auto">
          <Send />
          Send
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}
