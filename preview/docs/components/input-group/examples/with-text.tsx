import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@aogusto/arui"

export default function Example() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="0.00" inputMode="decimal" />
      </InputGroup>

      <InputGroup>
        <InputGroupInput placeholder="yourcompany" defaultValue="arui" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>.dev</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
