import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@aogusto/arui"

export default function Example() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is arui?</AccordionTrigger>
        <AccordionContent>
          <p>Arui is a shadcn-style component registry built on Radix primitives and Tailwind CSS.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          <p>Yes. Every component follows the underlying Radix primitive's ARIA pattern, with full keyboard and screen reader support out of the box.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Can I customize the styles?</AccordionTrigger>
        <AccordionContent>
          <p>Yes. Components ship as plain source you own, so you can edit the classes directly instead of overriding them.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
