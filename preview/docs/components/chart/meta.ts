import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "chart",
  name: "Chart",
  category: "Data & Display",
  description: "A wrapper around Recharts that binds each data series to a config object of labels, icons and colors, plus styled tooltip and legend content that match the design system. Compose it with Recharts' own chart primitives, like BarChart or LineChart, to build a chart.",
  imports: ["ChartContainer", "ChartTooltip", "ChartTooltipContent", "ChartLegend", "ChartLegendContent"],
}

export const chartContainerProps: PropRow[] = [
  {
    prop: "config",
    type: "ChartConfig",
    description: "Maps each data series key to a label, an optional icon, and either a color or a light/dark theme pair. Colors are injected as --color-<key> CSS variables scoped to this chart.",
  },
  {
    prop: "children",
    type: "React.ComponentProps<typeof ResponsiveContainer>['children']",
    description: "A single Recharts chart element (e.g. <BarChart>, <LineChart>), rendered inside Recharts' own ResponsiveContainer.",
  },
  {
    prop: "initialDimension",
    type: "{ width: number; height: number }",
    default: "{ width: 320, height: 200 }",
    description: "Size assumed before the container has measured itself, used by Recharts for the first paint.",
  },
  {
    prop: "id",
    type: "string",
    description: "Used to derive a stable data-chart identifier (chart-<id>) that scopes the injected color variables. Falls back to a generated id. Not rendered as the div's own id attribute.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"div">',
    description: "The remaining native <div> attributes.",
  },
]

export const chartTooltipContentProps: PropRow[] = [
  {
    prop: "indicator",
    type: '"dot" | "line" | "dashed"',
    default: '"dot"',
    description: "Shape of the color swatch shown next to each row.",
  },
  {
    prop: "hideLabel",
    type: "boolean",
    default: "false",
    description: "Hides the label shown above the rows.",
  },
  {
    prop: "hideIndicator",
    type: "boolean",
    default: "false",
    description: "Hides the color swatch next to each row.",
  },
  {
    prop: "label",
    type: "React.ReactNode",
    description: "Label for the hovered point, provided by Recharts. Resolved against config first when it matches a string key.",
  },
  {
    prop: "labelFormatter",
    type: "(label: React.ReactNode, payload: unknown[]) => React.ReactNode",
    description: "Custom renderer for the label row.",
  },
  {
    prop: "labelClassName",
    type: "string",
    description: "Classes applied to the label row.",
  },
  {
    prop: "formatter",
    type: "(value, name, item, index, payload) => React.ReactNode",
    description: "Custom renderer for a data row, replacing the default swatch, label and value layout.",
  },
  {
    prop: "color",
    type: "string",
    description: "Overrides the indicator color for every row, regardless of each series' own color.",
  },
  {
    prop: "nameKey",
    type: "string",
    description: "Key used to look up a row's entry in config, instead of the payload item's name or dataKey.",
  },
  {
    prop: "labelKey",
    type: "string",
    description: "Key used to look up the tooltip label in config, instead of the payload item's dataKey or name.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
]

export const chartLegendContentProps: PropRow[] = [
  {
    prop: "hideIcon",
    type: "boolean",
    default: "false",
    description: "Hides each entry's icon or color swatch.",
  },
  {
    prop: "verticalAlign",
    type: '"top" | "bottom" | "middle"',
    default: '"bottom"',
    description: "Matches Legend's own verticalAlign, flipping the content's padding to sit next to the chart correctly.",
  },
  {
    prop: "nameKey",
    type: "string",
    description: "Key used to look up an entry in config, instead of the payload item's dataKey.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
]

export const props: PropRow[] = [
  ...chartContainerProps,
  ...chartTooltipContentProps,
  ...chartLegendContentProps,
]
