import { Button, ButtonGroup } from "@aogusto/arui"

export default function Example() {
  return (
    <div className="flex flex-col items-start gap-4">
      <ButtonGroup>
        <Button variant="outline">Day</Button>
        <Button variant="outline">Week</Button>
        <Button variant="outline">Month</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="secondary">Left</Button>
        <Button variant="secondary">Center</Button>
        <Button variant="secondary">Right</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="ghost">One</Button>
        <Button variant="ghost">Two</Button>
        <Button variant="ghost">Three</Button>
      </ButtonGroup>
    </div>
  )
}
