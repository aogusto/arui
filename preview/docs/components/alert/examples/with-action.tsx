import { Alert, AlertTitle, AlertDescription, AlertAction, Button } from "@aogusto/arui"
import { HardDrive } from "lucide-react"

export default function Example() {
  return (
    <Alert className="w-full max-w-md">
      <HardDrive />
      <AlertTitle>Storage almost full</AlertTitle>
      <AlertDescription>You're using 92% of your available storage.</AlertDescription>
      <AlertAction>
        <Button size="sm" variant="outline">
          Upgrade
        </Button>
      </AlertAction>
    </Alert>
  )
}
