import * as React from "react"
import { Calendar } from "@aogusto/arui"

export default function Example() {
  const [range, setRange] = React.useState<{ from: Date | undefined; to?: Date } | undefined>({
    from: new Date(2026, 5, 8),
    to: new Date(2026, 5, 15),
  })

  return (
    <Calendar
      mode="range"
      selected={range}
      onSelect={setRange}
      defaultMonth={new Date(2026, 5, 1)}
      className="rounded-lg border"
    />
  )
}
