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
      <Carousel orientation="vertical" opts={{ align: "start" }}>
        <CarouselContent className="h-72">
          {["1", "2", "3", "4", "5"].map((label) => (
            <CarouselItem key={label}>
              <div className="flex h-full items-center justify-center rounded-2xl border border-separator bg-background-secondary">
                <span className="text-title-2 font-semibold text-label">{label}</span>
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
