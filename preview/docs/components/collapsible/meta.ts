import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "collapsible",
  name: "Collapsible",
  category: "Data & Display",
  description: "An interactive section that expands and collapses to show or hide its content, driven by a trigger you place next to it. Unlike Accordion, each Collapsible is independent, so a list of them can have any number open at once.",
  imports: ["Collapsible", "CollapsibleTrigger", "CollapsibleContent"],
}

export const collapsibleProps: PropRow[] = [
  {
    prop: "open",
    type: "boolean",
    description: "The controlled open state of the section.",
  },
  {
    prop: "defaultOpen",
    type: "boolean",
    default: "false",
    description: "The open state when the collapsible is uncontrolled.",
  },
  {
    prop: "onOpenChange",
    type: "(open: boolean) => void",
    description: "Called when the open state changes, either from the trigger or from an external open update.",
  },
  {
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Prevents the user from toggling the collapsible from its trigger.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes applied to the root element. Collapsible has no default styles of its own to merge with, so this fully controls the wrapper's appearance.",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof CollapsiblePrimitive.Root>",
    description: "Extends Radix's Collapsible.Root, rendered as a plain div.",
  },
]

export const collapsibleTriggerProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes applied to the trigger. CollapsibleTrigger has no default styles of its own, so it renders as an unstyled button until you add classes, or use asChild to render your own trigger element (e.g. Button).",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>",
    description: "Extends Radix's Collapsible.Trigger. Toggles the open state on click, and exposes aria-expanded and data-state (\"open\" | \"closed\") for styling.",
  },
]

export const collapsibleContentProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes applied to the content. CollapsibleContent has no default styles of its own, so add overflow-hidden plus the data-open: / data-closed: animation utilities here to animate it open and closed.",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>",
    description: "Extends Radix's Collapsible.Content. Only mounted while open (unless forceMount is set), and exposes the --radix-collapsible-content-height / --radix-collapsible-content-width CSS variables for height animations.",
  },
]

export const props: PropRow[] = [...collapsibleProps, ...collapsibleTriggerProps, ...collapsibleContentProps]
