import { Demo } from "../../Demo"
import { PropsTable, type PropRow } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta } from "./meta"

import Default from "./examples/default"
import defaultCode from "./examples/default.tsx?raw"
import Caption from "./examples/caption"
import captionCode from "./examples/caption.tsx?raw"
import WithFooter from "./examples/with-footer"
import withFooterCode from "./examples/with-footer.tsx?raw"
import WithBadge from "./examples/with-badge"
import withBadgeCode from "./examples/with-badge.tsx?raw"
import RowSelection from "./examples/row-selection"
import rowSelectionCode from "./examples/row-selection.tsx?raw"

const tableProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"table">',
    description: "The remaining native <table> attributes. Rendered inside a wrapper div with overflow-x-auto for horizontal scroll on small screens.",
  },
]

const tableHeaderProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"thead">',
    description: "The remaining native <thead> attributes.",
  },
]

const tableBodyProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"tbody">',
    description: "The remaining native <tbody> attributes.",
  },
]

const tableFooterProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"tfoot">',
    description: "The remaining native <tfoot> attributes. Renders with a top border and a muted background by default.",
  },
]

const tableRowProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"tr">',
    description: 'The remaining native <tr> attributes. Set data-state="selected" to highlight the row, e.g. for row selection.',
  },
]

const tableHeadProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"th">',
    description: "The remaining native <th> attributes.",
  },
]

const tableCellProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"td">',
    description: 'The remaining native <td> attributes. Use colSpan to span a cell across columns, e.g. in a footer total row.',
  },
]

export default function TableDoc() {
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
        <Demo title="With caption" code={captionCode}><Caption /></Demo>
        <Demo title="With footer" code={withFooterCode}><WithFooter /></Demo>
        <Demo title="With badge" code={withBadgeCode}><WithBadge /></Demo>
        <Demo title="Row selection" code={rowSelectionCode}><RowSelection /></Demo>
      </div>

      <section className="space-y-6">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">Table</h3>
          <PropsTable rows={tableProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">TableHeader</h3>
          <PropsTable rows={tableHeaderProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">TableBody</h3>
          <PropsTable rows={tableBodyProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">TableFooter</h3>
          <PropsTable rows={tableFooterProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">TableRow</h3>
          <PropsTable rows={tableRowProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">TableHead</h3>
          <PropsTable rows={tableHeadProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">TableCell</h3>
          <PropsTable rows={tableCellProps} />
        </div>

        <p className="text-subhead text-label-secondary">
          TableCaption is a structural building block with no props of its own beyond className and the native
          <code className="font-mono text-caption-1"> {"<caption>"}</code> attributes. It renders below the table
          with muted, small text.
        </p>
      </section>
    </article>
  )
}
