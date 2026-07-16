import { cn } from "@/lib/utils"

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
    </div>
  )
}
