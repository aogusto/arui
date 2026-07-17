import {
  Button,
  Input,
  Label,
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@aogusto/arui"

export default function Example() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Edit dimensions</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Dimensions</PopoverTitle>
          <PopoverDescription>Set the size of the layer.</PopoverDescription>
        </PopoverHeader>
        <div className="grid gap-3">
          <div className="grid grid-cols-3 items-center gap-3">
            <Label htmlFor="popover-width">Width</Label>
            <Input id="popover-width" defaultValue="100%" className="col-span-2 h-8" />
          </div>
          <div className="grid grid-cols-3 items-center gap-3">
            <Label htmlFor="popover-height">Height</Label>
            <Input id="popover-height" defaultValue="25px" className="col-span-2 h-8" />
          </div>
        </div>
        <Button size="sm">Save changes</Button>
      </PopoverContent>
    </Popover>
  )
}
