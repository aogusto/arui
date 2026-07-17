import { Progress } from "@aogusto/arui"

export default function Example() {
  return (
    <div className="grid w-full max-w-xs gap-4">
      <Progress value={25} />
      <Progress value={60} />
      <Progress value={90} />
    </div>
  )
}
