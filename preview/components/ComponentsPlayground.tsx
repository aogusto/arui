import { useRef } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"

import {
  Button,
  Badge,
  Input,
  Label,
  Skeleton,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@aogusto/arui"

import { DragCard } from "./DragCard"
import { Reveal } from "./Reveal"
import { SectionHeading } from "./SectionHeading"

const subscribeSchema = z.object({
  email: z.string().min(1, "Email is required.").email("Enter a valid email."),
})
type SubscribeValues = z.infer<typeof subscribeSchema>

function SubscribeForm() {
  const form = useForm<SubscribeValues>({
    resolver: zodResolver(subscribeSchema),
    defaultValues: { email: "" },
  })

  const onSubmit = form.handleSubmit((values) => {
    toast.success(`You're on the list — ${values.email}`)
    form.reset()
  })

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-3">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@studio.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="sm" className="w-full">
          Notify me
        </Button>
      </form>
    </Form>
  )
}

/** Slow, colored orbs drifting behind the cards — the surface they refract. */
function Orbs() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      <div className="animate-login-blob-1 absolute -left-16 top-8 size-72 rounded-full bg-purple/40 blur-3xl" />
      <div className="animate-login-blob-2 absolute -right-10 top-1/3 size-80 rounded-full bg-cyan/35 blur-3xl" />
      <div className="animate-login-blob-3 absolute -bottom-16 left-1/3 size-72 rounded-full bg-indigo/45 blur-3xl" />
      <div className="animate-login-blob-2 absolute right-1/4 bottom-4 size-56 rounded-full bg-pink/30 blur-3xl" />
    </div>
  )
}

export function ComponentsPlayground() {
  const stageRef = useRef<HTMLDivElement>(null)

  return (
    <section
      id="components"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6 sm:py-28"
    >
      <Reveal>
        <SectionHeading
          eyebrow="Components"
          title="Live, and loose."
          description="Fifty-seven components — here's a handful, live and draggable. Grab a card by its header and toss it around; the frost carries the color underneath with it."
        />
      </Reveal>

      <TooltipProvider delayDuration={200}>
        <div
          ref={stageRef}
          className="relative mt-10 overflow-hidden rounded-3xl border border-separator bg-background-secondary p-4 sm:p-6"
        >
          <Orbs />

          <div className="relative z-10 grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <DragCard title="Button" subtitle="5 variants" constraintsRef={stageRef}>
              <div className="flex flex-wrap gap-2">
                <Button size="sm">Default</Button>
                <Button size="sm" variant="secondary">
                  Secondary
                </Button>
                <Button size="sm" variant="outline">
                  Outline
                </Button>
                <Button size="sm" variant="ghost">
                  Ghost
                </Button>
                <Button size="sm" variant="destructive">
                  Delete
                </Button>
              </div>
            </DragCard>

            <DragCard title="Badge" subtitle="status pills" constraintsRef={stageRef}>
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Alert</Badge>
              </div>
            </DragCard>

            <DragCard title="Tabs" subtitle="segmented" constraintsRef={stageRef}>
              <Tabs defaultValue="overview">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="specs">Specs</TabsTrigger>
                </TabsList>
                <TabsContent
                  value="overview"
                  className="pt-3 text-footnote text-label-secondary"
                >
                  Frosted panels, HIG type, tuned to your theme.
                </TabsContent>
                <TabsContent
                  value="specs"
                  className="pt-3 text-footnote text-label-secondary"
                >
                  Tailwind 4 · React 19 · radix-ui.
                </TabsContent>
              </Tabs>
            </DragCard>

            <DragCard title="Select" subtitle="popover menu" constraintsRef={stageRef}>
              <div className="space-y-2">
                <Label>Material</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pick a material" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="regular">Regular</SelectItem>
                    <SelectItem value="thick">Thick</SelectItem>
                    <SelectItem value="clear">Clear</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </DragCard>

            <DragCard title="Tooltip" subtitle="on hover" constraintsRef={stageRef}>
              <div className="flex items-center gap-3">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="sm">
                      Hover me
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Rendered in a portal — never clipped.</TooltipContent>
                </Tooltip>
                <span className="text-caption-1 text-label-tertiary">
                  Point at the button
                </span>
              </div>
            </DragCard>

            <DragCard title="Dialog" subtitle="modal" constraintsRef={stageRef}>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="sm">Open dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Ship it?</DialogTitle>
                    <DialogDescription>
                      Dialogs use the thick material, so they read cleanly over
                      anything scrolling behind them.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline" size="sm">
                        Cancel
                      </Button>
                    </DialogClose>
                    <DialogClose asChild>
                      <Button size="sm" onClick={() => toast.success("Shipped")}>
                        Confirm
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </DragCard>

            <DragCard title="Sheet" subtitle="edge panel" constraintsRef={stageRef}>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="secondary" size="sm">
                    Open sheet
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                    <SheetDescription>
                      Sheets slide in from the edge — the pattern for mobile
                      flows.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="space-y-2 px-4">
                    <Label htmlFor="sheet-q">Search</Label>
                    <Input id="sheet-q" placeholder="Type to filter…" />
                  </div>
                </SheetContent>
              </Sheet>
            </DragCard>

            <DragCard title="Form" subtitle="zod validated" constraintsRef={stageRef}>
              <SubscribeForm />
            </DragCard>

            <DragCard title="Input" subtitle="with label" constraintsRef={stageRef}>
              <div className="space-y-2">
                <Label htmlFor="handle">Handle</Label>
                <Input id="handle" placeholder="@arui" />
                <p className="text-caption-1 text-label-tertiary">
                  Shown on your public profile.
                </p>
              </div>
            </DragCard>

            <DragCard title="Skeleton" subtitle="loading state" constraintsRef={stageRef}>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Skeleton className="size-10 rounded-full" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-3 w-3/4" />
                    <Skeleton className="h-3 w-1/2" />
                  </div>
                </div>
                <Skeleton className="h-16 w-full rounded-xl" />
              </div>
            </DragCard>
          </div>
        </div>
      </TooltipProvider>
    </section>
  )
}
