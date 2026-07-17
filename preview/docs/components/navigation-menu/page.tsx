import { Demo } from "../../Demo"
import { PropsTable, type PropRow } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta } from "./meta"

import Default from "./examples/default"
import defaultCode from "./examples/default.tsx?raw"
import WithIcons from "./examples/with-icons"
import withIconsCode from "./examples/with-icons.tsx?raw"
import SimpleLinks from "./examples/simple-links"
import simpleLinksCode from "./examples/simple-links.tsx?raw"
import WithoutViewport from "./examples/without-viewport"
import withoutViewportCode from "./examples/without-viewport.tsx?raw"

const navigationMenuProps: PropRow[] = [
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

const navigationMenuListProps: PropRow[] = [
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

const navigationMenuItemProps: PropRow[] = [
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

const navigationMenuTriggerProps: PropRow[] = [
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

const navigationMenuContentProps: PropRow[] = [
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

const navigationMenuLinkProps: PropRow[] = [
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

const navigationMenuIndicatorProps: PropRow[] = [
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

const navigationMenuViewportProps: PropRow[] = [
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

export default function NavigationMenuDoc() {
  const importLine = `import { ${meta.imports.join(", ")} } from "@aogusto/arui"`
  return (
    <article className="mx-auto w-full max-w-3xl space-y-10">
      <header className="space-y-2">
        <p className="text-caption-1 font-semibold uppercase tracking-wide text-label-tertiary">{meta.category}</p>
        <h1 className="text-title-1 font-bold text-label">{meta.name}</h1>
        <p className="text-body text-label-secondary">{meta.description}</p>
      </header>

      <div className="flex items-center justify-between rounded-xl border border-separator bg-background-secondary px-3 py-2">
        <code className="font-mono text-caption-1 text-label">{importLine}</code>
        <CopyButton value={importLine} />
      </div>

      <div className="space-y-10">
        <Demo title="Default" code={defaultCode}><Default /></Demo>
        <Demo title="With icons" description="A dropdown's content isn't limited to a list of links: any layout works, including a grid of icon and description cards." code={withIconsCode}><WithIcons /></Demo>
        <Demo title="Simple links" description="Items without a dropdown are a plain NavigationMenuLink styled with navigationMenuTriggerStyle(). active adds aria-current for the current page." code={simpleLinksCode}><SimpleLinks /></Demo>
        <Demo title="Without viewport" description="viewport={false} drops the shared frosted container. Each item's content renders locally, right under its own trigger, on a plain popover surface." code={withoutViewportCode}><WithoutViewport /></Demo>
      </div>

      <section className="space-y-6">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">NavigationMenu</h3>
          <PropsTable rows={navigationMenuProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">NavigationMenuList</h3>
          <PropsTable rows={navigationMenuListProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">NavigationMenuItem</h3>
          <PropsTable rows={navigationMenuItemProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">NavigationMenuTrigger</h3>
          <PropsTable rows={navigationMenuTriggerProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">NavigationMenuContent</h3>
          <PropsTable rows={navigationMenuContentProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">NavigationMenuLink</h3>
          <PropsTable rows={navigationMenuLinkProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">NavigationMenuIndicator</h3>
          <PropsTable rows={navigationMenuIndicatorProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">NavigationMenuViewport</h3>
          <PropsTable rows={navigationMenuViewportProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">navigationMenuTriggerStyle</h3>
          <p className="text-subhead text-label-secondary">
            A cva helper with no variants that returns the trigger's class list as a plain string. Apply it to a NavigationMenuLink (or any other element) so a plain, non-dropdown item matches the look of the triggers next to it.
          </p>
        </div>
      </section>
    </article>
  )
}
