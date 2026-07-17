import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "carousel",
  name: "Carousel",
  category: "Data & Display",
  description: "A carousel for cycling through slides one or more at a time, with previous and next controls and swipe, drag and keyboard navigation. Built on Embla, it supports horizontal or vertical orientation and exposes an imperative API for reading or driving the current slide.",
  imports: ["Carousel", "CarouselContent", "CarouselItem", "CarouselPrevious", "CarouselNext"],
}

export const carouselProps: PropRow[] = [
  {
    prop: "opts",
    type: "EmblaOptionsType",
    description: "Options forwarded to Embla, for example { loop: true, align: \"start\" }.",
  },
  {
    prop: "plugins",
    type: "EmblaPluginType[]",
    description: "Embla plugins forwarded to useEmblaCarousel.",
  },
  {
    prop: "orientation",
    type: '"horizontal" | "vertical"',
    default: '"horizontal"',
    description: "Layout direction of the carousel. Vertical also rotates the previous/next buttons 90deg to point up/down.",
  },
  {
    prop: "setApi",
    type: "(api: CarouselApi) => void",
    description: "Called once Embla initializes, handing you the CarouselApi instance to read state or drive navigation imperatively.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"div">',
    description: "The remaining native <div> attributes. Handles ArrowLeft/ArrowRight keyboard navigation and exposes role=\"region\" aria-roledescription=\"carousel\" for assistive tech.",
  },
]

export const carouselContentProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn(). Set a fixed height here for a vertical carousel.",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"div">',
    description: "The remaining native <div> attributes, spread onto the inner track. CarouselItem children go directly inside.",
  },
]

export const carouselItemProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn(). Override the default basis-full (e.g. basis-1/2, md:basis-1/3) to show more than one slide at a time.",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"div">',
    description: "The remaining native <div> attributes. Rendered with role=\"group\" aria-roledescription=\"slide\".",
  },
]

export const carouselPreviousProps: PropRow[] = [
  {
    prop: "variant",
    type: '"default" | "outline" | "secondary" | "ghost" | "destructive" | "link"',
    default: '"outline"',
    description: "Visual style, forwarded to the underlying Button.",
  },
  {
    prop: "size",
    type: '"default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"',
    default: '"icon-sm"',
    description: "Size, forwarded to the underlying Button.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof Button>",
    description: "Extends Button, absolutely positioned over the carousel. Disabled automatically when there is no previous slide to scroll to (never, if opts.loop is true).",
  },
]

export const carouselNextProps: PropRow[] = [
  {
    prop: "variant",
    type: '"default" | "outline" | "secondary" | "ghost" | "destructive" | "link"',
    default: '"outline"',
    description: "Visual style, forwarded to the underlying Button.",
  },
  {
    prop: "size",
    type: '"default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"',
    default: '"icon-sm"',
    description: "Size, forwarded to the underlying Button.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof Button>",
    description: "Extends Button, absolutely positioned over the carousel. Disabled automatically when there is no next slide to scroll to (never, if opts.loop is true).",
  },
]

export const props: PropRow[] = [
  ...carouselProps,
  ...carouselContentProps,
  ...carouselItemProps,
  ...carouselPreviousProps,
  ...carouselNextProps,
]
