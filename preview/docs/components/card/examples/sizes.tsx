import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@aogusto/arui"

export default function Example() {
  return (
    <div className="flex w-full flex-col gap-4 sm:flex-row">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Default</CardTitle>
          <CardDescription>Standard padding and gaps.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">The default density.</p>
        </CardContent>
      </Card>
      <Card size="sm" className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Compact</CardTitle>
          <CardDescription>Reduced padding and gaps.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">A denser layout for tight spaces.</p>
        </CardContent>
      </Card>
    </div>
  )
}
