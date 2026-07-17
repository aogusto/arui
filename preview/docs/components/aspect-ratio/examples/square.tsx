import { AspectRatio } from "@aogusto/arui"

const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect width='400' height='400' fill='%23737373'/%3E%3C/svg%3E"

export default function Example() {
  return (
    <div className="grid w-full max-w-sm grid-cols-3 gap-2">
      {["Alpha", "Bravo", "Charlie"].map((label) => (
        <AspectRatio key={label} ratio={1}>
          <img src={placeholder} alt={label} className="h-full w-full rounded-lg object-cover" />
        </AspectRatio>
      ))}
    </div>
  )
}
