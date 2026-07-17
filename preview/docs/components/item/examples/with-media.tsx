import { Item, ItemMedia, ItemContent, ItemTitle, ItemDescription } from "@aogusto/arui"
import { Bell } from "lucide-react"

const avatarImage =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Crect width='80' height='80' fill='%23737373'/%3E%3C/svg%3E"

export default function Example() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <Bell />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Icon media</ItemTitle>
          <ItemDescription>For lucide-react icons and similar glyphs.</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline">
        <ItemMedia variant="image">
          <img src={avatarImage} alt="Ana Souza" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Ana Souza</ItemTitle>
          <ItemDescription>ana.souza@example.com</ItemDescription>
        </ItemContent>
      </Item>
    </div>
  )
}
