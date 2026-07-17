import { Demo } from "../../Demo"
import { PropsTable } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import {
  meta,
  navigationMenuProps,
  navigationMenuListProps,
  navigationMenuItemProps,
  navigationMenuTriggerProps,
  navigationMenuContentProps,
  navigationMenuLinkProps,
  navigationMenuIndicatorProps,
  navigationMenuViewportProps,
} from "./meta"

import Default from "./examples/default"
import defaultCode from "./examples/default.tsx?raw"
import WithIcons from "./examples/with-icons"
import withIconsCode from "./examples/with-icons.tsx?raw"
import SimpleLinks from "./examples/simple-links"
import simpleLinksCode from "./examples/simple-links.tsx?raw"
import WithoutViewport from "./examples/without-viewport"
import withoutViewportCode from "./examples/without-viewport.tsx?raw"

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
