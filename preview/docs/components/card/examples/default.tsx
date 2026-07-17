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
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>Manage how you receive updates.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Push notifications are currently enabled for this device.
        </p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline">Dismiss</Button>
        <Button>Save preferences</Button>
      </CardFooter>
    </Card>
  )
}
