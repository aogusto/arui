import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "carousel",
  name: "Carousel",
  category: "Data & Display",
  description: "A carousel for cycling through slides one or more at a time, with previous and next controls and swipe, drag and keyboard navigation. Built on Embla, it supports horizontal or vertical orientation and exposes an imperative API for reading or driving the current slide.",
  imports: ["Carousel", "CarouselContent", "CarouselItem", "CarouselPrevious", "CarouselNext"],
}
