import { Demo } from "../../Demo"
import { PropsTable, type PropRow } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta } from "./meta"

import Default from "./examples/default"
import defaultCode from "./examples/default.tsx?raw"
import Variants from "./examples/variants"
import variantsCode from "./examples/variants.tsx?raw"
import WithDescription from "./examples/with-description"
import withDescriptionCode from "./examples/with-description.tsx?raw"
import WithAction from "./examples/with-action"
import withActionCode from "./examples/with-action.tsx?raw"
import PromiseExample from "./examples/promise"
import promiseCode from "./examples/promise.tsx?raw"

const props: PropRow[] = [
  {
    prop: "theme",
    type: '"light" | "dark" | "system"',
    default: '"system"',
    description: "Color theme applied to the toasts. Resolved automatically from the app's next-themes provider, so you usually don't need to pass it yourself.",
  },
  {
    prop: "position",
    type: '"top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center"',
    default: '"bottom-right"',
    description: "Where the toast stack is anchored on the screen.",
  },
  {
    prop: "richColors",
    type: "boolean",
    default: "false",
    description: "Applies a bold background color per toast type (success, error, etc) instead of the neutral glass surface.",
  },
  {
    prop: "expand",
    type: "boolean",
    default: "false",
    description: "Expands all toasts by default instead of collapsing them into a stack.",
  },
  {
    prop: "duration",
    type: "number",
    default: "4000",
    description: "Default time in milliseconds before a toast auto dismisses.",
  },
  {
    prop: "closeButton",
    type: "boolean",
    default: "false",
    description: "Shows a dismiss button on every toast.",
  },
  {
    prop: "icons",
    type: "ToastIcons",
    default: "success / info / warning / error / loading icons from lucide-react",
    description: "Icons rendered per toast type. This wrapper presets all five; pass your own object to override any of them.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof Sonner>",
    description: "Extends the Toaster component from sonner (richColors, gap, visibleToasts, offset, hotkey, dir, toastOptions, and more).",
  },
]

export default function SonnerDoc() {
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
        <Demo title="Variants" code={variantsCode}><Variants /></Demo>
        <Demo title="With description" code={withDescriptionCode}><WithDescription /></Demo>
        <Demo title="With action" code={withActionCode}><WithAction /></Demo>
        <Demo title="Promise" code={promiseCode}><PromiseExample /></Demo>
      </div>

      <section className="space-y-3">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>
        <PropsTable rows={props} />
      </section>
    </article>
  )
}
