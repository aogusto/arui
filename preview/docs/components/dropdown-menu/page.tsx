import { Demo } from "../../Demo"
import { PropsTable } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import {
  meta,
  dropdownMenuProps,
  dropdownMenuTriggerProps,
  dropdownMenuContentProps,
  dropdownMenuGroupProps,
  dropdownMenuLabelProps,
  dropdownMenuItemProps,
  dropdownMenuCheckboxItemProps,
  dropdownMenuRadioGroupProps,
  dropdownMenuRadioItemProps,
  dropdownMenuSeparatorProps,
  dropdownMenuShortcutProps,
  dropdownMenuSubProps,
  dropdownMenuSubTriggerProps,
  dropdownMenuSubContentProps,
} from "./meta"

import Default from "./examples/default"
import defaultCode from "./examples/default.tsx?raw"
import Checkboxes from "./examples/checkboxes"
import checkboxesCode from "./examples/checkboxes.tsx?raw"
import RadioGroup from "./examples/radio-group"
import radioGroupCode from "./examples/radio-group.tsx?raw"
import Submenu from "./examples/submenu"
import submenuCode from "./examples/submenu.tsx?raw"
import DestructiveItem from "./examples/destructive-item"
import destructiveItemCode from "./examples/destructive-item.tsx?raw"

export default function DropdownMenuDoc() {
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
        <Demo title="Default" code={defaultCode}><Default /></Demo>
        <Demo title="Checkboxes" code={checkboxesCode}><Checkboxes /></Demo>
        <Demo title="Radio group" code={radioGroupCode}><RadioGroup /></Demo>
        <Demo title="Nested submenu" code={submenuCode}><Submenu /></Demo>
        <Demo title="Destructive item" code={destructiveItemCode}><DestructiveItem /></Demo>
      </div>

      <section className="space-y-6">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">DropdownMenu</h3>
          <PropsTable rows={dropdownMenuProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">DropdownMenuTrigger</h3>
          <PropsTable rows={dropdownMenuTriggerProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">DropdownMenuContent</h3>
          <PropsTable rows={dropdownMenuContentProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">DropdownMenuGroup</h3>
          <PropsTable rows={dropdownMenuGroupProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">DropdownMenuLabel</h3>
          <PropsTable rows={dropdownMenuLabelProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">DropdownMenuItem</h3>
          <PropsTable rows={dropdownMenuItemProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">DropdownMenuCheckboxItem</h3>
          <PropsTable rows={dropdownMenuCheckboxItemProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">DropdownMenuRadioGroup</h3>
          <PropsTable rows={dropdownMenuRadioGroupProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">DropdownMenuRadioItem</h3>
          <PropsTable rows={dropdownMenuRadioItemProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">DropdownMenuSeparator</h3>
          <PropsTable rows={dropdownMenuSeparatorProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">DropdownMenuShortcut</h3>
          <PropsTable rows={dropdownMenuShortcutProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">DropdownMenuSub</h3>
          <PropsTable rows={dropdownMenuSubProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">DropdownMenuSubTrigger</h3>
          <PropsTable rows={dropdownMenuSubTriggerProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">DropdownMenuSubContent</h3>
          <PropsTable rows={dropdownMenuSubContentProps} />
        </div>
      </section>
    </article>
  )
}
