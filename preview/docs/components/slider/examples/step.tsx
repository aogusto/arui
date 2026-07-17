import { Slider } from "@aogusto/arui"

export default function Example() {
  return <Slider defaultValue={[20]} min={0} max={100} step={10} className="w-full max-w-xs" />
}
