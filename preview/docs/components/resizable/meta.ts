import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "resizable",
  name: "Resizable",
  category: "Data & Display",
  description: "A set of resizable panels built on react-resizable-panels, letting users drag a handle to adjust the size of adjacent panels in a horizontal or vertical layout. Composed of a ResizablePanelGroup holding ResizablePanel elements separated by a ResizableHandle.",
  imports: ["ResizablePanelGroup", "ResizablePanel", "ResizableHandle"],
}
