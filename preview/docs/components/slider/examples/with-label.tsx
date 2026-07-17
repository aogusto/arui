import { useState } from "react"
import { Slider, Label } from "@aogusto/arui"

export default function Example() {
  const [value, setValue] = useState([50])

  return (
    <div className="grid w-full max-w-xs gap-3">
      <div className="flex items-center justify-between">
        <Label htmlFor="volume">Volume</Label>
        <span className="text-caption-1 text-label-tertiary">{value[0]}%</span>
      </div>
      <Slider id="volume" value={value} onValueChange={setValue} />
    </div>
  )
}
