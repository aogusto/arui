import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "alert",
  name: "Alert",
  category: "Data & Display",
  description: "A callout for important information, with default and destructive variants. Compose it with AlertTitle, AlertDescription, and an optional leading icon or AlertAction slot for a trailing button.",
  imports: ["Alert", "AlertTitle", "AlertDescription", "AlertAction"],
}

export const alertProps: PropRow[] = [
  {
    prop: "variant",
    type: '"default" | "destructive"',
    default: '"default"',
    description: "Visual style and intent of the alert.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"div">',
    description: 'The remaining native <div> attributes. Rendered with role="alert". Place an icon as the first child to switch the layout to two columns.',
  },
]

export const alertTitleProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"div">',
    description: "The remaining native <div> attributes. Optional: omit it when the alert only needs a description.",
  },
]

export const alertDescriptionProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"div">',
    description: "The remaining native <div> attributes. Supports multiple <p> children and links, styled and spaced automatically.",
  },
]

export const alertActionProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"div">',
    description: "The remaining native <div> attributes. Positions its content (typically a Button) in the top right corner of the alert.",
  },
]

export const props: PropRow[] = [
  ...alertProps,
  ...alertTitleProps,
  ...alertDescriptionProps,
  ...alertActionProps,
]
