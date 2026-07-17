import { Demo } from "../../Demo"
import { PropsTable, type PropRow } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta } from "./meta"

import BarChart from "./examples/bar-chart"
import barChartCode from "./examples/bar-chart.tsx?raw"
import LineChart from "./examples/line-chart"
import lineChartCode from "./examples/line-chart.tsx?raw"
import BarChartMultiple from "./examples/bar-chart-multiple"
import barChartMultipleCode from "./examples/bar-chart-multiple.tsx?raw"
import TooltipDashed from "./examples/tooltip-dashed"
import tooltipDashedCode from "./examples/tooltip-dashed.tsx?raw"

const chartContainerProps: PropRow[] = [
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

const chartTooltipContentProps: PropRow[] = [
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

const chartLegendContentProps: PropRow[] = [
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

export default function ChartDoc() {
  const importLine = `import { ${meta.imports.join(", ")} } from "@aogusto/arui"`
  return (
    <article className="mx-auto w-full max-w-3xl space-y-10">
      <header className="space-y-2">
        <p className="text-caption-1 font-semibold uppercase tracking-wide text-label-tertiary">{meta.category}</p>
        <h1 className="text-title-1 font-bold text-label">{meta.name}</h1>
        <p className="text-body text-label-secondary">{meta.description}</p>
      </header>

      <div className="flex items-center justify-between rounded-xl border border-separator bg-background-secondary px-3 py-2">
        <code className="font-mono text-caption-1 text-label">{importLine}</code>
        <CopyButton value={importLine} />
      </div>

      <div className="space-y-10">
        <Demo title="Bar chart" code={barChartCode}><BarChart /></Demo>
        <Demo title="Line chart" code={lineChartCode}><LineChart /></Demo>
        <Demo title="Multiple series" code={barChartMultipleCode}><BarChartMultiple /></Demo>
        <Demo title="Dashed indicator" code={tooltipDashedCode}><TooltipDashed /></Demo>
      </div>

      <section className="space-y-6">
        <h2 className="text-title-3 font-semibold text-label">Props</h2>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ChartContainer</h3>
          <PropsTable rows={chartContainerProps} />
        </div>

        <p className="text-subhead text-label-secondary">
          <code className="font-mono text-caption-1">ChartConfig</code> is a plain object keyed by series/dataKey. Each
          entry takes a <code className="font-mono text-caption-1">label</code>, an optional{" "}
          <code className="font-mono text-caption-1">icon</code>, and either a single{" "}
          <code className="font-mono text-caption-1">color</code> or a{" "}
          <code className="font-mono text-caption-1">theme</code> object with separate light and dark colors.
        </p>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ChartTooltip</h3>
          <p className="text-subhead text-label-secondary">
            Recharts' own Tooltip component, re-exported as is. Pass it a <code className="font-mono text-caption-1">content</code> prop,
            typically <code className="font-mono text-caption-1">{"<ChartTooltipContent />"}</code>.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ChartTooltipContent</h3>
          <PropsTable rows={chartTooltipContentProps} />
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ChartLegend</h3>
          <p className="text-subhead text-label-secondary">
            Recharts' own Legend component, re-exported as is. Pass it a <code className="font-mono text-caption-1">content</code> prop,
            typically <code className="font-mono text-caption-1">{"<ChartLegendContent />"}</code>.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-headline font-semibold text-label">ChartLegendContent</h3>
          <PropsTable rows={chartLegendContentProps} />
        </div>

        <p className="text-subhead text-label-secondary">
          ChartStyle is rendered automatically inside ChartContainer. It injects the --color-&lt;key&gt; CSS variables
          for each theme (light and dark selectors), so it is not something you render yourself.
        </p>
      </section>
    </article>
  )
}
