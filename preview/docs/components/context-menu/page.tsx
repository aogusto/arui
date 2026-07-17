import { Demo } from "../../Demo"
import { PropsTable } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import {
  meta,
  contextMenuProps,
  contextMenuTriggerProps,
  contextMenuContentProps,
  contextMenuItemProps,
  contextMenuCheckboxItemProps,
  contextMenuRadioGroupProps,
  contextMenuRadioItemProps,
  contextMenuLabelProps,
  contextMenuSeparatorProps,
  contextMenuShortcutProps,
  contextMenuGroupProps,
  contextMenuSubProps,
  contextMenuSubTriggerProps,
  contextMenuSubContentProps,
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

export default function ContextMenuDoc() {
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
          <h3 className="text-headline font-semibold text-label">ContextMenu</h3>
          <PropsTable rows={contextMenuProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ContextMenuTrigger</h3>
          <PropsTable rows={contextMenuTriggerProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ContextMenuContent</h3>
          <PropsTable rows={contextMenuContentProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ContextMenuItem</h3>
          <PropsTable rows={contextMenuItemProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ContextMenuCheckboxItem</h3>
          <PropsTable rows={contextMenuCheckboxItemProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ContextMenuRadioGroup</h3>
          <PropsTable rows={contextMenuRadioGroupProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ContextMenuRadioItem</h3>
          <PropsTable rows={contextMenuRadioItemProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ContextMenuLabel</h3>
          <PropsTable rows={contextMenuLabelProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ContextMenuSeparator</h3>
          <PropsTable rows={contextMenuSeparatorProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ContextMenuShortcut</h3>
          <PropsTable rows={contextMenuShortcutProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ContextMenuGroup</h3>
          <PropsTable rows={contextMenuGroupProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ContextMenuSub</h3>
          <PropsTable rows={contextMenuSubProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ContextMenuSubTrigger</h3>
          <PropsTable rows={contextMenuSubTriggerProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ContextMenuSubContent</h3>
          <PropsTable rows={contextMenuSubContentProps} />
        </div>
      </section>
    </article>
  )
}
