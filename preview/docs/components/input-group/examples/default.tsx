import { InputGroup, InputGroupAddon, InputGroupInput } from "@aogusto/arui"
import { Search } from "lucide-react"

export default function Example() {
  return (
    <InputGroup className="max-w-sm">
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search..." />
    </InputGroup>
  )
}
