import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Button,
} from "@aogusto/arui"

export default function Example() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Delete account</Button>
      </SheetTrigger>
      <SheetContent showCloseButton={false}>
        <SheetHeader>
          <SheetTitle>Are you sure?</SheetTitle>
          <SheetDescription>
            This action can't be undone. The account and its data will be
            permanently removed.
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
          <Button variant="destructive">Delete</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
