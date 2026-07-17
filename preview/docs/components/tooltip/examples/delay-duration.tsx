import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@aogusto/arui"

export default function Example() {
  return (
    <TooltipProvider delayDuration={700}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">Hover and wait</Button>
        </TooltipTrigger>
        <TooltipContent>Appears after 700ms</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
