import { useEffect, useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@aogusto/arui"

export default function Example() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(1)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    const onSelect = () => setCurrent(api.selectedScrollSnap() + 1)
    api.on("select", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <div className="w-full max-w-xs space-y-3 p-10">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {["1", "2", "3", "4", "5"].map((label) => (
            <CarouselItem key={label}>
              <div className="flex aspect-square items-center justify-center rounded-2xl border border-separator bg-background-secondary">
                <span className="text-title-1 font-semibold text-label">{label}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <p className="text-center text-footnote text-label-secondary">
        Slide {current} of {count}
      </p>
    </div>
  )
}
