import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "chart",
  name: "Chart",
  category: "Data & Display",
  description: "A wrapper around Recharts that binds each data series to a config object of labels, icons and colors, plus styled tooltip and legend content that match the design system. Compose it with Recharts' own chart primitives, like BarChart or LineChart, to build a chart.",
  imports: ["ChartContainer", "ChartTooltip", "ChartTooltipContent", "ChartLegend", "ChartLegendContent"],
}
