import { Spinner } from "@aogusto/arui"

export default function Example() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Spinner className="size-6 text-primary" />
      <Spinner className="size-6 text-destructive" />
      <Spinner className="size-6 text-green" />
      <Spinner className="size-6 text-muted-foreground" />
    </div>
  )
}
