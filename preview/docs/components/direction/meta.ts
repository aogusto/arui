import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "direction",
  name: "Direction",
  category: "Feedback & Utilities",
  description: "Shares a reading direction (ltr or rtl) with direction aware Radix primitives such as Select, Tabs, Slider, and Menu, keeping their keyboard navigation and layout logic consistent inside an RTL subtree. It renders nothing on its own, so pair it with a native dir attribute on the same wrapper to actually mirror the visual layout.",
  imports: ["DirectionProvider", "useDirection"],
}

export const directionProviderProps: PropRow[] = [
  {
    prop: "dir",
    type: '"ltr" | "rtl"',
    description: "The reading direction shared with descendants through context. Direction aware primitives (Select, Tabs, Slider, Menu, and others) read it to resolve keyboard navigation and layout logic.",
  },
  {
    prop: "direction",
    type: '"ltr" | "rtl"',
    description: "Alias for dir. Takes precedence over dir when both are provided.",
  },
  {
    prop: "children",
    type: "React.ReactNode",
    description: "The subtree that should read this direction. DirectionProvider renders no DOM element of its own, only React context, so it doesn't accept className or other HTML attributes.",
  },
]

export const useDirectionProps: PropRow[] = [
  {
    prop: "localDir",
    type: '"ltr" | "rtl" | undefined',
    description: "Optional explicit direction for this call. Takes precedence over the nearest DirectionProvider above it.",
  },
  {
    prop: "returns",
    type: '"ltr" | "rtl"',
    description: "The resolved direction: localDir if provided, otherwise the nearest DirectionProvider's dir, otherwise \"ltr\".",
  },
]

export const props: PropRow[] = [...directionProviderProps, ...useDirectionProps]
