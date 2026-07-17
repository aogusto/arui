import { Badge } from "@aogusto/arui"

export default function Example() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge variant="outline">Valid</Badge>
      <Badge variant="outline" aria-invalid>
        Invalid
      </Badge>
    </div>
  )
}
