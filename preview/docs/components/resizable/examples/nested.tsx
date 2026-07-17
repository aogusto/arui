import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@aogusto/arui"

export default function Example() {
  return (
    <ResizablePanelGroup className="h-80 w-full max-w-lg rounded-xl border border-separator">
      <ResizablePanel defaultSize="25" minSize="15">
        <div className="flex h-full items-center justify-center p-6 text-body text-label">Sidebar</div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="75">
        <ResizablePanelGroup orientation="vertical">
          <ResizablePanel defaultSize="65">
            <div className="flex h-full items-center justify-center p-6 text-body text-label">Editor</div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize="35">
            <div className="flex h-full items-center justify-center p-6 text-body text-label">Terminal</div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
