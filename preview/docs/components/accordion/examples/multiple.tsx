import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@aogusto/arui"

export default function Example() {
  return (
    <Accordion type="multiple" defaultValue={["item-1", "item-2"]} className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Shipping</AccordionTrigger>
        <AccordionContent>
          <p>Orders ship within 2 business days and arrive in 3 to 5 days.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Returns</AccordionTrigger>
        <AccordionContent>
          <p>Items can be returned within 30 days of delivery for a full refund.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Warranty</AccordionTrigger>
        <AccordionContent>
          <p>All products include a 1 year manufacturer warranty against defects.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
