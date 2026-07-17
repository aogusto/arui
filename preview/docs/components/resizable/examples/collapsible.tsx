import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@aogusto/arui"

export default function Example() {
  return (
    <ResizablePanelGroup className="h-72 w-full max-w-md rounded-xl border border-separator">
      <ResizablePanel defaultSize="25" minSize="15" collapsible collapsedSize="4">
        <div className="flex h-full items-center justify-center p-6 text-body text-label">Sidebar</div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="75">
        <div className="flex h-full items-center justify-center p-6 text-body text-label">Content</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
