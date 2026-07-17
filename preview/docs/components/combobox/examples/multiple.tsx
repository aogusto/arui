import {
  Combobox,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipsInput,
  ComboboxValue,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxList,
  ComboboxItem,
  useComboboxAnchor,
} from "@aogusto/arui"

interface Language {
  value: string
  label: string
}

const languages: Language[] = [
  { value: "javascript", label: "JavaScript" },
  { value: "typescript", label: "TypeScript" },
  { value: "python", label: "Python" },
  { value: "go", label: "Go" },
  { value: "rust", label: "Rust" },
  { value: "swift", label: "Swift" },
]

export default function Example() {
  const anchor = useComboboxAnchor()

  return (
    <Combobox items={languages} multiple defaultValue={languages.slice(0, 2)}>
      <ComboboxChips ref={anchor}>
        <ComboboxValue>
          {(value: Language[]) => (
            <>
              {value.map((language) => (
                <ComboboxChip key={language.value}>{language.label}</ComboboxChip>
              ))}
              <ComboboxChipsInput placeholder={value.length > 0 ? "" : "Select languages..."} />
            </>
          )}
        </ComboboxValue>
      </ComboboxChips>
      <ComboboxContent anchor={anchor}>
        <ComboboxEmpty>No language found.</ComboboxEmpty>
        <ComboboxList>
          {(language: Language) => (
            <ComboboxItem key={language.value} value={language}>
              {language.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
