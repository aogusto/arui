import { DirectionProvider, Button } from "@aogusto/arui"

export default function Example() {
  return (
    <div className="flex flex-wrap gap-8">
      <DirectionProvider dir="ltr">
        <div dir="ltr" className="space-y-2">
          <p className="text-caption-1 text-label-tertiary">ltr</p>
          <div className="flex gap-2">
            <Button variant="secondary">One</Button>
            <Button variant="secondary">Two</Button>
            <Button variant="secondary">Three</Button>
          </div>
        </div>
      </DirectionProvider>
      <DirectionProvider dir="rtl">
        <div dir="rtl" className="space-y-2">
          <p className="text-caption-1 text-label-tertiary">rtl</p>
          <div className="flex gap-2">
            <Button variant="secondary">One</Button>
            <Button variant="secondary">Two</Button>
            <Button variant="secondary">Three</Button>
          </div>
        </div>
      </DirectionProvider>
    </div>
  )
}
