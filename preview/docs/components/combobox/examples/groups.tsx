import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxList,
  ComboboxGroup,
  ComboboxLabel,
  ComboboxCollection,
  ComboboxItem,
  ComboboxSeparator,
} from "@aogusto/arui"

interface Produce {
  value: string
  label: string
}

interface ProduceGroup {
  label: string
  items: Produce[]
}

const produceGroups: ProduceGroup[] = [
  {
    label: "Fruits",
    items: [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
      { value: "mango", label: "Mango" },
    ],
  },
  {
    label: "Vegetables",
    items: [
      { value: "carrot", label: "Carrot" },
      { value: "broccoli", label: "Broccoli" },
      { value: "spinach", label: "Spinach" },
    ],
  },
]

export default function Example() {
  return (
    <Combobox items={produceGroups}>
      <ComboboxInput placeholder="Search produce..." />
      <ComboboxContent>
        <ComboboxEmpty>No produce found.</ComboboxEmpty>
        <ComboboxList>
          {(group: ProduceGroup) => (
            <ComboboxGroup key={group.label} items={group.items}>
              <ComboboxLabel>{group.label}</ComboboxLabel>
              <ComboboxCollection>
                {(item: Produce) => (
                  <ComboboxItem key={item.value} value={item}>
                    {item.label}
                  </ComboboxItem>
                )}
              </ComboboxCollection>
              {group.label !== "Vegetables" && <ComboboxSeparator />}
            </ComboboxGroup>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
