import { Button, ButtonGroup } from "@aogusto/arui"

export default function Example() {
  return (
    <div className="flex flex-wrap items-start gap-8">
      <ButtonGroup orientation="horizontal">
        <Button variant="outline">Left</Button>
        <Button variant="outline">Center</Button>
        <Button variant="outline">Right</Button>
      </ButtonGroup>
      <ButtonGroup orientation="vertical">
        <Button variant="outline">Top</Button>
        <Button variant="outline">Middle</Button>
        <Button variant="outline">Bottom</Button>
      </ButtonGroup>
    </div>
  )
}
