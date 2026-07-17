import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "dialog",
  name: "Dialog",
  category: "Overlays",
  description: "A modal window that interrupts the page to focus attention on a single task, such as a confirmation, a form, or a piece of detail. Composed of a trigger and a portalled, centered content with a glass surface, an optional header and footer, and a built-in close button.",
  imports: ["Dialog", "DialogTrigger", "DialogContent", "DialogHeader", "DialogTitle", "DialogDescription", "DialogFooter", "DialogClose"],
}

export const dialogProps: PropRow[] = [
  {
    prop: "...props",
    type: "React.ComponentProps<typeof DialogPrimitive.Root>",
    description: "Extends Radix's Dialog.Root. Common props: open, defaultOpen, onOpenChange, modal. Uncontrolled by default; control it yourself to close the dialog programmatically, for example after a form submits.",
  },
]

export const dialogTriggerProps: PropRow[] = [
  {
    prop: "...props",
    type: "React.ComponentProps<typeof DialogPrimitive.Trigger>",
    description: "Extends Radix's Dialog.Trigger. Pass asChild to render your own element (typically a Button) instead of the default button.",
  },
]

export const dialogContentProps: PropRow[] = [
  {
    prop: "showCloseButton",
    type: "boolean",
    default: "true",
    description: "Shows the close (X) icon button in the top right corner.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof DialogPrimitive.Content>",
    description: "Extends Radix's Dialog.Content. Rendered inside a portal with an overlay behind it, centered on screen with a glass (regular material) surface, and animates in and out.",
  },
]

export const dialogHeaderProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"div">',
    description: "The remaining native <div> attributes. Stacks DialogTitle and DialogDescription vertically.",
  },
]

export const dialogFooterProps: PropRow[] = [
  {
    prop: "showCloseButton",
    type: "boolean",
    default: "false",
    description: "Appends a default outline Close button after the footer's children.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"div">',
    description: "The remaining native <div> attributes. Stacks actions on mobile and right-aligns them from sm up.",
  },
]

export const dialogTitleProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof DialogPrimitive.Title>",
    description: "Extends Radix's Dialog.Title. Required for accessibility, it labels the dialog for assistive tech.",
  },
]

export const dialogDescriptionProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof DialogPrimitive.Description>",
    description: "Extends Radix's Dialog.Description. Optional but recommended, it describes the dialog for assistive tech; nested links are styled automatically.",
  },
]

export const dialogCloseProps: PropRow[] = [
  {
    prop: "...props",
    type: "React.ComponentProps<typeof DialogPrimitive.Close>",
    description: "Extends Radix's Dialog.Close. Closes the dialog when its child is activated. Pass asChild to render your own element (typically a Button).",
  },
]

export const props: PropRow[] = [
  ...dialogProps,
  ...dialogTriggerProps,
  ...dialogContentProps,
  ...dialogHeaderProps,
  ...dialogFooterProps,
  ...dialogTitleProps,
  ...dialogDescriptionProps,
  ...dialogCloseProps,
]
