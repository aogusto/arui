import { Demo } from "../../Demo"
import { PropsTable, type PropRow } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta } from "./meta"

import Default from "./examples/default"
import defaultCode from "./examples/default.tsx?raw"
import AvatarAndText from "./examples/avatar-and-text"
import avatarAndTextCode from "./examples/avatar-and-text.tsx?raw"
import Card from "./examples/card"
import cardCode from "./examples/card.tsx?raw"
import List from "./examples/list"
import listCode from "./examples/list.tsx?raw"

const props: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn(). Controls width, height, and shape (rounded-full, rounded-xl, etc), since Skeleton has no size of its own.",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"div">',
    description: "The remaining native <div> attributes. Renders as a <div data-slot=\"skeleton\"> with a pulsing muted background.",
  },
]

export default function SkeletonDoc() {
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
        <Demo title="Avatar and text" code={avatarAndTextCode}><AvatarAndText /></Demo>
        <Demo title="Card" code={cardCode}><Card /></Demo>
        <Demo title="List" code={listCode}><List /></Demo>
      </div>

      <section className="space-y-3">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>
        <PropsTable rows={props} />
      </section>
    </article>
  )
}
