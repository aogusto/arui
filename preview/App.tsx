import { cn } from "@/lib/utils"
import { GlassSurface } from "@/components/ui/glass-surface"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

function ThemeToggle() {
  return (
    <button
      type="button"
      className="fixed right-4 top-4 rounded-lg border border-separator px-3 py-1 text-footnote"
      onClick={() => document.documentElement.classList.toggle("dark")}
    >
      toggle theme
    </button>
  )
}

export default function App() {
  return (
    <div className="min-h-dvh bg-background p-8 space-y-4">
      <ThemeToggle />
      <h1 className="text-large-title text-label">Arui</h1>
      <p className={cn("text-body text-label-secondary", "text-callout")}>
        Fundação: type scale HIG + cores semânticas + cn().
      </p>
      <div className="flex gap-3">
        <div className="size-16 rounded-2xl bg-fill" />
        <div className="size-16 rounded-2xl bg-fill-secondary" />
        <div className="size-16 rounded-2xl border border-separator shadow-glass" />
      </div>

      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 to-pink-500 p-8 space-y-4">
        <GlassSurface variant="regular" className="w-64">
          <div className="p-6 text-label">Glass regular</div>
        </GlassSurface>
        <GlassSurface variant="thick" className="w-64">
          <div className="p-6 text-label">Glass thick</div>
        </GlassSurface>
        <GlassSurface variant="clear" dim className="w-64">
          <div className="p-6 text-white">Glass clear (dim)</div>
        </GlassSurface>
      </div>

      <section className="space-y-3">
        <h2 className="text-title-2 text-label">Primitives</h2>

        <div className="flex flex-wrap gap-2">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="ghost">Ghost</Button>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Badge>Badge</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>

        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>Card title</CardTitle>
            <CardDescription>A short supporting description.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Type here…" />
          </CardContent>
          <CardFooter>
            <Button size="sm">Save</Button>
          </CardFooter>
        </Card>

        <Skeleton className="h-8 w-48" />

        <Tabs defaultValue="a" className="max-w-sm">
          <TabsList>
            <TabsTrigger value="a">A</TabsTrigger>
            <TabsTrigger value="b">B</TabsTrigger>
          </TabsList>
          <TabsContent value="a">Content A</TabsContent>
          <TabsContent value="b">Content B</TabsContent>
        </Tabs>
      </section>
    </div>
  )
}
