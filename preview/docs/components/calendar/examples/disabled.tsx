import * as React from "react"
import { Calendar } from "@aogusto/arui"

export default function Example() {
  const [date, setDate] = React.useState<Date | undefined>(new Date(2026, 5, 12))

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      defaultMonth={new Date(2026, 5, 1)}
      disabled={[{ before: new Date(2026, 5, 5) }, { dayOfWeek: [0, 6] }]}
      className="rounded-lg border"
    />
  )
}
