import { Skeleton } from "@aogusto/arui"

export default function Example() {
  return (
    <div className="w-64 space-y-3">
      <Skeleton className="h-32 w-full rounded-xl" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  )
}
