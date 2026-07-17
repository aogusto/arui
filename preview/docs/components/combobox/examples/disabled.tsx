import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxList,
  ComboboxItem,
} from "@aogusto/arui"

interface Status {
  value: string
  label: string
}

const statuses: Status[] = [
  { value: "draft", label: "Draft" },
  { value: "published", label: "Published" },
  { value: "archived", label: "Archived" },
]

export default function Example() {
  return (
    <Combobox items={statuses} disabled>
      <ComboboxInput placeholder="Select status..." />
      <ComboboxContent>
        <ComboboxEmpty>No status found.</ComboboxEmpty>
        <ComboboxList>
          {(status: Status) => (
            <ComboboxItem key={status.value} value={status}>
              {status.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
