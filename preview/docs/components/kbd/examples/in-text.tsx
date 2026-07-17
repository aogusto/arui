import { Kbd, KbdGroup } from "@aogusto/arui"

export default function Example() {
  return (
    <p className="max-w-sm text-body text-label-secondary">
      Press <Kbd>Esc</Kbd> to close the dialog, or open quick search with{" "}
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
      .
    </p>
  )
}
