import { Button, Toaster } from "@aogusto/arui"
import { toast } from "sonner"

export default function Example() {
  return (
    <>
      <Button
        onClick={() =>
          toast("Item removed from cart", {
            action: {
              label: "Undo",
              onClick: () => toast("Item restored"),
            },
          })
        }
      >
        Show toast with action
      </Button>
      <Toaster />
    </>
  )
}
