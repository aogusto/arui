import { Progress, Label } from "@aogusto/arui"

export default function Example() {
  return (
    <div className="grid w-full max-w-xs gap-3">
      <div className="flex items-center justify-between">
        <Label htmlFor="upload">Uploading</Label>
        <span className="text-caption-1 text-label-tertiary">60%</span>
      </div>
      <Progress id="upload" value={60} />
    </div>
  )
}
