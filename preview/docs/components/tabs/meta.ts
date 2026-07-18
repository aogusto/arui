import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "tabs",
  name: "Tabs",
  category: "Navigation",
  description: "Organizes content into panels that share the same space, letting users switch between them with a click. Composed of a TabsList (with default, line, segmented, and glass variants) holding TabsTrigger buttons, and a TabsContent panel per tab.",
  imports: ["Tabs", "TabsList", "TabsTrigger", "TabsContent"],
}

export const tabsProps: PropRow[] = [
  {
    prop: "orientation",
    type: '"horizontal" | "vertical"',
    default: '"horizontal"',
    description: "Layout direction of the whole component. Horizontal stacks the list above its content; vertical places the list beside its content.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof TabsPrimitive.Root>",
    description: "Extends Radix's Tabs.Root. Common props: value, defaultValue, onValueChange, activationMode. Uncontrolled by default via defaultValue.",
  },
]

export const tabsListProps: PropRow[] = [
  {
    prop: "variant",
    type: '"default" | "line" | "segmented" | "glass"',
    default: '"default"',
    description: "Visual style of the tab list: a filled pill background, an underline under the active tab, a frosted segmented control, or a glass material with an animated tinted pill behind the active tab.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof TabsPrimitive.List>",
    description: "Extends Radix's Tabs.List.",
  },
]

export const tabsTriggerProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof TabsPrimitive.Trigger>",
    description: "Extends Radix's Tabs.Trigger. Requires a value matching a TabsContent, and accepts disabled. Add data-icon=\"inline-start\" or data-icon=\"inline-end\" to a nested icon for correct spacing.",
  },
]

export const tabsContentProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof TabsPrimitive.Content>",
    description: "Extends Radix's Tabs.Content. Requires a value matching a TabsTrigger.",
  },
]

export const props: PropRow[] = [...tabsProps, ...tabsListProps, ...tabsTriggerProps, ...tabsContentProps]
