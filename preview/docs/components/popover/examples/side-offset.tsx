import { Button, Popover, PopoverContent, PopoverDescription, PopoverTrigger } from "@aogusto/arui"

export default function Example() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Default offset</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverDescription>4px side offset (the default).</PopoverDescription>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Larger offset</Button>
        </PopoverTrigger>
        <PopoverContent sideOffset={12}>
          <PopoverDescription>12px side offset from the trigger.</PopoverDescription>
        </PopoverContent>
      </Popover>
    </div>
  )
}
