import { InputGroup, InputGroupAddon, InputGroupInput } from "@aogusto/arui"
import { Mail } from "lucide-react"

export default function Example() {
  return (
    <InputGroup className="max-w-sm">
      <InputGroupAddon>
        <Mail />
      </InputGroupAddon>
      <InputGroupInput placeholder="Disabled" disabled />
    </InputGroup>
  )
}
