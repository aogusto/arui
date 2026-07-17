import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@aogusto/arui"
import { Mail, X } from "lucide-react"

export default function Example() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <Mail />
        </InputGroupAddon>
        <InputGroupInput placeholder="Inline start" />
      </InputGroup>

      <InputGroup>
        <InputGroupInput placeholder="Inline end" defaultValue="hello@arui.dev" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="icon-xs" aria-label="Clear">
            <X />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupAddon align="block-start" className="border-b">
          <InputGroupText>Block start</InputGroupText>
        </InputGroupAddon>
        <InputGroupTextarea placeholder="The addon sits above the field" rows={2} />
      </InputGroup>

      <InputGroup>
        <InputGroupTextarea placeholder="The addon sits below the field" rows={2} />
        <InputGroupAddon align="block-end" className="border-t">
          <InputGroupText>Block end</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
