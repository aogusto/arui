import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@aogusto/arui"

const placeholderCover =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='640' height='240'%3E%3Crect width='640' height='240' fill='%23737373'/%3E%3C/svg%3E"

export default function Example() {
  return (
    <Card className="w-full max-w-sm">
      <img src={placeholderCover} alt="" className="h-40 w-full object-cover" />
      <CardHeader>
        <CardTitle>Mountain trail</CardTitle>
        <CardDescription>Sunrise over the ridge, early spring.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          A leading image is rendered edge to edge with rounded top corners.
        </p>
      </CardContent>
    </Card>
  )
}
