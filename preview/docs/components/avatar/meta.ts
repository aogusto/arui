import type { DocCategory } from "../../registry"

export const meta: { slug: string; name: string; category: DocCategory; description: string; imports: string[] } = {
  slug: "avatar",
  name: "Avatar",
  category: "Data & Display",
  description: "Displays a user's picture, falling back to initials or an icon when no image is set or it fails to load. Includes a status badge and a way to stack several avatars into an overlapping group.",
  imports: ["Avatar", "AvatarImage", "AvatarFallback", "AvatarBadge", "AvatarGroup", "AvatarGroupCount"],
}
