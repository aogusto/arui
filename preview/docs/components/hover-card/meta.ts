import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "hover-card",
  name: "Hover Card",
  category: "Overlays",
  description: "A card that appears when hovering over a trigger, used to preview content like a user profile without navigating away.",
  imports: ["HoverCard", "HoverCardTrigger", "HoverCardContent"],
}

export const hoverCardProps: PropRow[] = [
  {
    prop: "openDelay",
    type: "number",
    default: "700",
    description: "Delay in milliseconds before the content opens after the trigger is hovered.",
  },
  {
    prop: "closeDelay",
    type: "number",
    default: "300",
    description: "Delay in milliseconds before the content closes after the pointer leaves the trigger or content.",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof HoverCardPrimitive.Root>",
    description: "Extends Radix's HoverCard.Root. Common props: open, defaultOpen, onOpenChange. Uncontrolled by default.",
  },
]

export const hoverCardTriggerProps: PropRow[] = [
  {
    prop: "asChild",
    type: "boolean",
    default: "false",
    description: "Renders the child as the trigger element instead of the default <a>.",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof HoverCardPrimitive.Trigger>",
    description: "Extends Radix's HoverCard.Trigger, which renders as an <a> by default, so href, target, etc. work natively.",
  },
]

export const hoverCardContentProps: PropRow[] = [
  {
    prop: "align",
    type: '"start" | "center" | "end"',
    default: '"center"',
    description: "Alignment of the content relative to the trigger.",
  },
  {
    prop: "sideOffset",
    type: "number",
    default: "4",
    description: "Distance in pixels between the content and the trigger.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof HoverCardPrimitive.Content>",
    description: "Extends Radix's HoverCard.Content. Rendered inside a portal with a glass (regular material) surface, fixed at w-64, and animates in and out based on the side it opens on.",
  },
]

export const props: PropRow[] = [...hoverCardProps, ...hoverCardTriggerProps, ...hoverCardContentProps]
