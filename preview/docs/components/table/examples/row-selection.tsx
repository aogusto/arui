import { useState } from "react"
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Checkbox,
} from "@aogusto/arui"

const invoices = [
  { invoice: "INV001", method: "Credit Card", amount: "$250.00" },
  { invoice: "INV002", method: "PayPal", amount: "$150.00" },
  { invoice: "INV003", method: "Bank Transfer", amount: "$350.00" },
]

export default function Example() {
  const [selected, setSelected] = useState<string[]>([])
  const allSelected = selected.length === invoices.length

  function toggleAll() {
    setSelected(allSelected ? [] : invoices.map((row) => row.invoice))
  }

  function toggleRow(invoice: string) {
    setSelected((prev) =>
      prev.includes(invoice) ? prev.filter((id) => id !== invoice) : [...prev, invoice]
    )
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-10">
            <Checkbox checked={allSelected} onCheckedChange={toggleAll} aria-label="Select all" />
          </TableHead>
          <TableHead>Invoice</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((row) => (
          <TableRow key={row.invoice} data-state={selected.includes(row.invoice) ? "selected" : undefined}>
            <TableCell>
              <Checkbox
                checked={selected.includes(row.invoice)}
                onCheckedChange={() => toggleRow(row.invoice)}
                aria-label={`Select ${row.invoice}`}
              />
            </TableCell>
            <TableCell className="font-medium">{row.invoice}</TableCell>
            <TableCell>{row.method}</TableCell>
            <TableCell className="text-right">{row.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
