import { Alert, AlertTitle, AlertDescription } from "@aogusto/arui"

export default function Example() {
  return (
    <Alert className="w-full">
      <AlertTitle>New version available</AlertTitle>
      <AlertDescription>Refresh the page to get the latest updates.</AlertDescription>
    </Alert>
  )
}
