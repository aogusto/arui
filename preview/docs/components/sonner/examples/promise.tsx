import { Button, Toaster } from "@aogusto/arui"
import { toast } from "sonner"

function saveSettings() {
  return new Promise<{ name: string }>((resolve) => {
    setTimeout(() => resolve({ name: "Settings" }), 1500)
  })
}

export default function Example() {
  return (
    <>
      <Button
        onClick={() =>
          toast.promise(saveSettings, {
            loading: "Saving settings",
            success: (data) => `${data.name} saved successfully`,
            error: "Could not save settings",
          })
        }
      >
        Show promise toast
      </Button>
      <Toaster />
    </>
  )
}
