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
import DestructiveItem from "./examples/destructive-item"
import destructiveItemCode from "./examples/destructive-item.tsx?raw"

const dropdownMenuProps: PropRow[] = [
  {
    prop: "...props",
    type: "React.ComponentProps<typeof DropdownMenuPrimitive.Root>",
    description: "Extends Radix's DropdownMenu.Root. Controls the open state via open / onOpenChange, or defaultOpen for uncontrolled usage. Accepts modal to control whether outside pointer events are blocked while open.",
  },
]

const dropdownMenuTriggerProps: PropRow[] = [
  {
    prop: "...props",
    type: "React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>",
    description: "Extends Radix's DropdownMenu.Trigger. Pass asChild to render a custom element (typically a Button) as the trigger instead of the default button.",
  },
]

const dropdownMenuContentProps: PropRow[] = [
  {
    prop: "align",
    type: '"start" | "center" | "end"',
    default: '"start"',
    description: "Alignment of the content relative to the trigger along the perpendicular axis.",
  },
  {
    prop: "sideOffset",
    type: "number",
    default: "4",
    description: "Distance in pixels between the content and the trigger.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn(). By default the content's width tracks the trigger's width (with a min-w-32 floor); pass a width utility to override it.",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof DropdownMenuPrimitive.Content>",
    description: "Extends Radix's DropdownMenu.Content (side, collisionPadding, onCloseAutoFocus, loop, etc). Rendered inside a Portal, with a glassmorphism surface and enter/exit animations based on the side it opens from.",
  },
]

const dropdownMenuGroupProps: PropRow[] = [
  {
    prop: "...props",
    type: "React.ComponentProps<typeof DropdownMenuPrimitive.Group>",
    description: "Extends Radix's DropdownMenu.Group. Wraps a set of items under a shared DropdownMenuLabel; visually unstyled on its own.",
  },
]

const dropdownMenuLabelProps: PropRow[] = [
  {
    prop: "inset",
    type: "boolean",
    default: "false",
    description: "Adds left padding so the label aligns with items that carry a leading icon.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof DropdownMenuPrimitive.Label>",
    description: "Extends Radix's DropdownMenu.Label. Renders small muted text used to head a group of items.",
  },
]

const dropdownMenuItemProps: PropRow[] = [
  {
    prop: "variant",
    type: '"default" | "destructive"',
    default: '"default"',
    description: "Visual intent of the item. Destructive tints the text and focus background, for irreversible actions like delete.",
  },
  {
    prop: "inset",
    type: "boolean",
    default: "false",
    description: "Adds left padding so the item aligns with items that carry a leading icon.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof DropdownMenuPrimitive.Item>",
    description: "Extends Radix's DropdownMenu.Item. Pass disabled to make the item unselectable, and asChild to render a custom element (e.g. a Link) in its place.",
  },
]

const dropdownMenuCheckboxItemProps: PropRow[] = [
  {
    prop: "checked",
    type: 'boolean | "indeterminate"',
    description: "The controlled checked state. Pair with onCheckedChange.",
  },
  {
    prop: "inset",
    type: "boolean",
    default: "false",
    description: "Adds left padding so the item aligns with items that carry a leading icon.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>",
    description: "Extends Radix's DropdownMenu.CheckboxItem (onCheckedChange, disabled, etc). Renders a check icon on the right when checked.",
  },
]

const dropdownMenuRadioGroupProps: PropRow[] = [
  {
    prop: "value",
    type: "string",
    description: "The controlled selected value, shared by every DropdownMenuRadioItem inside. Pair with onValueChange.",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>",
    description: "Extends Radix's DropdownMenu.RadioGroup. Also accepts defaultValue for uncontrolled usage.",
  },
]

const dropdownMenuRadioItemProps: PropRow[] = [
  {
    prop: "value",
    type: "string",
    description: "The value this item represents within the enclosing DropdownMenuRadioGroup. Required.",
  },
  {
    prop: "inset",
    type: "boolean",
    default: "false",
    description: "Adds left padding so the item aligns with items that carry a leading icon.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>",
    description: "Extends Radix's DropdownMenu.RadioItem. Renders a filled dot on the right when selected.",
  },
]

const dropdownMenuSeparatorProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof DropdownMenuPrimitive.Separator>",
    description: "Extends Radix's DropdownMenu.Separator. Renders a thin horizontal rule to divide groups of items.",
  },
]

const dropdownMenuShortcutProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"span">',
    description: "The remaining native <span> attributes. Right-aligns muted text, such as a keyboard shortcut, inside a DropdownMenuItem.",
  },
]

const dropdownMenuSubProps: PropRow[] = [
  {
    prop: "...props",
    type: "React.ComponentProps<typeof DropdownMenuPrimitive.Sub>",
    description: "Extends Radix's DropdownMenu.Sub. Wraps a DropdownMenuSubTrigger and its DropdownMenuSubContent to build a nested submenu. Also accepts open, defaultOpen and onOpenChange to control the submenu independently of the parent menu.",
  },
]

const dropdownMenuSubTriggerProps: PropRow[] = [
  {
    prop: "inset",
    type: "boolean",
    default: "false",
    description: "Adds left padding so the trigger aligns with items that carry a leading icon.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger>",
    description: "Extends Radix's DropdownMenu.SubTrigger. Renders a trailing chevron and opens its DropdownMenuSubContent on hover or focus.",
  },
]

const dropdownMenuSubContentProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>",
    description: "Extends Radix's DropdownMenu.SubContent (sideOffset, alignOffset, collisionPadding, etc). Positioned beside its DropdownMenuSubTrigger, with the same glassmorphism surface as DropdownMenuContent.",
  },
]

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
