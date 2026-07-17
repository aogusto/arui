import { Demo } from "../../Demo"
import { PropsTable } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import {
  meta,
  menubarProps,
  menubarMenuProps,
  menubarTriggerProps,
  menubarContentProps,
  menubarGroupProps,
  menubarLabelProps,
  menubarItemProps,
  menubarShortcutProps,
  menubarCheckboxItemProps,
  menubarRadioGroupProps,
  menubarRadioItemProps,
  menubarSeparatorProps,
  menubarSubProps,
  menubarSubTriggerProps,
  menubarSubContentProps,
} from "./meta"

import Default from "./examples/default"
import defaultCode from "./examples/default.tsx?raw"
import Checkboxes from "./examples/checkboxes"
import checkboxesCode from "./examples/checkboxes.tsx?raw"
import RadioGroup from "./examples/radio-group"
import radioGroupCode from "./examples/radio-group.tsx?raw"
import Submenu from "./examples/submenu"
import submenuCode from "./examples/submenu.tsx?raw"
import Destructive from "./examples/destructive"
import destructiveCode from "./examples/destructive.tsx?raw"

export default function MenubarDoc() {
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
        <Demo title="Basic" code={defaultCode}><Default /></Demo>
        <Demo title="Checkboxes" code={checkboxesCode}><Checkboxes /></Demo>
        <Demo title="Radio group" code={radioGroupCode}><RadioGroup /></Demo>
        <Demo title="Submenu" code={submenuCode}><Submenu /></Demo>
        <Demo title="Destructive item" code={destructiveCode}><Destructive /></Demo>
      </div>

      <section className="space-y-6">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">Menubar</h3>
          <PropsTable rows={menubarProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">MenubarMenu</h3>
          <PropsTable rows={menubarMenuProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">MenubarTrigger</h3>
          <PropsTable rows={menubarTriggerProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">MenubarContent</h3>
          <PropsTable rows={menubarContentProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">MenubarGroup</h3>
          <PropsTable rows={menubarGroupProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">MenubarLabel</h3>
          <PropsTable rows={menubarLabelProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">MenubarItem</h3>
          <PropsTable rows={menubarItemProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">MenubarShortcut</h3>
          <PropsTable rows={menubarShortcutProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">MenubarCheckboxItem</h3>
          <PropsTable rows={menubarCheckboxItemProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">MenubarRadioGroup</h3>
          <PropsTable rows={menubarRadioGroupProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">MenubarRadioItem</h3>
          <PropsTable rows={menubarRadioItemProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">MenubarSeparator</h3>
          <PropsTable rows={menubarSeparatorProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">MenubarSub</h3>
          <PropsTable rows={menubarSubProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">MenubarSubTrigger</h3>
          <PropsTable rows={menubarSubTriggerProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">MenubarSubContent</h3>
          <PropsTable rows={menubarSubContentProps} />
        </div>
      </section>
    </article>
  )
}
