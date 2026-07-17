import {
  Combobox,
  ComboboxTrigger,
  ComboboxValue,
  ComboboxContent,
  ComboboxInput,
  ComboboxEmpty,
  ComboboxList,
  ComboboxItem,
} from "@aogusto/arui"

interface Country {
  value: string
  label: string
}

const countries: Country[] = [
  { value: "brazil", label: "Brazil" },
  { value: "canada", label: "Canada" },
  { value: "germany", label: "Germany" },
  { value: "japan", label: "Japan" },
  { value: "portugal", label: "Portugal" },
  { value: "united-states", label: "United States" },
]

export default function Example() {
  return (
    <Combobox items={countries}>
      <ComboboxTrigger className="flex h-9 w-56 items-center justify-between gap-1.5 rounded-md border border-input bg-transparent px-3 text-body shadow-xs outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 data-placeholder:text-muted-foreground">
        <ComboboxValue placeholder="Select country" />
      </ComboboxTrigger>
      <ComboboxContent>
        <ComboboxInput placeholder="Search country..." showTrigger={false} />
        <ComboboxEmpty>No country found.</ComboboxEmpty>
        <ComboboxList>
          {(country: Country) => (
            <ComboboxItem key={country.value} value={country}>
              {country.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
