import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@aogusto/arui"
import { Eye, X } from "lucide-react"

export default function Example() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <InputGroup>
        <InputGroupInput placeholder="Extra small button" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="xs">Clear</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput placeholder="Small button" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="sm">Search</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput placeholder="Icon extra small" defaultValue="Hello" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="icon-xs" aria-label="Clear">
            <X />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput type="password" placeholder="Icon small" defaultValue="secret" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="icon-sm" aria-label="Show password">
            <Eye />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
