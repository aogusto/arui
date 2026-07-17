import { Demo } from "../../Demo"
import { PropsTable, type PropRow } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta } from "./meta"

import Default from "./examples/default"
import defaultCode from "./examples/default.tsx?raw"
import WithEllipsis from "./examples/with-ellipsis"
import withEllipsisCode from "./examples/with-ellipsis.tsx?raw"
import Disabled from "./examples/disabled"
import disabledCode from "./examples/disabled.tsx?raw"
import Simple from "./examples/simple"
import simpleCode from "./examples/simple.tsx?raw"
import CustomLabels from "./examples/custom-labels"
import customLabelsCode from "./examples/custom-labels.tsx?raw"

const paginationProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'nav'>",
    description: "The remaining native <nav> attributes. role=\"navigation\" and aria-label=\"pagination\" are already set internally.",
  },
]

const paginationContentProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'ul'>",
    description: "The remaining native <ul> attributes. Lays out its PaginationItem children in a row with a small gap.",
  },
]

const paginationItemProps: PropRow[] = [
  {
    prop: "...props",
    type: "React.ComponentProps<'li'>",
    description: "The native <li> attributes, including className. Wraps a single PaginationLink, PaginationPrevious, PaginationNext, or PaginationEllipsis.",
  },
]

const paginationLinkProps: PropRow[] = [
  {
    prop: "isActive",
    type: "boolean",
    default: "false",
    description: "Marks the link as the current page: renders the outline Button variant instead of ghost and sets aria-current=\"page\".",
  },
  {
    prop: "size",
    type: '"default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"',
    default: '"icon"',
    description: "Size passed through to the underlying Button. Numbered page links are icon-sized by default; PaginationPrevious and PaginationNext override it to default.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'a'>",
    description: "The remaining native <a> attributes (href, onClick, etc.). Rendered as a Button with asChild, so it keeps full button styling on a real link element.",
  },
]

const paginationPrevNextProps: PropRow[] = [
  {
    prop: "text",
    type: "string",
    default: '"Previous" / "Next"',
    description: "Label rendered next to the arrow icon. Hidden below the sm breakpoint, leaving only the icon visible on small screens.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof PaginationLink>",
    description: "Accepts every PaginationLink prop (href, isActive, size, onClick, etc.). aria-label defaults to \"Go to previous page\" / \"Go to next page\".",
  },
]

const paginationEllipsisProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'span'>",
    description: "The remaining native <span> attributes. Renders a MoreHorizontalIcon, is aria-hidden, and carries a screen-reader-only \"More pages\" label.",
  },
]

export default function PaginationDoc() {
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
        <Demo title="With ellipsis" code={withEllipsisCode}><WithEllipsis /></Demo>
        <Demo title="Disabled previous" code={disabledCode}><Disabled /></Demo>
        <Demo title="Simple (previous/next only)" code={simpleCode}><Simple /></Demo>
        <Demo title="Custom labels" code={customLabelsCode}><CustomLabels /></Demo>
      </div>

      <section className="space-y-6">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">Pagination</h3>
          <PropsTable rows={paginationProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">PaginationContent</h3>
          <PropsTable rows={paginationContentProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">PaginationItem</h3>
          <PropsTable rows={paginationItemProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">PaginationLink</h3>
          <PropsTable rows={paginationLinkProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">PaginationPrevious / PaginationNext</h3>
          <PropsTable rows={paginationPrevNextProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">PaginationEllipsis</h3>
          <PropsTable rows={paginationEllipsisProps} />
        </div>
      </section>
    </article>
  )
}
