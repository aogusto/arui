import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@aogusto/arui"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

const chartData = [
  { month: "Jan", visitors: 186 },
  { month: "Feb", visitors: 305 },
  { month: "Mar", visitors: 237 },
  { month: "Apr", visitors: 173 },
  { month: "May", visitors: 209 },
  { month: "Jun", visitors: 214 },
]

const chartConfig = {
  visitors: { label: "Visitors", color: "var(--chart-1)" },
} satisfies ChartConfig

export default function Example() {
  return (
    <ChartContainer config={chartConfig} className="mx-auto w-full max-w-xl">
      <LineChart data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
        <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
        <Line dataKey="visitors" type="monotone" stroke="var(--color-visitors)" strokeWidth={2} dot={false} />
      </LineChart>
    </ChartContainer>
  )
}
