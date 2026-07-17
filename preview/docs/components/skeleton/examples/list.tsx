import { Skeleton } from "@aogusto/arui"

export default function Example() {
  return (
    <div className="w-72 space-y-4">
      {[0, 1, 2].map((row) => (
        <div key={row} className="flex items-center gap-3">
          <Skeleton className="size-10 rounded-full" />
          <Skeleton className="h-4 flex-1" />
        </div>
      ))}
    </div>
  )
}
