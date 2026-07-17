import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "navigation-menu",
  name: "Navigation Menu",
  category: "Navigation",
  description: "A horizontal menu of top-level links where some items open a dropdown of related links or content. Dropdowns share a single frosted, glassmorphic viewport that resizes and animates as the user moves between items.",
  imports: [
    "NavigationMenu",
    "NavigationMenuList",
    "NavigationMenuItem",
    "NavigationMenuContent",
    "NavigationMenuTrigger",
    "NavigationMenuLink",
    "NavigationMenuIndicator",
    "NavigationMenuViewport",
    "navigationMenuTriggerStyle",
  ],
}
