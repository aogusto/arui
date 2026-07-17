import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "tooltip",
  name: "Tooltip",
  category: "Overlays",
  description: "A floating label that appears on hover or keyboard focus to describe a trigger element, rendered on a glass surface.",
  imports: ["Tooltip", "TooltipContent", "TooltipProvider", "TooltipTrigger"],
}

export const providerProps: PropRow[] = [
  {
    prop: "delayDuration",
    type: "number",
    default: "0",
    description: "Time in milliseconds the trigger must be hovered or focused before the tooltip opens.",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof TooltipPrimitive.Provider>",
    description: "Extends Provider from radix-ui (skipDelayDuration, disableHoverableContent, etc). Wrap it once near the root to share timing across every tooltip.",
  },
]

export const tooltipProps: PropRow[] = [
  {
    prop: "...props",
    type: "React.ComponentProps<typeof TooltipPrimitive.Root>",
    description: "Extends Root from radix-ui (open, defaultOpen, onOpenChange, delayDuration). Controls the open state of a single tooltip instance.",
  },
]

export const triggerProps: PropRow[] = [
  {
    prop: "asChild",
    type: "boolean",
    default: "false",
    description: "Merges its props onto the child element instead of rendering its own node.",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof TooltipPrimitive.Trigger>",
    description: "Extends Trigger from radix-ui.",
  },
]

export const contentProps: PropRow[] = [
  {
    prop: "sideOffset",
    type: "number",
    default: "0",
    description: "Distance in pixels between the trigger and the tooltip.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof TooltipPrimitive.Content>",
    description: "Extends Content from radix-ui (side, align, alignOffset, avoidCollisions, etc). Rendered in a Portal on top of a glass surface.",
  },
]

export const props: PropRow[] = [...providerProps, ...tooltipProps, ...triggerProps, ...contentProps]
