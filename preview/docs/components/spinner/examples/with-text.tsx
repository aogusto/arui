import { Spinner } from "@aogusto/arui"

export default function Example() {
  return (
    <div className="flex items-center gap-2">
      <Spinner />
      <span className="text-body text-label-secondary">Loading...</span>
    </div>
  )
}
