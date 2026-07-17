import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@aogusto/arui"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

const chartData = [
  { month: "Jan", revenue: 4200 },
  { month: "Feb", revenue: 5100 },
  { month: "Mar", revenue: 3800 },
  { month: "Apr", revenue: 6200 },
  { month: "May", revenue: 5900 },
  { month: "Jun", revenue: 7100 },
]

const chartConfig = {
  revenue: { label: "Revenue", color: "var(--chart-3)" },
} satisfies ChartConfig

export default function Example() {
  return (
    <ChartContainer config={chartConfig} className="mx-auto w-full max-w-xl">
      <BarChart data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
        <ChartTooltip content={<ChartTooltipContent indicator="dashed" />} />
        <Bar dataKey="revenue" fill="var(--color-revenue)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
