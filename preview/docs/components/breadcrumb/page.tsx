import { Demo } from "../../Demo"
import { PropsTable, type PropRow } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta } from "./meta"

import Default from "./examples/default"
import defaultCode from "./examples/default.tsx?raw"
import WithIcon from "./examples/with-icon"
import withIconCode from "./examples/with-icon.tsx?raw"
import Collapsed from "./examples/collapsed"
import collapsedCode from "./examples/collapsed.tsx?raw"
import CustomSeparator from "./examples/custom-separator"
import customSeparatorCode from "./examples/custom-separator.tsx?raw"
import AsChild from "./examples/as-child"
import asChildCode from "./examples/as-child.tsx?raw"

const breadcrumbProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'nav'>",
    description: "The remaining native <nav> attributes. Renders as the root <nav aria-label=\"breadcrumb\"> of the trail.",
  },
]

const breadcrumbListProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'ol'>",
    description: "The remaining native <ol> attributes. Wraps the items and wraps onto multiple lines when the trail doesn't fit.",
  },
]

const breadcrumbItemProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'li'>",
    description: "The remaining native <li> attributes. Wraps a link, the current page, or an ellipsis.",
  },
]

const breadcrumbLinkProps: PropRow[] = [
  {
    prop: "asChild",
    type: "boolean",
    default: "false",
    description: "Renders the child as the root element (via Slot) instead of an <a>, useful for a router's Link component.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'a'>",
    description: "The remaining native <a> attributes (href, target, etc.).",
  },
]

const breadcrumbPageProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'span'>",
    description: "The remaining native <span> attributes. Renders with aria-current=\"page\" and aria-disabled=\"true\" to mark the current, non-interactive item.",
  },
]

const breadcrumbSeparatorProps: PropRow[] = [
  {
    prop: "children",
    type: "React.ReactNode",
    default: "<ChevronRightIcon />",
    description: "Custom separator content, replacing the default chevron icon.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'li'>",
    description: "The remaining native <li> attributes. Rendered with role=\"presentation\" and aria-hidden=\"true\".",
  },
]

const breadcrumbEllipsisProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'span'>",
    description: "The remaining native <span> attributes. Renders a MoreHorizontal icon plus a screen-reader-only \"More\" label, standing in for collapsed items.",
  },
]

export default function BreadcrumbDoc() {
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
        <Demo title="With icon" code={withIconCode}><WithIcon /></Demo>
        <Demo title="Collapsed with ellipsis" code={collapsedCode}><Collapsed /></Demo>
        <Demo title="Custom separator" code={customSeparatorCode}><CustomSeparator /></Demo>
        <Demo title="As child" code={asChildCode}><AsChild /></Demo>
      </div>

      <section className="space-y-6">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">Breadcrumb</h3>
          <PropsTable rows={breadcrumbProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">BreadcrumbList</h3>
          <PropsTable rows={breadcrumbListProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">BreadcrumbItem</h3>
          <PropsTable rows={breadcrumbItemProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">BreadcrumbLink</h3>
          <PropsTable rows={breadcrumbLinkProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">BreadcrumbPage</h3>
          <PropsTable rows={breadcrumbPageProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">BreadcrumbSeparator</h3>
          <PropsTable rows={breadcrumbSeparatorProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">BreadcrumbEllipsis</h3>
          <PropsTable rows={breadcrumbEllipsisProps} />
        </div>
      </section>
    </article>
  )
}
