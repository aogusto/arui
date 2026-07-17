import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Badge,
} from "@aogusto/arui"

const invoices = [
  { invoice: "INV001", status: "Paid", amount: "$250.00" },
  { invoice: "INV002", status: "Pending", amount: "$150.00" },
  { invoice: "INV003", status: "Unpaid", amount: "$350.00" },
]

function statusVariant(status: string): "default" | "secondary" | "destructive" {
  if (status === "Paid") return "default"
  if (status === "Pending") return "secondary"
  return "destructive"
}

export default function Example() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((row) => (
          <TableRow key={row.invoice}>
            <TableCell className="font-medium">{row.invoice}</TableCell>
            <TableCell>
              <Badge variant={statusVariant(row.status)}>{row.status}</Badge>
            </TableCell>
            <TableCell className="text-right">{row.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
