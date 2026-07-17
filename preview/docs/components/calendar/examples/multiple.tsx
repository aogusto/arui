import * as React from "react"
import { Calendar } from "@aogusto/arui"

export default function Example() {
  const [dates, setDates] = React.useState<Date[] | undefined>([
    new Date(2026, 5, 3),
    new Date(2026, 5, 10),
    new Date(2026, 5, 17),
  ])

  return (
    <Calendar
      mode="multiple"
      selected={dates}
      onSelect={setDates}
      defaultMonth={new Date(2026, 5, 1)}
      className="rounded-lg border"
    />
  )
}
