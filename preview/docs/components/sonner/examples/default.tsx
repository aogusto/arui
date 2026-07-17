import { Button, Toaster } from "@aogusto/arui"
import { toast } from "sonner"

export default function Example() {
  return (
    <>
      <Button onClick={() => toast("Event has been created")}>Show toast</Button>
      <Toaster />
    </>
  )
}
