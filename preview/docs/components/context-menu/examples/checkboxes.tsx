import { useState } from "react"
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@aogusto/arui"

export default function Example() {
  const [showGrid, setShowGrid] = useState(true)
  const [showRulers, setShowRulers] = useState(false)

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-xl border border-dashed border-separator text-callout text-label-secondary">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel>View</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem checked={showGrid} onCheckedChange={setShowGrid}>
          Show grid
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem checked={showRulers} onCheckedChange={setShowRulers}>
          Show rulers
        </ContextMenuCheckboxItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
