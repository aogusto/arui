import { Separator } from "@aogusto/arui"

export default function Example() {
  return (
    <div className="w-full max-w-sm">
      <div className="space-y-1">
        <h4 className="text-headline text-label">Arui</h4>
        <p className="text-body text-label-secondary">A component library for React.</p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center gap-4 text-callout text-label-secondary">
        <span>Blog</span>
        <Separator orientation="vertical" />
        <span>Docs</span>
        <Separator orientation="vertical" />
        <span>Source</span>
      </div>
    </div>
  )
}
