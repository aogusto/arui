import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "progress",
  name: "Progress",
  category: "Data & Display",
  description: "A thin horizontal bar that visualizes how far along a task or process is, built on Radix UI. Drive it with a numeric value between 0 and its max.",
  imports: ["Progress"],
}
