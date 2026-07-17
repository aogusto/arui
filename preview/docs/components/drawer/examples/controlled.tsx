import { useState } from "react"
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  Button,
} from "@aogusto/arui"

export default function Example() {
  const [open, setOpen] = useState(false)

  return (
    <Drawer open={open} onOpenChange={setOpen} dismissible={false}>
      <DrawerTrigger asChild>
        <Button variant="outline">Start export</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Exporting data</DrawerTitle>
          <DrawerDescription>
            With dismissible set to false, swiping and clicking outside no longer close the drawer.
            Only the button below can.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button onClick={() => setOpen(false)}>Done</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
