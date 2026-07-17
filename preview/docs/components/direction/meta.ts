import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "direction",
  name: "Direction",
  category: "Feedback & Utilities",
  description: "Shares a reading direction (ltr or rtl) with direction aware Radix primitives such as Select, Tabs, Slider, and Menu, keeping their keyboard navigation and layout logic consistent inside an RTL subtree. It renders nothing on its own, so pair it with a native dir attribute on the same wrapper to actually mirror the visual layout.",
  imports: ["DirectionProvider", "useDirection"],
}
