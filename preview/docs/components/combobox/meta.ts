import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "combobox",
  name: "Combobox",
  category: "Forms & Inputs",
  description: "A searchable select built on @base-ui/react's Combobox, combining a text input with a filtered list of options. Supports single or multiple selection, grouped items, and a chips layout for picking more than one value.",
  imports: [
    "Combobox",
    "ComboboxInput",
    "ComboboxContent",
    "ComboboxList",
    "ComboboxItem",
    "ComboboxGroup",
    "ComboboxLabel",
    "ComboboxCollection",
    "ComboboxEmpty",
    "ComboboxSeparator",
    "ComboboxChips",
    "ComboboxChip",
    "ComboboxChipsInput",
    "ComboboxTrigger",
    "ComboboxValue",
    "useComboboxAnchor",
  ],
}
