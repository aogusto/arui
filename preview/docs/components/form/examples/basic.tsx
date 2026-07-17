import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from "@aogusto/arui"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

const formSchema = z.object({
  username: z.string().min(2, "Username must be at least 2 characters."),
})

type FormValues = z.infer<typeof formSchema>

export default function Example() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { username: "" },
  })

  const onSubmit = form.handleSubmit((values) => {
    toast.success(`Welcome, ${values.username}`)
  })

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="w-full max-w-sm space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="ada" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
