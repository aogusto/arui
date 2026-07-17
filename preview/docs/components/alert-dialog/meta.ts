import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "alert-dialog",
  name: "Alert Dialog",
  category: "Overlays",
  description: "A modal that interrupts the user to confirm a destructive or otherwise consequential action, pairing a title and description with Cancel and Action buttons. Unlike Dialog, it cannot be dismissed by clicking outside the content, and focuses Cancel by default so the user has to make an explicit choice.",
  imports: [
    "AlertDialog",
    "AlertDialogTrigger",
    "AlertDialogContent",
    "AlertDialogHeader",
    "AlertDialogFooter",
    "AlertDialogTitle",
    "AlertDialogDescription",
    "AlertDialogMedia",
    "AlertDialogAction",
    "AlertDialogCancel",
  ],
}

export const contentProps: PropRow[] = [
  {
    prop: "size",
    type: '"default" | "sm"',
    default: '"default"',
    description: "Size of the dialog. sm keeps a narrow max width at every breakpoint and lays the footer actions out as two equal columns.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof AlertDialogPrimitive.Content>",
    description: "Extends Content from radix-ui's AlertDialog. Rendered inside a Portal with its own Overlay automatically.",
  },
]

export const actionProps: PropRow[] = [
  {
    prop: "variant",
    type: '"default" | "outline" | "secondary" | "ghost" | "destructive" | "link"',
    default: '"default"',
    description: "Visual style of the action button, forwarded to Button.",
  },
  {
    prop: "size",
    type: '"default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"',
    default: '"default"',
    description: "Size of the action button, forwarded to Button.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof AlertDialogPrimitive.Action>",
    description: "Extends Action from radix-ui's AlertDialog. Confirms the alert and closes the dialog when activated.",
  },
]

export const cancelProps: PropRow[] = [
  {
    prop: "variant",
    type: '"default" | "outline" | "secondary" | "ghost" | "destructive" | "link"',
    default: '"outline"',
    description: "Visual style of the cancel button, forwarded to Button.",
  },
  {
    prop: "size",
    type: '"default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"',
    default: '"default"',
    description: "Size of the cancel button, forwarded to Button.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof AlertDialogPrimitive.Cancel>",
    description: "Extends Cancel from radix-ui's AlertDialog. Dismisses the alert without confirming, and is focused automatically when the dialog opens.",
  },
]

export const mediaProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"div">',
    description: "The remaining native <div> attributes. Place an icon inside as a slot before AlertDialogTitle, within AlertDialogHeader.",
  },
]

export const props: PropRow[] = [...contentProps, ...actionProps, ...cancelProps, ...mediaProps]
