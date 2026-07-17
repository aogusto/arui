import { GlassSurface, Button } from "@aogusto/arui"

export default function Example() {
  return (
    <div className="relative flex w-full flex-col justify-end overflow-hidden rounded-2xl bg-gradient-to-br from-mint via-teal to-cyan p-10">
      <GlassSurface variant="thick" className="mx-auto w-full max-w-sm overflow-hidden">
        <div className="flex items-center justify-between gap-3 p-4">
          <div>
            <p className="text-subhead font-semibold text-white">3 items selected</p>
            <p className="text-caption-1 text-white/70">Choose an action</p>
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="destructive">Delete</Button>
            <Button size="sm">Move</Button>
          </div>
        </div>
      </GlassSurface>
    </div>
  )
}
