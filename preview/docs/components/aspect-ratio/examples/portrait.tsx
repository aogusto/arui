import { AspectRatio } from "@aogusto/arui"

const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='450'%3E%3Crect width='300' height='450' fill='%23737373'/%3E%3C/svg%3E"

export default function Example() {
  return (
    <div className="w-40">
      <AspectRatio ratio={2 / 3}>
        <img src={placeholder} alt="Movie poster" className="h-full w-full rounded-xl object-cover" />
      </AspectRatio>
    </div>
  )
}
