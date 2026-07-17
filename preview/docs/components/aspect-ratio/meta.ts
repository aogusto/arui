import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "aspect-ratio",
  name: "Aspect Ratio",
  category: "Data & Display",
  description: "Constrains content, typically an image, video, or embed, to a fixed width to height ratio (like 16 / 9) that holds steady across breakpoints. Built on Radix UI's AspectRatio primitive.",
  imports: ["AspectRatio"],
}

export const props: PropRow[] = [
  {
    prop: "ratio",
    type: "number",
    default: "1",
    description: "The desired width to height ratio, e.g. 16 / 9 for a widescreen box or 2 / 3 for a portrait poster.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes applied to the underlying element. AspectRatio has no default styles of its own to merge with, so this fully controls the box's appearance.",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof AspectRatioPrimitive.Root>",
    description: "Extends AspectRatio.Root from radix-ui. Children fill the ratio box through an absolutely positioned wrapper, so an <img> or <iframe> should use h-full w-full object-cover to fill it.",
  },
]
