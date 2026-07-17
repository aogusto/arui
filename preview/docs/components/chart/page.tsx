import { Demo } from "../../Demo"
import { PropsTable } from "../../PropsTable"
import { CopyButton } from "../../../components/CopyButton"
import { meta, chartContainerProps, chartTooltipContentProps, chartLegendContentProps } from "./meta"

import BarChart from "./examples/bar-chart"
import barChartCode from "./examples/bar-chart.tsx?raw"
import LineChart from "./examples/line-chart"
import lineChartCode from "./examples/line-chart.tsx?raw"
import BarChartMultiple from "./examples/bar-chart-multiple"
import barChartMultipleCode from "./examples/bar-chart-multiple.tsx?raw"
import TooltipDashed from "./examples/tooltip-dashed"
import tooltipDashedCode from "./examples/tooltip-dashed.tsx?raw"

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
