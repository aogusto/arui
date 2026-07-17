import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

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

export const navigationMenuProps: PropRow[] = [
  {
    prop: "viewport",
    type: "boolean",
    default: "true",
    description: "Renders a single shared frosted viewport below the list, which all dropdowns animate into and resize to fit. Set to false to have each item's content render inline near its own trigger instead.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof NavigationMenuPrimitive.Root>",
    description: "Extends Radix's NavigationMenu.Root. Common props: value, defaultValue, onValueChange, orientation, delayDuration, skipDelayDuration.",
  },
]

export const navigationMenuListProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof NavigationMenuPrimitive.List>",
    description: "Extends Radix's NavigationMenu.List. Renders the <ul> holding the top-level items, centered by default.",
  },
]

export const navigationMenuItemProps: PropRow[] = [
  {
    prop: "value",
    type: "string",
    description: "Identifies the item. Falls back to an auto-generated value; set it if you control the open item via NavigationMenu's value or onValueChange.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof NavigationMenuPrimitive.Item>",
    description: "Extends Radix's NavigationMenu.Item. Wraps a NavigationMenuTrigger and NavigationMenuContent pair, or a single plain NavigationMenuLink.",
  },
]

export const navigationMenuTriggerProps: PropRow[] = [
  {
    prop: "children",
    type: "React.ReactNode",
    description: "The trigger's label. A chevron icon that rotates 180° on open is appended automatically.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>",
    description: "Extends Radix's NavigationMenu.Trigger, rendered as a <button>. Must be the first child of a NavigationMenuItem, directly followed by a NavigationMenuContent.",
  },
]

export const navigationMenuContentProps: PropRow[] = [
  {
    prop: "forceMount",
    type: "true",
    description: "Forces the content to stay mounted, useful when animating it with an external animation library.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof NavigationMenuPrimitive.Content>",
    description: "Extends Radix's NavigationMenu.Content. Rendered inside a NavigationMenuItem, right after its NavigationMenuTrigger.",
  },
]

export const navigationMenuLinkProps: PropRow[] = [
  {
    prop: "active",
    type: "boolean",
    description: "Marks the link as the current page: adds aria-current=\"page\" and toggles the data-active attribute.",
  },
  {
    prop: "onSelect",
    type: "(event: Event) => void",
    description: "Called when the link is selected, before the menu closes. Call event.preventDefault() to keep the menu open.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof NavigationMenuPrimitive.Link>",
    description: "Extends Radix's NavigationMenu.Link, rendered as an <a> (href, target, etc.). Combine with navigationMenuTriggerStyle() to style a plain link like the triggers next to it.",
  },
]

export const navigationMenuIndicatorProps: PropRow[] = [
  {
    prop: "forceMount",
    type: "true",
    description: "Forces the indicator to stay mounted, useful when animating it with an external animation library.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>",
    description: "Extends Radix's NavigationMenu.Indicator. Placed as the last child of NavigationMenuList; renders a small arrow that tracks the currently active trigger.",
  },
]

export const navigationMenuViewportProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>",
    description: "Extends Radix's NavigationMenu.Viewport. Rendered automatically by NavigationMenu when viewport is true; import it directly only if you're composing the primitive parts yourself.",
  },
]

export const props: PropRow[] = [
  ...navigationMenuProps,
  ...navigationMenuListProps,
  ...navigationMenuItemProps,
  ...navigationMenuTriggerProps,
  ...navigationMenuContentProps,
  ...navigationMenuLinkProps,
  ...navigationMenuIndicatorProps,
  ...navigationMenuViewportProps,
]
