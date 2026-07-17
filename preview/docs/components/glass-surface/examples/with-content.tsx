import { GlassSurface, Button } from "@aogusto/arui"

export default function Example() {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-teal via-cyan to-indigo p-10">
      <div className="mx-auto max-w-sm">
        <GlassSurface variant="regular" className="overflow-hidden">
          <div className="space-y-4 p-6">
            <div className="space-y-1">
              <h3 className="text-headline font-semibold text-foreground">Update available</h3>
              <p className="text-subhead text-foreground/80">
                A new version is ready to install. Restart to apply it.
              </p>
            </div>
            <div className="flex gap-2">
              <Button size="sm">Restart now</Button>
              <Button size="sm" variant="ghost">
                Later
              </Button>
            </div>
          </div>
        </GlassSurface>
      </div>
    </div>
  )
}
