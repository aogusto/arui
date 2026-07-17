import { Table, TableHeader, TableHead, TableRow, TableBody, TableCell } from "@aogusto/arui"

export type PropRow = { prop: string; type: string; default?: string; description: string }

export function PropsTable({ rows }: { rows: PropRow[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Prop</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Default</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((r) => (
          <TableRow key={r.prop}>
            <TableCell className="font-mono text-caption-1">{r.prop}</TableCell>
            <TableCell className="font-mono text-caption-1 text-label-secondary">{r.type}</TableCell>
            <TableCell className="font-mono text-caption-1 text-label-tertiary">{r.default ?? "—"}</TableCell>
            <TableCell className="text-subhead text-label-secondary">{r.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
