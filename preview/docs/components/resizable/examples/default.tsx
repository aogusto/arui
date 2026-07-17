import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@aogusto/arui"

export default function Example() {
  return (
    <ResizablePanelGroup className="h-72 w-full max-w-md rounded-xl border border-separator">
      <ResizablePanel defaultSize="50">
        <div className="flex h-full items-center justify-center p-6 text-body text-label">One</div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize="50">
        <div className="flex h-full items-center justify-center p-6 text-body text-label">Two</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
