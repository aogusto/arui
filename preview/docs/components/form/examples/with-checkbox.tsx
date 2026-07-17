import { Button, Checkbox, Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@aogusto/arui"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

const formSchema = z.object({
  terms: z.boolean().refine((value) => value, "You must accept the terms to continue."),
})

type FormValues = z.infer<typeof formSchema>

export default function Example() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { terms: false },
  })

  const onSubmit = form.handleSubmit(() => {
    toast.success("Terms accepted.")
  })

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="w-full max-w-sm space-y-4">
        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center gap-2">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel className="font-normal">Accept terms and conditions</FormLabel>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Continue</Button>
      </form>
    </Form>
  )
}
