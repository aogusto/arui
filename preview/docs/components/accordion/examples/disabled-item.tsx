import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@aogusto/arui"

export default function Example() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Available now</AccordionTrigger>
        <AccordionContent>
          <p>This section can be opened and closed normally.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" disabled>
        <AccordionTrigger>Coming soon</AccordionTrigger>
        <AccordionContent>
          <p>This section is disabled and cannot be toggled.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Also available</AccordionTrigger>
        <AccordionContent>
          <p>This section can be opened and closed normally.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
