import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "calendar",
  name: "Calendar",
  category: "Forms & Inputs",
  description: "A date picker built on react-day-picker, styled to match the rest of the library. Supports single, multiple, and range selection, dropdown month and year navigation, and custom disabled-date rules.",
  imports: ["Calendar"],
}
