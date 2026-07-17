import * as React from "react"
import { Button, Calendar, Popover, PopoverContent, PopoverTrigger } from "@aogusto/arui"
import { CalendarIcon } from "lucide-react"

function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
}

export default function Example() {
  const [date, setDate] = React.useState<Date | undefined>(new Date(2026, 5, 12))

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-56 justify-start font-normal">
          <CalendarIcon />
          {date ? formatDate(date) : "Pick a date"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          defaultMonth={new Date(2026, 5, 1)}
        />
      </PopoverContent>
    </Popover>
  )
}
