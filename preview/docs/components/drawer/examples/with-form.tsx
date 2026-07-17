import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
  Button,
  Input,
  Label,
} from "@aogusto/arui"

export default function Example() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>New contact</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>New contact</DrawerTitle>
          <DrawerDescription>Add a name and email to your contacts.</DrawerDescription>
        </DrawerHeader>
        <div className="grid gap-4 px-4">
          <div className="grid gap-1.5">
            <Label htmlFor="contact-name">Name</Label>
            <Input id="contact-name" placeholder="Jane Cooper" />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="contact-email">Email</Label>
            <Input id="contact-email" type="email" placeholder="jane@example.com" />
          </div>
        </div>
        <DrawerFooter>
          <Button>Save contact</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
