import { AspectRatio } from "@aogusto/arui"

const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='640' height='360'%3E%3Crect width='640' height='360' fill='%23737373'/%3E%3C/svg%3E"

export default function Example() {
  return (
    <div className="w-full max-w-sm">
      <AspectRatio ratio={16 / 9}>
        <img src={placeholder} alt="Mountain landscape" className="h-full w-full rounded-xl object-cover" />
      </AspectRatio>
    </div>
  )
}
