import { cn } from "@/lib/utils"
import { GlassSurface } from "@/components/ui/glass-surface"

export default function App() {
  return (
    <div className="min-h-dvh bg-background p-8 space-y-4">
      <h1 className="text-large-title text-label">Arui</h1>
      <p className={cn("text-body text-label-secondary", "text-callout")}>
        Fundação: type scale HIG + cores semânticas + cn().
      </p>
      <div className="flex gap-3">
        <div className="size-16 rounded-2xl bg-fill" />
        <div className="size-16 rounded-2xl bg-fill-secondary" />
        <div className="size-16 rounded-2xl border border-separator shadow-glass" />
      </div>

      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 to-pink-500 p-8 space-y-4">
        <GlassSurface variant="regular" className="w-64">
          <div className="p-6 text-label">Glass regular</div>
        </GlassSurface>
        <GlassSurface variant="thick" className="w-64">
          <div className="p-6 text-label">Glass thick</div>
        </GlassSurface>
        <GlassSurface variant="clear" dim className="w-64">
          <div className="p-6 text-white">Glass clear (dim)</div>
        </GlassSurface>
      </div>
    </div>
  )
}
