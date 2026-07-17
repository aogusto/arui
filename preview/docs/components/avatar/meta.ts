import type { DocCategory } from "../../registry"
import type { PropRow } from "../../PropsTable"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "avatar",
  name: "Avatar",
  category: "Data & Display",
  description: "Displays a user's picture, falling back to initials or an icon when no image is set or it fails to load. Includes a status badge and a way to stack several avatars into an overlapping group.",
  imports: ["Avatar", "AvatarImage", "AvatarFallback", "AvatarBadge", "AvatarGroup", "AvatarGroupCount"],
}

export const avatarProps: PropRow[] = [
  {
    prop: "size",
    type: '"default" | "sm" | "lg"',
    default: '"default"',
    description: "Size of the avatar, its fallback text, and any AvatarBadge nested inside.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof AvatarPrimitive.Root>",
    description: "Extends Avatar.Root from radix-ui.",
  },
]

export const imageProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof AvatarPrimitive.Image>",
    description: "Extends Avatar.Image from radix-ui (src, alt, onLoadingStatusChange, etc). Renders nothing while loading or on error, letting AvatarFallback show through.",
  },
]

export const fallbackProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: "React.ComponentProps<typeof AvatarPrimitive.Fallback>",
    description: "Extends Avatar.Fallback from radix-ui. Accepts delayMs to only render after the image has had time to load, avoiding a flash of fallback content.",
  },
]

export const badgeProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"span">',
    description: "The remaining native <span> attributes. Pinned to the bottom right corner of the avatar and sized automatically off the parent Avatar's size; pass an icon as children (hidden automatically at the sm size).",
  },
]

export const groupProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"div">',
    description: "The remaining native <div> attributes. Wraps a set of Avatar as an overlapping stack, with a ring around each one to separate it from the background.",
  },
]

export const groupCountProps: PropRow[] = [
  {
    prop: "className",
    type: "string",
    description: "Additional classes, merged with the component's own styles via cn().",
  },
  {
    prop: "...props",
    type: 'React.ComponentProps<"div">',
    description: "The remaining native <div> attributes. Styled to match the sibling avatars in the group and sized off the nearest AvatarGroup's size; place it last, with a value such as \"+5\".",
  },
]

export const props: PropRow[] = [
  ...avatarProps,
  ...imageProps,
  ...fallbackProps,
  ...badgeProps,
  ...groupProps,
  ...groupCountProps,
]
