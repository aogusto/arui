import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "sonner",
  name: "Sonner (Toaster)",
  category: "Feedback & Utilities",
  description: "A themed wrapper around sonner's Toaster, styled with the glass surface and preset icons for success, info, warning, error, and loading states. Pair it with the toast() function from sonner to trigger notifications from anywhere in the app.",
  imports: ["Toaster"],
}

export const props: PropRow[] = [
  {
    prop: "theme",
    type: '"light" | "dark" | "system"',
    default: '"system"',
    description: "Color theme applied to the toasts. Resolved automatically from the app's next-themes provider, so you usually don't need to pass it yourself.",
  },
  {
    prop: "position",
    type: '"top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center"',
    default: '"bottom-right"',
    description: "Where the toast stack is anchored on the screen.",
  },
  {
    prop: "richColors",
    type: "boolean",
    default: "false",
    description: "Applies a bold background color per toast type (success, error, etc) instead of the neutral glass surface.",
  },
  {
    prop: "expand",
    type: "boolean",
    default: "false",
    description: "Expands all toasts by default instead of collapsing them into a stack.",
  },
  {
    prop: "duration",
    type: "number",
    default: "4000",
    description: "Default time in milliseconds before a toast auto dismisses.",
  },
  {
    prop: "closeButton",
    type: "boolean",
    default: "false",
    description: "Shows a dismiss button on every toast.",
  },
  {
    prop: "icons",
    type: "ToastIcons",
    default: "success / info / warning / error / loading icons from lucide-react",
    description: "Icons rendered per toast type. This wrapper presets all five; pass your own object to override any of them.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof Sonner>",
    description: "Extends the Toaster component from sonner (richColors, gap, visibleToasts, offset, hotkey, dir, toastOptions, and more).",
  },
]
