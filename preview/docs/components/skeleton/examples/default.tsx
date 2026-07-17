import { Skeleton } from "@aogusto/arui"

export default function Example() {
  return (
    <div className="w-64 space-y-2">
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
    </div>
  )
}
