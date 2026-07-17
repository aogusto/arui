import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "sheet",
  name: "Sheet",
  category: "Overlays",
  description: "A panel that slides in from an edge of the screen, built on the same modal primitive as Dialog. Good fit for filters, details, and forms that don't need a full page.",
  imports: [
    "Sheet",
    "SheetTrigger",
    "SheetContent",
    "SheetHeader",
    "SheetFooter",
    "SheetTitle",
    "SheetDescription",
    "SheetClose",
  ],
}

export const sheetProps: PropRow[] = [
  {
    prop: "...props",
    type: "React.ComponentProps<typeof SheetPrimitive.Root>",
    description: "Extends Dialog.Root from radix-ui (open, defaultOpen, onOpenChange, modal).",
  },
]

export const sheetTriggerProps: PropRow[] = [
  {
    prop: "...props",
    type: "React.ComponentProps<typeof SheetPrimitive.Trigger>",
    description: "Extends Dialog.Trigger from radix-ui. Renders a button by default; pass asChild to render your own trigger element instead.",
  },
]

export const sheetContentProps: PropRow[] = [
  {
    prop: "side",
    type: '"top" | "right" | "bottom" | "left"',
    default: '"right"',
    description: "Edge of the screen the panel slides in from. Controls position, size, entry border and animation direction.",
  },
  {
    prop: "showCloseButton",
    type: "boolean",
    default: "true",
    description: "Renders the built in close button (an icon Button) pinned to the top right corner.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof SheetPrimitive.Content>",
    description: "Extends Dialog.Content from radix-ui. Rendered inside a SheetPortal, right after a SheetOverlay.",
  },
]

export const sheetHeaderProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"div">',
    description: "The remaining native <div> attributes.",
  },
]

export const sheetFooterProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"div">',
    description: "The remaining native <div> attributes. Uses mt-auto so it sticks to the bottom of the panel regardless of content length.",
  },
]

export const sheetTitleProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof SheetPrimitive.Title>",
    description: "Extends Dialog.Title from radix-ui.",
  },
]

export const sheetDescriptionProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof SheetPrimitive.Description>",
    description: "Extends Dialog.Description from radix-ui.",
  },
]

export const sheetCloseProps: PropRow[] = [
  {
    prop: "...props",
    type: "React.ComponentProps<typeof SheetPrimitive.Close>",
    description: "Extends Dialog.Close from radix-ui. Renders a button that closes the sheet; pass asChild to render your own element.",
  },
]

export const props: PropRow[] = [
  ...sheetProps,
  ...sheetTriggerProps,
  ...sheetContentProps,
  ...sheetHeaderProps,
  ...sheetFooterProps,
  ...sheetTitleProps,
  ...sheetDescriptionProps,
  ...sheetCloseProps,
]
