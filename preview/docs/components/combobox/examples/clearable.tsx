import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxList,
  ComboboxItem,
} from "@aogusto/arui"

interface Priority {
  value: string
  label: string
}

const priorities: Priority[] = [
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
  { value: "urgent", label: "Urgent" },
]

export default function Example() {
  return (
    <Combobox items={priorities} defaultValue={priorities.find((priority) => priority.value === "high")}>
      <ComboboxInput placeholder="Set priority..." showClear />
      <ComboboxContent>
        <ComboboxEmpty>No priority found.</ComboboxEmpty>
        <ComboboxList>
          {(priority: Priority) => (
            <ComboboxItem key={priority.value} value={priority}>
              {priority.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
