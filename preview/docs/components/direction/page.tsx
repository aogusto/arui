import { Demo } from "../../Demo"
import { PropsTable, type PropRow } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta } from "./meta"

import Mirroring from "./examples/mirroring"
import mirroringCode from "./examples/mirroring.tsx?raw"
import BreadcrumbExample from "./examples/breadcrumb"
import breadcrumbCode from "./examples/breadcrumb.tsx?raw"
import UseDirectionExample from "./examples/use-direction"
import useDirectionCode from "./examples/use-direction.tsx?raw"
import Nested from "./examples/nested"
import nestedCode from "./examples/nested.tsx?raw"

const directionProviderProps: PropRow[] = [
  {
    prop: "dir",
    type: '"ltr" | "rtl"',
    description: "The reading direction shared with descendants through context. Direction aware primitives (Select, Tabs, Slider, Menu, and others) read it to resolve keyboard navigation and layout logic.",
  },
  {
    prop: "direction",
    type: '"ltr" | "rtl"',
    description: "Alias for dir. Takes precedence over dir when both are provided.",
  },
  {
    prop: "children",
    type: "React.ReactNode",
    description: "The subtree that should read this direction. DirectionProvider renders no DOM element of its own, only React context, so it doesn't accept className or other HTML attributes.",
  },
]

const useDirectionProps: PropRow[] = [
  {
    prop: "localDir",
    type: '"ltr" | "rtl" | undefined',
    description: "Optional explicit direction for this call. Takes precedence over the nearest DirectionProvider above it.",
  },
  {
    prop: "returns",
    type: '"ltr" | "rtl"',
    description: "The resolved direction: localDir if provided, otherwise the nearest DirectionProvider's dir, otherwise \"ltr\".",
  },
]

export default function DirectionDoc() {
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
        <Demo title="Visual mirroring" description="dir on the wrapping element flips the flex layout; the rtl group visually reverses One, Two, Three." code={mirroringCode}>
          <Mirroring />
        </Demo>
        <Demo title="Breadcrumb" description="The separator's rtl:rotate-180 class follows the same convention used by Calendar's prev/next chevrons." code={breadcrumbCode}>
          <BreadcrumbExample />
        </Demo>
        <Demo title="useDirection" description="Reads the direction from the nearest DirectionProvider." code={useDirectionCode}>
          <UseDirectionExample />
        </Demo>
        <Demo title="Nested override" description="An inner DirectionProvider overrides the outer one for a single island, such as a code snippet inside an RTL page." code={nestedCode}>
          <Nested />
        </Demo>
      </div>

      <section className="space-y-6">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">DirectionProvider</h3>
          <PropsTable rows={directionProviderProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">useDirection(localDir?)</h3>
          <PropsTable rows={useDirectionProps} />
        </div>
      </section>
    </article>
  )
}
