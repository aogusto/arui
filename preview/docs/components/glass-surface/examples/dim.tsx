import { GlassSurface } from "@aogusto/arui"

export default function Example() {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-yellow via-orange to-pink p-10">
      <div className="relative flex flex-wrap items-center justify-center gap-4">
        <GlassSurface variant="clear">
          <div className="w-44 space-y-1 p-4 text-center">
            <p className="text-subhead font-semibold text-white">Without dim</p>
            <p className="text-caption-2 text-white/80">Text can get lost on bright backgrounds</p>
          </div>
        </GlassSurface>
        <GlassSurface variant="clear" dim>
          <div className="w-44 space-y-1 p-4 text-center">
            <p className="text-subhead font-semibold text-white">With dim</p>
            <p className="text-caption-2 text-white/80">A dark scrim keeps the content readable</p>
          </div>
        </GlassSurface>
      </div>
    </div>
  )
}
