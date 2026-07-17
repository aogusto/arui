import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@aogusto/arui"
import { toast } from "sonner"

export default function Example() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">View order</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Order #4821</DialogTitle>
          <DialogDescription>
            Placed on June 3, shipped to 120 King St, Toronto.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter showCloseButton>
          <Button onClick={() => toast.success("Receipt sent to your email")}>
            Email receipt
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
