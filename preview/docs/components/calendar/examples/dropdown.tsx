import * as React from "react"
import { Calendar } from "@aogusto/arui"

export default function Example() {
  const [date, setDate] = React.useState<Date | undefined>(new Date(2026, 5, 12))

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      captionLayout="dropdown"
      defaultMonth={new Date(2026, 5, 1)}
      startMonth={new Date(2020, 0)}
      endMonth={new Date(2030, 11)}
      className="rounded-lg border"
    />
  )
}
