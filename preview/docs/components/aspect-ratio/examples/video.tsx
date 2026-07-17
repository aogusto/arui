import { AspectRatio } from "@aogusto/arui"
import { Play } from "lucide-react"

const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='640' height='360'%3E%3Crect width='640' height='360' fill='%23404040'/%3E%3C/svg%3E"

export default function Example() {
  return (
    <div className="w-full max-w-sm">
      <AspectRatio ratio={16 / 9}>
        <img src={placeholder} alt="Video thumbnail" className="h-full w-full rounded-xl object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex size-12 items-center justify-center rounded-full bg-white shadow-md">
            <Play className="size-5 text-black" />
          </div>
        </div>
      </AspectRatio>
    </div>
  )
}
