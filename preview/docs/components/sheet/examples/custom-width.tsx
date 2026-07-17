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
        <Button variant="outline">Open wide sheet</Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Shipping address</SheetTitle>
          <SheetDescription>
            The default width comes from data-[side] classes, but className merges
            through cn() so you can override it, like sm:max-w-lg here.
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
