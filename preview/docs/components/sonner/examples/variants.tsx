import { Button, Toaster } from "@aogusto/arui"
import { toast } from "sonner"

export default function Example() {
  return (
    <>
      <div className="flex flex-wrap items-center gap-3">
        <Button variant="outline" onClick={() => toast.success("Changes saved")}>
          Success
        </Button>
        <Button variant="outline" onClick={() => toast.info("New version available")}>
          Info
        </Button>
        <Button variant="outline" onClick={() => toast.warning("Storage almost full")}>
          Warning
        </Button>
        <Button variant="outline" onClick={() => toast.error("Failed to save changes")}>
          Error
        </Button>
        <Button variant="outline" onClick={() => toast.loading("Uploading file")}>
          Loading
        </Button>
      </div>
      <Toaster />
    </>
  )
}
