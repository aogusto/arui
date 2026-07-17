import { DirectionProvider, useDirection, Badge } from "@aogusto/arui"

function DirectionLabel() {
  const dir = useDirection()
  return <Badge variant="outline">{dir}</Badge>
}

export default function Example() {
  return (
    <DirectionProvider dir="rtl">
      <div dir="rtl" className="flex flex-col items-end gap-3">
        <div className="flex items-center gap-2">
          <DirectionLabel />
          <span className="text-body text-label-secondary">Outer app shell reads right to left.</span>
        </div>
        <DirectionProvider dir="ltr">
          <div dir="ltr" className="flex items-center gap-2 rounded-lg border border-separator px-3 py-2">
            <DirectionLabel />
            <code className="font-mono text-caption-1">const total = 42</code>
          </div>
        </DirectionProvider>
      </div>
    </DirectionProvider>
  )
}
