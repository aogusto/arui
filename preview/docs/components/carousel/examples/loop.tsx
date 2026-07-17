import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@aogusto/arui"

export default function Example() {
  return (
    <div className="w-full max-w-xs p-10">
      <Carousel opts={{ loop: true }}>
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
    </div>
  )
}
