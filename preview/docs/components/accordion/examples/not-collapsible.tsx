import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@aogusto/arui"

export default function Example() {
  return (
    <Accordion type="single" defaultValue="item-1" className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Account</AccordionTrigger>
        <AccordionContent>
          <p>Manage your profile, password and connected devices.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Notifications</AccordionTrigger>
        <AccordionContent>
          <p>Choose which emails and push notifications you want to receive.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Billing</AccordionTrigger>
        <AccordionContent>
          <p>View invoices and update your payment method.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
