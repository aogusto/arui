import { Demo } from "../../Demo"
import { PropsTable } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import {
  meta,
  carouselProps,
  carouselContentProps,
  carouselItemProps,
  carouselPreviousProps,
  carouselNextProps,
} from "./meta"

import Default from "./examples/default"
import defaultCode from "./examples/default.tsx?raw"
import MultipleItems from "./examples/multiple-items"
import multipleItemsCode from "./examples/multiple-items.tsx?raw"
import Vertical from "./examples/vertical"
import verticalCode from "./examples/vertical.tsx?raw"
import Loop from "./examples/loop"
import loopCode from "./examples/loop.tsx?raw"
import WithApi from "./examples/with-api"
import withApiCode from "./examples/with-api.tsx?raw"

export default function CarouselDoc() {
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
        <Demo title="Multiple items per view" code={multipleItemsCode}><MultipleItems /></Demo>
        <Demo title="Vertical orientation" code={verticalCode}><Vertical /></Demo>
        <Demo title="Loop" code={loopCode}><Loop /></Demo>
        <Demo title="Reading the current slide (API)" code={withApiCode}><WithApi /></Demo>
      </div>

      <section className="space-y-6">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">Carousel</h3>
          <PropsTable rows={carouselProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">CarouselContent</h3>
          <PropsTable rows={carouselContentProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">CarouselItem</h3>
          <PropsTable rows={carouselItemProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">CarouselPrevious</h3>
          <PropsTable rows={carouselPreviousProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">CarouselNext</h3>
          <PropsTable rows={carouselNextProps} />
        </div>

        <p className="text-subhead text-label-secondary">
          <code className="font-mono text-caption-1">useCarousel()</code> is the hook that powers CarouselPrevious and CarouselNext.
          Call it inside a descendant of Carousel to build custom controls; it returns{" "}
          <code className="font-mono text-caption-1">{"{ api, orientation, scrollPrev, scrollNext, canScrollPrev, canScrollNext }"}</code>.
        </p>
      </section>
    </article>
  )
}
