import { Demo } from "../../Demo"
import { PropsTable, type PropRow } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta } from "./meta"

import Default from "./examples/default"
import defaultCode from "./examples/default.tsx?raw"
import Alignment from "./examples/alignment"
import alignmentCode from "./examples/alignment.tsx?raw"
import ButtonSizes from "./examples/button-sizes"
import buttonSizesCode from "./examples/button-sizes.tsx?raw"
import WithText from "./examples/with-text"
import withTextCode from "./examples/with-text.tsx?raw"
import Textarea from "./examples/textarea"
import textareaCode from "./examples/textarea.tsx?raw"
import Disabled from "./examples/disabled"
import disabledCode from "./examples/disabled.tsx?raw"

const inputGroupProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "The remaining native <div> attributes. Rendered with role=\"group\"; wraps the field (InputGroupInput / InputGroupTextarea) and its addons.",
  },
]

const addonProps: PropRow[] = [
  {
    prop: "align",
    type: '"inline-start" | "inline-end" | "block-start" | "block-end"',
    default: '"inline-start"',
    description: "Position of the addon: inline on either side of the field, or as a full width bar above/below it.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'div'>",
    description: "The remaining native <div> attributes. Rendered with role=\"group\"; clicking it focuses the adjacent field.",
  },
]

const buttonProps: PropRow[] = [
  {
    prop: "variant",
    type: '"default" | "outline" | "secondary" | "ghost" | "destructive" | "link"',
    default: '"ghost"',
    description: "Visual style, inherited from Button.",
  },
  {
    prop: "size",
    type: '"xs" | "sm" | "icon-xs" | "icon-sm"',
    default: '"xs"',
    description: "Size tuned to sit inside an addon, including icon only sizes.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "Omit<React.ComponentProps<typeof Button>, 'size'>",
    description: "Extends Button (asChild, disabled, onClick, type, etc.), minus its own size prop.",
  },
]

const textProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'span'>",
    description: "The remaining native <span> attributes. Use for plain text affixes such as $, .dev, or a character count.",
  },
]

const inputProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'input'>",
    description: "The remaining native <input> attributes. Renders as Input, borderless and transparent so it blends into the group.",
  },
]

const textareaProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'textarea'>",
    description: "The remaining native <textarea> attributes. Renders as Textarea, borderless, transparent, and non resizable.",
  },
]

export default function InputGroupDoc() {
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
        <Demo title="Addon alignment" code={alignmentCode}><Alignment /></Demo>
        <Demo title="Button sizes" code={buttonSizesCode}><ButtonSizes /></Demo>
        <Demo title="With text" code={withTextCode}><WithText /></Demo>
        <Demo title="Textarea" code={textareaCode}><Textarea /></Demo>
        <Demo title="Disabled" code={disabledCode}><Disabled /></Demo>
      </div>

      <section className="space-y-8">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">InputGroup</h3>
          <PropsTable rows={inputGroupProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">InputGroupAddon</h3>
          <PropsTable rows={addonProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">InputGroupButton</h3>
          <PropsTable rows={buttonProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">InputGroupText</h3>
          <PropsTable rows={textProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">InputGroupInput</h3>
          <PropsTable rows={inputProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">InputGroupTextarea</h3>
          <PropsTable rows={textareaProps} />
        </div>
      </section>
    </article>
  )
}
