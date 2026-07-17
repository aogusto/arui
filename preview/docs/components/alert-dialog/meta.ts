import type { DocCategory } from "../../registry"

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
