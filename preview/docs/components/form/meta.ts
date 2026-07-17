import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "form",
  name: "Form",
  category: "Forms & Inputs",
  description: "A set of composable primitives built on react-hook-form that connect labels, controls, descriptions and validation messages, wiring up ids and aria attributes automatically.",
  imports: ["Form", "FormControl", "FormDescription", "FormField", "FormItem", "FormLabel", "FormMessage"],
}
