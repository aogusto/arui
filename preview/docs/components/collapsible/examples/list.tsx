import { Collapsible, CollapsibleContent, CollapsibleTrigger, Separator } from "@aogusto/arui"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Can I use arui in a commercial project?",
    answer: "Yes. Every component ships as source you own, with no licensing fees.",
  },
  {
    question: "Does it work with the Next.js App Router?",
    answer: "Yes. Components that need interactivity are already marked with \"use client\".",
  },
  {
    question: "Is dark mode supported out of the box?",
    answer: "Yes, through the .dark class and the color tokens defined in theme.css.",
  },
]

export default function Example() {
  return (
    <div className="w-full max-w-md">
      {faqs.map((faq, index) => (
        <div key={faq.question}>
          {index > 0 ? <Separator /> : null}
          <Collapsible>
            <CollapsibleTrigger className="group/faq flex w-full items-center justify-between py-4 text-left text-sm font-medium outline-none hover:underline focus-visible:underline">
              {faq.question}
              <ChevronDown className="shrink-0 transition-transform duration-200 group-aria-expanded/faq:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent className="pb-4 text-sm text-muted-foreground">
              {faq.answer}
            </CollapsibleContent>
          </Collapsible>
        </div>
      ))}
    </div>
  )
}
