import { Button, Popover, PopoverContent, PopoverDescription, PopoverTrigger } from "@aogusto/arui"

export default function Example() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Start</Button>
        </PopoverTrigger>
        <PopoverContent align="start">
          <PopoverDescription>Aligned to the start of the trigger.</PopoverDescription>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Center</Button>
        </PopoverTrigger>
        <PopoverContent align="center">
          <PopoverDescription>Aligned to the center of the trigger.</PopoverDescription>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">End</Button>
        </PopoverTrigger>
        <PopoverContent align="end">
          <PopoverDescription>Aligned to the end of the trigger.</PopoverDescription>
        </PopoverContent>
      </Popover>
    </div>
  )
}
