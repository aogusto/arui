import { Demo } from "../../Demo"
import { PropsTable, type PropRow } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta } from "./meta"

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

const contextMenuProps: PropRow[] = [
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ContextMenuPrimitive.Root>",
    description: "Extends ContextMenu.Root from radix-ui. Controls the open state via onOpenChange, or modal to change focus trapping behavior.",
  },
]

const contextMenuTriggerProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ContextMenuPrimitive.Trigger>",
    description: "Extends ContextMenu.Trigger from radix-ui. The wrapped element becomes the area that opens the menu on right click (or long press on touch devices).",
  },
]

const contextMenuContentProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ContextMenuPrimitive.Content>",
    description: "Extends ContextMenu.Content from radix-ui (collisionPadding, onCloseAutoFocus, etc). Rendered inside a Portal, positioned at the pointer, with a glassmorphism surface applied by default.",
  },
]

const contextMenuItemProps: PropRow[] = [
  {
    prop: "variant",
    type: '"default" | "destructive"',
    default: '"default"',
    description: "Visual intent of the item. destructive tints the label and focus state for dangerous actions like delete.",
  },
  {
    prop: "inset",
    type: "boolean",
    default: "false",
    description: "Adds left padding so the label aligns with items that show an icon or indicator.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ContextMenuPrimitive.Item>",
    description: "Extends ContextMenu.Item from radix-ui (onSelect, disabled, etc).",
  },
]

const contextMenuCheckboxItemProps: PropRow[] = [
  {
    prop: "checked",
    type: "boolean",
    description: "Whether the item is checked. Renders a check mark indicator when true.",
  },
  {
    prop: "inset",
    type: "boolean",
    default: "false",
    description: "Adds left padding so the label aligns with items that show an icon or indicator.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>",
    description: "Extends ContextMenu.CheckboxItem from radix-ui, including onCheckedChange.",
  },
]

const contextMenuRadioGroupProps: PropRow[] = [
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>",
    description: "Extends ContextMenu.RadioGroup from radix-ui. Groups ContextMenuRadioItem children and controls the selected value via value / onValueChange.",
  },
]

const contextMenuRadioItemProps: PropRow[] = [
  {
    prop: "value",
    type: "string",
    description: "The value represented by this item, compared against the parent ContextMenuRadioGroup's value.",
  },
  {
    prop: "inset",
    type: "boolean",
    default: "false",
    description: "Adds left padding so the label aligns with items that show an icon or indicator.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ContextMenuPrimitive.RadioItem>",
    description: "Extends ContextMenu.RadioItem from radix-ui.",
  },
]

const contextMenuLabelProps: PropRow[] = [
  {
    prop: "inset",
    type: "boolean",
    default: "false",
    description: "Adds left padding so the label aligns with items that show an icon or indicator.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ContextMenuPrimitive.Label>",
    description: "Extends ContextMenu.Label from radix-ui. Renders small muted heading text above a group of items.",
  },
]

const contextMenuSeparatorProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ContextMenuPrimitive.Separator>",
    description: "Extends ContextMenu.Separator from radix-ui. Renders a thin horizontal rule between groups of items.",
  },
]

const contextMenuShortcutProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'span'>",
    description: "Extends the native <span>. Place as the last child of a ContextMenuItem to right align a keyboard shortcut hint.",
  },
]

const contextMenuGroupProps: PropRow[] = [
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ContextMenuPrimitive.Group>",
    description: "Extends ContextMenu.Group from radix-ui. Groups related items together for accessibility, with no visual effect on its own.",
  },
]

const contextMenuSubProps: PropRow[] = [
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ContextMenuPrimitive.Sub>",
    description: "Extends ContextMenu.Sub from radix-ui. Wraps a ContextMenuSubTrigger and its ContextMenuSubContent to build a nested menu.",
  },
]

const contextMenuSubTriggerProps: PropRow[] = [
  {
    prop: "inset",
    type: "boolean",
    default: "false",
    description: "Adds left padding so the label aligns with items that show an icon or indicator.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ContextMenuPrimitive.SubTrigger>",
    description: "Extends ContextMenu.SubTrigger from radix-ui. Renders a chevron indicator after the children automatically.",
  },
]

const contextMenuSubContentProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof ContextMenuPrimitive.SubContent>",
    description: "Extends ContextMenu.SubContent from radix-ui. Rendered next to the sub trigger with the same glassmorphism surface as ContextMenuContent.",
  },
]

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
