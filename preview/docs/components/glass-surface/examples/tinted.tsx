import { GlassSurface } from "@aogusto/arui"

export default function Example() {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-indigo via-purple to-pink p-10">
      <div className="relative flex flex-wrap items-center justify-center gap-4">
        <GlassSurface tint="accent">
          <div className="w-40 space-y-1 p-4 text-center">
            <p className="text-subhead font-semibold text-foreground">Accent tint</p>
            <p className="text-caption-2 text-foreground/70">Follows the theme primary</p>
          </div>
        </GlassSurface>
        <GlassSurface tint="#22c55e">
          <div className="w-40 space-y-1 p-4 text-center">
            <p className="text-subhead font-semibold text-foreground">Custom tint</p>
            <p className="text-caption-2 text-foreground/70">Any CSS color</p>
          </div>
        </GlassSurface>
      </div>
    </div>
  )
}
