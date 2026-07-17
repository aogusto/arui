import { Alert, AlertTitle, AlertDescription } from "@aogusto/arui"
import { CheckCircle2, AlertCircle } from "lucide-react"

export default function Example() {
  return (
    <div className="flex w-full flex-col gap-4">
      <Alert>
        <CheckCircle2 />
        <AlertTitle>Changes saved</AlertTitle>
        <AlertDescription>Your profile settings were updated successfully.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertCircle />
        <AlertTitle>Payment failed</AlertTitle>
        <AlertDescription>
          We couldn't process your card. Update your payment method to keep your subscription active.
        </AlertDescription>
      </Alert>
    </div>
  )
}
