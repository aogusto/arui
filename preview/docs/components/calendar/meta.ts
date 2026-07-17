import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "calendar",
  name: "Calendar",
  category: "Forms & Inputs",
  description: "A date picker built on react-day-picker, styled to match the rest of the library. Supports single, multiple, and range selection, dropdown month and year navigation, and custom disabled-date rules.",
  imports: ["Calendar"],
}

export const props: PropRow[] = [
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
