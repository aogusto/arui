import { Demo } from "../../Demo"
import { PropsTable, type PropRow } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta } from "./meta"

import Default from "./examples/default"
import defaultCode from "./examples/default.tsx?raw"
import Range from "./examples/range"
import rangeCode from "./examples/range.tsx?raw"
import Multiple from "./examples/multiple"
import multipleCode from "./examples/multiple.tsx?raw"
import Dropdown from "./examples/dropdown"
import dropdownCode from "./examples/dropdown.tsx?raw"
import Disabled from "./examples/disabled"
import disabledCode from "./examples/disabled.tsx?raw"
import DatePicker from "./examples/date-picker"
import datePickerCode from "./examples/date-picker.tsx?raw"

const props: PropRow[] = [
  {
    prop: "mode",
    type: '"single" | "multiple" | "range"',
    description: "Selection behavior. Determines the shape of selected and of the value passed to onSelect.",
  },
  {
    prop: "selected",
    type: "Date | Date[] | DateRange | undefined",
    description: "The current selection. Its shape depends on mode: a single Date, an array of Dates, or a { from, to } range.",
  },
  {
    prop: "onSelect",
    type: "(selected, triggerDate, modifiers, event) => void",
    description: "Called when a day is selected. The type of selected matches mode (Date, Date[], or DateRange).",
  },
  {
    prop: "defaultMonth",
    type: "Date",
    description: "Initial month to display. The calendar does not infer it from selected, so set this explicitly to open on the month you need.",
  },
  {
    prop: "numberOfMonths",
    type: "number",
    default: "1",
    description: "Number of months rendered side by side.",
  },
  {
    prop: "captionLayout",
    type: '"label" | "dropdown" | "dropdown-months" | "dropdown-years"',
    default: '"label"',
    description: "How the month and year caption is displayed. The dropdown variants render native selects for faster navigation.",
  },
  {
    prop: "buttonVariant",
    type: '"default" | "outline" | "secondary" | "ghost" | "destructive" | "link"',
    default: '"ghost"',
    description: "Variant applied to the previous/next navigation buttons, passed through to Button.",
  },
  {
    prop: "disabled",
    type: "Matcher | Matcher[]",
    description: "Marks days as unselectable. Accepts a Date, an array of Dates, a range, { before }/{ after }, { dayOfWeek }, or a (date) => boolean predicate.",
  },
  {
    prop: "required",
    type: "boolean",
    default: "false",
    description: "When true, a selection is enforced; selected and onSelect become non-optional for the active mode.",
  },
  {
    prop: "showOutsideDays",
    type: "boolean",
    default: "true",
    description: "Shows the leading/trailing days from adjacent months to fill the grid.",
  },
  {
    prop: "showWeekNumber",
    type: "boolean",
    default: "false",
    description: "Adds a leading column with the ISO week number of each row.",
  },
  {
    prop: "locale",
    type: "Locale",
    description: "Locale object from react-day-picker/locale, used to translate month and weekday names.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "classNames",
    type: "Partial<ClassNames>",
    description: "Per-part class overrides (root, month, day, selected, range_start, and more), merged with the component's own defaults.",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof DayPicker>",
    description: "Extends DayPicker from react-day-picker (month, onMonthChange, startMonth, endMonth, weekStartsOn, fixedWeeks, and more).",
  },
]

export default function CalendarDoc() {
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
        <Demo title="Single" code={defaultCode}><Default /></Demo>
        <Demo title="Range" code={rangeCode}><Range /></Demo>
        <Demo title="Multiple" code={multipleCode}><Multiple /></Demo>
        <Demo title="Dropdown navigation" code={dropdownCode}><Dropdown /></Demo>
        <Demo title="Disabled dates" code={disabledCode}><Disabled /></Demo>
        <Demo title="Date picker" description="Calendar composed with Popover and Button, the common pattern for a text-field-style date picker." code={datePickerCode}><DatePicker /></Demo>
      </div>

      <section className="space-y-3">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>
        <PropsTable rows={props} />
      </section>
    </article>
  )
}
