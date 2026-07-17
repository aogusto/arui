import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@aogusto/arui"

export default function Example() {
  return (
    <div className="w-full max-w-sm p-10">
      <Carousel opts={{ align: "start" }}>
        <CarouselContent>
          {["1", "2", "3", "4", "5", "6"].map((label) => (
            <CarouselItem key={label} className="basis-1/2 md:basis-1/3">
              <div className="flex aspect-square items-center justify-center rounded-2xl border border-separator bg-background-secondary">
                <span className="text-title-3 font-semibold text-label">{label}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
