import { Demo } from "../../Demo"
import { PropsTable, type PropRow } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta } from "./meta"

import Default from "./examples/default"
import defaultCode from "./examples/default.tsx?raw"
import Square from "./examples/square"
import squareCode from "./examples/square.tsx?raw"
import Portrait from "./examples/portrait"
import portraitCode from "./examples/portrait.tsx?raw"
import Video from "./examples/video"
import videoCode from "./examples/video.tsx?raw"

const props: PropRow[] = [
  {
    prop: "ratio",
    type: "number",
    default: "1",
    description: "The desired width to height ratio, e.g. 16 / 9 for a widescreen box or 2 / 3 for a portrait poster.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes applied to the underlying element. AspectRatio has no default styles of its own to merge with, so this fully controls the box's appearance.",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof AspectRatioPrimitive.Root>",
    description: "Extends AspectRatio.Root from radix-ui. Children fill the ratio box through an absolutely positioned wrapper, so an <img> or <iframe> should use h-full w-full object-cover to fill it.",
  },
]

export default function AspectRatioDoc() {
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
        <Demo title="Square" code={squareCode}><Square /></Demo>
        <Demo title="Portrait" code={portraitCode}><Portrait /></Demo>
        <Demo title="Video thumbnail" code={videoCode}><Video /></Demo>
      </div>

      <section className="space-y-3">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>
        <PropsTable rows={props} />
      </section>
    </article>
  )
}
