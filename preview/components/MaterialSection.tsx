import { GlassSurface } from "@aogusto/arui"
import { MATERIALS } from "../showcase"
import { DriftingPhotos } from "./DriftingPhotos"
import { Reveal } from "./Reveal"
import { SectionHeading } from "./SectionHeading"

const TEXT_SHADOW = "[text-shadow:0_1px_14px_rgb(0_0_0/0.55)]"

export function MaterialSection() {
  return (
    <section
      id="material"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6 sm:py-28"
    >
      <Reveal>
        <SectionHeading
          eyebrow="The material"
          title="One photo. Three frosts."
          description="Every surface is real backdrop-blur plus a saturation boost — the same trick the system UI uses. Here the identical strip drifts behind all three materials at once, so the difference in blur and tint is impossible to miss."
        />
      </Reveal>

      {/* Rendered without a reveal wrapper on purpose: a lingering transform
          would break the very refraction this section exists to prove. */}
      <div className="relative mt-10 overflow-hidden rounded-3xl border border-separator">
        <DriftingPhotos
          speed={96}
          reverse
          imgClassName="w-[80vw] sm:w-[40vw]"
          overlayClassName="bg-black/20"
        />
        <div className="relative z-10 grid gap-4 p-4 sm:grid-cols-3 sm:p-6">
          {MATERIALS.map((material) => (
            <GlassSurface
              key={material.variant}
              variant={material.variant}
              className="min-h-[240px]"
            >
              <div className="flex h-full flex-col justify-between gap-10 p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className={`text-title-3 text-white ${TEXT_SHADOW}`}>
                    {material.name}
                  </span>
                  <code className="rounded-full border border-white/20 bg-black/30 px-2.5 py-1 font-mono text-caption-2 text-white/85">
                    {material.variant}
                  </code>
                </div>
                <div className="space-y-2">
                  <p
                    className={`text-caption-1 font-medium uppercase tracking-[0.14em] text-white/75 ${TEXT_SHADOW}`}
                  >
                    {material.blur}
                  </p>
                  <p className={`text-subhead text-white/90 ${TEXT_SHADOW}`}>
                    {material.body}
                  </p>
                </div>
              </div>
            </GlassSurface>
          ))}
        </div>
      </div>

      <Reveal axis="none">
        <p className="mt-4 text-footnote text-label-tertiary">
          Same imagery behind each pane — only the material changes. Falls back
          to a solid surface when a browser or OS requests reduced transparency.
        </p>
      </Reveal>
    </section>
  )
}
