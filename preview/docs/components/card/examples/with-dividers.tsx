import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
} from "@aogusto/arui"

export default function Example() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="border-b">
        <CardTitle>Pro plan</CardTitle>
        <CardDescription>Billed monthly, cancel anytime.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Includes unlimited projects, priority support, and advanced analytics.
        </p>
      </CardContent>
      <CardFooter className="border-t">
        <Button className="w-full">Manage subscription</Button>
      </CardFooter>
    </Card>
  )
}
