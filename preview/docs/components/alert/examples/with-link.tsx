import { Alert, AlertTitle, AlertDescription } from "@aogusto/arui"
import { AlertTriangle } from "lucide-react"

export default function Example() {
  return (
    <Alert variant="destructive" className="w-full">
      <AlertTriangle />
      <AlertTitle>Your plan expires soon</AlertTitle>
      <AlertDescription>
        Renew before the end of the month or <a href="#">contact support</a> for help.
      </AlertDescription>
    </Alert>
  )
}
