import { GlassSurface } from "@aogusto/arui"

export default function Example() {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-indigo via-purple to-pink p-10">
      <div aria-hidden className="absolute -left-8 top-6 size-32 rounded-full bg-cyan/70 blur-3xl" />
      <div aria-hidden className="absolute -right-6 bottom-0 size-40 rounded-full bg-yellow/60 blur-3xl" />
      <div className="relative flex flex-wrap items-center justify-center gap-4">
        <GlassSurface variant="regular">
          <div className="w-40 space-y-1 p-4 text-center">
            <p className="text-subhead font-semibold text-white">Regular</p>
            <p className="text-caption-2 text-white/70">Default panel material</p>
          </div>
        </GlassSurface>
        <GlassSurface variant="thick">
          <div className="w-40 space-y-1 p-4 text-center">
            <p className="text-subhead font-semibold text-white">Thick</p>
            <p className="text-caption-2 text-white/70">More opaque, higher contrast</p>
          </div>
        </GlassSurface>
        <GlassSurface variant="clear">
          <div className="w-40 space-y-1 p-4 text-center">
            <p className="text-subhead font-semibold text-white">Clear</p>
            <p className="text-caption-2 text-white/70">Most transparent, pairs with dim</p>
          </div>
        </GlassSurface>
      </div>
    </div>
  )
}
