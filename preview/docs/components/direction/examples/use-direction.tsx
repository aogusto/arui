import { DirectionProvider, useDirection, Badge } from "@aogusto/arui"

function CurrentDirection() {
  const dir = useDirection()
  return <Badge variant="secondary">Current direction: {dir}</Badge>
}

export default function Example() {
  return (
    <div className="flex flex-wrap gap-4">
      <DirectionProvider dir="ltr">
        <CurrentDirection />
      </DirectionProvider>
      <DirectionProvider dir="rtl">
        <CurrentDirection />
      </DirectionProvider>
    </div>
  )
}
