import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Input } from "@aogusto/arui"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  handle: z.string().min(1, "Handle is required."),
})

type FormValues = z.infer<typeof formSchema>

export default function Example() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { handle: "" },
  })

  return (
    <Form {...form}>
      <form className="w-full max-w-sm space-y-4">
        <FormField
          control={form.control}
          name="handle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Handle</FormLabel>
              <FormControl>
                <Input placeholder="@arui" {...field} />
              </FormControl>
              <FormDescription>This is shown on your public profile.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
