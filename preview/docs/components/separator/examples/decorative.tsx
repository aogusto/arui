import { Separator } from "@aogusto/arui"

export default function Example() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <p className="text-body text-label">
        Radix Primitives is an open source UI component library for building high quality, accessible design
        systems.
      </p>
      <Separator decorative={false} />
      <p className="text-body text-label">
        Setting decorative to false exposes the separator to assistive technology as a real, meaningful boundary
        between content instead of a purely visual line.
      </p>
    </div>
  )
}
