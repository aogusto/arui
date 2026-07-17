import { Demo } from "../../Demo"
import { PropsTable, type PropRow } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta } from "./meta"

import Default from "./examples/default"
import defaultCode from "./examples/default.tsx?raw"
import WithLabel from "./examples/with-label"
import withLabelCode from "./examples/with-label.tsx?raw"
import Sizes from "./examples/sizes"
import sizesCode from "./examples/sizes.tsx?raw"
import OptionGroups from "./examples/option-groups"
import optionGroupsCode from "./examples/option-groups.tsx?raw"
import Disabled from "./examples/disabled"
import disabledCode from "./examples/disabled.tsx?raw"

const nativeSelectProps: PropRow[] = [
  {
    prop: "size",
    type: '"default" | "sm"',
    default: '"default"',
    description: "Size of the select. Sets the trigger height only, not the native HTML size attribute.",
  },
  {
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables the select and dims the wrapper.",
  },
  {
    prop: "aria-invalid",
    type: "boolean | 'true' | 'false'",
    description: "Marks the select as invalid, switching the border and focus ring to the destructive color.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged via cn() with the wrapper div's styles (not applied to the underlying <select>).",
  },
  {
    prop: "...props",
    type: "Omit<React.ComponentProps<'select'>, 'size'>",
    description: "The remaining native <select> attributes (value, onChange, multiple, etc.). Native size is omitted in favor of the size prop above.",
  },
]

const nativeSelectOptionProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'option'>",
    description: "The remaining native <option> attributes (value, disabled, etc.).",
  },
]

const nativeSelectOptGroupProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<'optgroup'>",
    description: "The remaining native <optgroup> attributes (label, disabled, etc.).",
  },
]

export default function NativeSelectDoc() {
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
        <Demo title="With label" code={withLabelCode}><WithLabel /></Demo>
        <Demo title="Sizes" code={sizesCode}><Sizes /></Demo>
        <Demo title="Option groups" code={optionGroupsCode}><OptionGroups /></Demo>
        <Demo title="Disabled" code={disabledCode}><Disabled /></Demo>
      </div>

      <section className="space-y-6">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">NativeSelect</h3>
          <PropsTable rows={nativeSelectProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">NativeSelectOption</h3>
          <PropsTable rows={nativeSelectOptionProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">NativeSelectOptGroup</h3>
          <PropsTable rows={nativeSelectOptGroupProps} />
        </div>
      </section>
    </article>
  )
}
