import { Demo } from "../../Demo"
import { PropsTable, type PropRow } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta } from "./meta"

import Variants from "./examples/variants"
import variantsCode from "./examples/variants.tsx?raw"
import Sizes from "./examples/sizes"
import sizesCode from "./examples/sizes.tsx?raw"
import WithMedia from "./examples/with-media"
import withMediaCode from "./examples/with-media.tsx?raw"
import WithActions from "./examples/with-actions"
import withActionsCode from "./examples/with-actions.tsx?raw"
import HeaderFooter from "./examples/header-footer"
import headerFooterCode from "./examples/header-footer.tsx?raw"
import Group from "./examples/group"
import groupCode from "./examples/group.tsx?raw"

const itemProps: PropRow[] = [
  {
    prop: "variant",
    type: '"default" | "outline" | "muted"',
    default: '"default"',
    description: "Visual style of the row: transparent, bordered, or a muted background.",
  },
  {
    prop: "size",
    type: '"default" | "sm" | "xs"',
    default: '"default"',
    description: "Density of the row. Scales gap and padding, and collapses the gap inside ItemContent at xs.",
  },
  {
    prop: "asChild",
    type: "boolean",
    default: "false",
    description: "Renders the child as the root element (via Slot), inheriting the item styles. Useful for making the whole row a link.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "The remaining native <div> attributes.",
  },
]

const itemGroupProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "The remaining native <div> attributes. Renders with role=\"list\" and stacks Item rows, with a gap that shrinks to match items using size=\"sm\" or size=\"xs\".",
  },
]

const itemSeparatorProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn(). Defaults to my-2.",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof Separator>",
    description: "Extends Separator, oriented horizontally by default, for use between Item rows inside an ItemGroup.",
  },
]

const itemMediaProps: PropRow[] = [
  {
    prop: "variant",
    type: '"default" | "icon" | "image"',
    default: '"default"',
    description: "default is a plain wrapper; icon sizes any child <svg> to 1rem; image renders a rounded 40px thumbnail (32px at size=\"sm\", 24px at size=\"xs\") that fills with an <img>.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "The remaining native <div> attributes.",
  },
]

const itemContentProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn(). A second ItemContent that immediately follows another one automatically becomes flex-none, for a trailing column (a timestamp, a price) that doesn't grow.",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "The remaining native <div> attributes. Stacks ItemTitle and ItemDescription; the gap collapses when the parent Item uses size=\"xs\".",
  },
]

const itemTitleProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "The remaining native <div> attributes. Single line, truncated with an ellipsis.",
  },
]

const itemDescriptionProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'p'>",
    description: "The remaining native <p> attributes. Clamped to two lines; links inside are underlined and turn the primary color on hover.",
  },
]

const itemActionsProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "The remaining native <div> attributes. Lays out trailing controls (buttons, menus) in a row.",
  },
]

const itemHeaderProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "The remaining native <div> attributes. Takes the full row width and spaces its children apart, e.g. a title next to a badge.",
  },
]

const itemFooterProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "The remaining native <div> attributes. Takes the full row width and spaces its children apart, typically for a trailing set of actions.",
  },
]

export default function ItemDoc() {
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
        <Demo title="Variants" code={variantsCode}><Variants /></Demo>
        <Demo title="Sizes" code={sizesCode}><Sizes /></Demo>
        <Demo title="With media" code={withMediaCode}><WithMedia /></Demo>
        <Demo title="With actions" code={withActionsCode}><WithActions /></Demo>
        <Demo title="Header and footer" code={headerFooterCode}><HeaderFooter /></Demo>
        <Demo title="Group" code={groupCode}><Group /></Demo>
      </div>

      <section className="space-y-6">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">Item</h3>
          <PropsTable rows={itemProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ItemGroup</h3>
          <PropsTable rows={itemGroupProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ItemSeparator</h3>
          <PropsTable rows={itemSeparatorProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ItemMedia</h3>
          <PropsTable rows={itemMediaProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ItemContent</h3>
          <PropsTable rows={itemContentProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ItemTitle</h3>
          <PropsTable rows={itemTitleProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ItemDescription</h3>
          <PropsTable rows={itemDescriptionProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ItemActions</h3>
          <PropsTable rows={itemActionsProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ItemHeader</h3>
          <PropsTable rows={itemHeaderProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ItemFooter</h3>
          <PropsTable rows={itemFooterProps} />
        </div>
      </section>
    </article>
  )
}
