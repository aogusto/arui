import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "alert",
  name: "Alert",
  category: "Data & Display",
  description: "A callout for important information, with default and destructive variants. Compose it with AlertTitle, AlertDescription, and an optional leading icon or AlertAction slot for a trailing button.",
  imports: ["Alert", "AlertTitle", "AlertDescription", "AlertAction"],
}
