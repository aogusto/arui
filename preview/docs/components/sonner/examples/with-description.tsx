import { Button, Toaster } from "@aogusto/arui"
import { toast } from "sonner"

export default function Example() {
  return (
    <>
      <Button
        onClick={() =>
          toast("Event has been created", {
            description: "Monday, January 12 at 6:00 PM",
          })
        }
      >
        Show toast
      </Button>
      <Toaster />
    </>
  )
}
