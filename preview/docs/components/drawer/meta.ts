import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "drawer",
  name: "Drawer",
  category: "Overlays",
  description: "A bottom sheet style panel built on vaul, with a glassmorphism surface and support for all four edges, controlled state and snap points. Great for mobile forms and quick actions.",
  imports: ["Drawer", "DrawerTrigger", "DrawerContent", "DrawerHeader", "DrawerTitle", "DrawerDescription", "DrawerFooter", "DrawerClose"],
}

export const rootProps: PropRow[] = [
  {
    prop: "direction",
    type: '"top" | "bottom" | "left" | "right"',
    default: '"bottom"',
    description: "Edge of the screen the drawer slides in from.",
  },
  {
    prop: "modal",
    type: "boolean",
    default: "true",
    description: "When false, the rest of the page stays interactive while the drawer is open.",
  },
  {
    prop: "dismissible",
    type: "boolean",
    default: "true",
    description: "When false, dragging, clicking outside and Escape no longer close the drawer. Use together with open/onOpenChange.",
  },
  {
    prop: "shouldScaleBackground",
    type: "boolean",
    default: "false",
    description: "Scales the page behind the drawer down for a stacked look while it's open.",
  },
  {
    prop: "snapPoints",
    type: "(number | string)[]",
    description: "Heights (percentages or pixel values) the drawer can rest at while dragging, from least to most visible.",
  },
  {
    prop: "activeSnapPoint",
    type: "number | string | null",
    description: "The currently active snap point. Pair with setActiveSnapPoint to control snapping.",
  },
  {
    prop: "open",
    type: "boolean",
    description: "Controls the open state. Use together with onOpenChange.",
  },
  {
    prop: "onOpenChange",
    type: "(open: boolean) => void",
    description: "Called whenever the open state changes.",
  },
  {
    prop: "defaultOpen",
    type: "boolean",
    default: "false",
    description: "Initial open state for uncontrolled usage.",
  },
  {
    prop: "container",
    type: "HTMLElement | null",
    description: "Element the drawer's portal renders into. Defaults to document.body.",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof DrawerPrimitive.Root>",
    description: "Extends Root from vaul (closeThreshold, handleOnly, fixed, nested, scrollLockTimeout, onClose, and other drag tuning props).",
  },
]

export const triggerCloseProps: PropRow[] = [
  {
    prop: "asChild",
    type: "boolean",
    default: "false",
    description: "Renders the child as the trigger or close element (via Slot), inheriting its behavior.",
  },
  {
    prop: "...props (DrawerTrigger)",
    type: "React.ComponentProps<typeof DrawerPrimitive.Trigger>",
    description: "Extends Trigger from vaul, a native <button>.",
  },
  {
    prop: "...props (DrawerClose)",
    type: "React.ComponentProps<typeof DrawerPrimitive.Close>",
    description: "Extends Close from vaul, a native <button> that closes the drawer on click.",
  },
]

export const contentProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof DrawerPrimitive.Content>",
    description: "Extends Content from vaul (Radix Dialog Content: onOpenAutoFocus, onEscapeKeyDown, onPointerDownOutside, forceMount, etc). Renders inside a portal above a DrawerOverlay, with a drag handle bar shown only when direction is bottom.",
  },
]

export const layoutProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props (DrawerHeader / DrawerFooter)",
    type: 'React.ComponentProps<"div">',
    description: "Extends a native <div>. DrawerHeader centers its text when direction is top or bottom; DrawerFooter pins itself to the bottom of the content with mt-auto.",
  },
  {
    prop: "...props (DrawerTitle)",
    type: "React.ComponentProps<typeof DrawerPrimitive.Title>",
    description: "Extends Title from vaul, an accessible heading tied to the drawer via aria-labelledby.",
  },
  {
    prop: "...props (DrawerDescription)",
    type: "React.ComponentProps<typeof DrawerPrimitive.Description>",
    description: "Extends Description from vaul, tied to the drawer via aria-describedby.",
  },
]

export const props: PropRow[] = [...rootProps, ...triggerCloseProps, ...contentProps, ...layoutProps]
