import { Alert, AlertDescription } from "@aogusto/arui"
import { Info } from "lucide-react"

export default function Example() {
  return (
    <Alert className="w-full">
      <Info />
      <AlertDescription>You can invite up to 10 teammates on the free plan.</AlertDescription>
    </Alert>
  )
}
