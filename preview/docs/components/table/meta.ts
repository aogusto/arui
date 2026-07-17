import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "table",
  name: "Table",
  category: "Data & Display",
  description: "A responsive table primitive with header, body, footer and caption parts, built on plain HTML table elements with an automatic horizontal scroll container.",
  imports: ["Table", "TableHeader", "TableBody", "TableFooter", "TableHead", "TableRow", "TableCell", "TableCaption"],
}

export const tableProps: PropRow[] = [
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

export const tableHeaderProps: PropRow[] = [
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

export const tableBodyProps: PropRow[] = [
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

export const tableFooterProps: PropRow[] = [
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

export const tableRowProps: PropRow[] = [
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

export const tableHeadProps: PropRow[] = [
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

export const tableCellProps: PropRow[] = [
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

export const props: PropRow[] = [
  ...tableProps,
  ...tableHeaderProps,
  ...tableBodyProps,
  ...tableFooterProps,
  ...tableRowProps,
  ...tableHeadProps,
  ...tableCellProps,
]
