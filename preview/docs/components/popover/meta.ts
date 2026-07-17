import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "popover",
  name: "Popover",
  category: "Overlays",
  description: "A floating panel anchored to a trigger, used for small pieces of contextual content like menus, previews, or short forms.",
  imports: ["Popover", "PopoverTrigger", "PopoverContent", "PopoverAnchor", "PopoverHeader", "PopoverTitle", "PopoverDescription"],
}

export const popoverProps: PropRow[] = [
  {
    prop: "...props",
    type: "React.ComponentProps<typeof PopoverPrimitive.Root>",
    description: "Extends Popover.Root from radix-ui. Controls the open state via open / onOpenChange, or defaultOpen for uncontrolled usage.",
  },
]

export const popoverTriggerProps: PropRow[] = [
  {
    prop: "...props",
    type: "React.ComponentProps<typeof PopoverPrimitive.Trigger>",
    description: "Extends Popover.Trigger from radix-ui. Pass asChild to render a custom element (e.g. a Button) as the trigger instead of the default button.",
  },
]

export const popoverAnchorProps: PropRow[] = [
  {
    prop: "...props",
    type: "React.ComponentProps<typeof PopoverPrimitive.Anchor>",
    description: "Extends Popover.Anchor from radix-ui. Sets the element the content positions against, when it should differ from the trigger itself.",
  },
]

export const popoverContentProps: PropRow[] = [
  {
    prop: "align",
    type: '"start" | "center" | "end"',
    default: '"center"',
    description: "Alignment of the content relative to the trigger (or anchor) along the perpendicular axis.",
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
    type: "React.ComponentProps<typeof PopoverPrimitive.Content>",
    description: "Extends Popover.Content from radix-ui (side, collisionPadding, onOpenAutoFocus, etc). Rendered inside a Portal, with a glassmorphism surface applied by default.",
  },
]

export const popoverHeaderProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "Extends the native <div>. Groups PopoverTitle and PopoverDescription with vertical spacing.",
  },
]

export const popoverTitleProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'h2'>",
    description: "Extends the <h2> element's attributes, though the component itself renders a <div> with medium font weight, not a heading element.",
  },
]

export const popoverDescriptionProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'p'>",
    description: "Extends the native <p>. Renders muted secondary text below the title.",
  },
]

export const props: PropRow[] = [
  ...popoverProps,
  ...popoverTriggerProps,
  ...popoverAnchorProps,
  ...popoverContentProps,
  ...popoverHeaderProps,
  ...popoverTitleProps,
  ...popoverDescriptionProps,
]
