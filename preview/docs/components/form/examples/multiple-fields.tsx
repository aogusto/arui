import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from "@aogusto/arui"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().min(1, "Email is required.").email("Enter a valid email."),
})

type FormValues = z.infer<typeof formSchema>

export default function Example() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "" },
  })

  const onSubmit = form.handleSubmit((values) => {
    toast.success(`Saved ${values.name} <${values.email}>`)
  })

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="w-full max-w-sm space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Ada Lovelace" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
        <Button type="submit" className="w-full">
          Save profile
        </Button>
      </form>
    </Form>
  )
}
