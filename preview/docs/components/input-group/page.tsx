import { Demo } from "../../Demo"
import { PropsTable } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta, inputGroupProps, addonProps, buttonProps, textProps, inputProps, textareaProps } from "./meta"

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
