import { Spinner } from "@aogusto/arui"

export default function Example() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Spinner className="size-3" />
      <Spinner />
      <Spinner className="size-6" />
      <Spinner className="size-8" />
      <Spinner className="size-10" />
    </div>
  )
}
