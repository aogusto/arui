import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

const HIG_TEXT_COLORS = [
  "label",
  "label-secondary",
  "label-tertiary",
  "label-quaternary",
  "hig-accent",
  "hig-accent-foreground",
  "red",
  "orange",
  "yellow",
  "green",
  "mint",
  "teal",
  "cyan",
  "indigo",
  "purple",
  "pink",
  "brown",
]

const HIG_BG_COLORS = [
  ...HIG_TEXT_COLORS,
  "fill",
  "fill-secondary",
  "fill-tertiary",
  "fill-quaternary",
  "background-secondary",
  "background-tertiary",
  "glass-regular",
  "glass-clear",
]

const HIG_BORDER_COLORS = [
  ...HIG_TEXT_COLORS,
  "separator",
  "separator-opaque",
]

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "large-title",
            "title-1",
            "title-2",
            "title-3",
            "headline",
            "body",
            "callout",
            "subhead",
            "footnote",
            "caption-1",
            "caption-2",
          ],
        },
      ],
      "text-color": [{ text: HIG_TEXT_COLORS }],
      "bg-color": [{ bg: HIG_BG_COLORS }],
      "border-color": [{ border: HIG_BORDER_COLORS }],
      "ring-color": [{ ring: HIG_TEXT_COLORS }],
      "shadow": [{ shadow: ["glass", "glass-sm"] }],
      "backdrop-blur": [{ "backdrop-blur": ["glass"] }],
      "ease": [{ ease: ["apple-in", "apple-out", "apple", "apple-spring"] }],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
