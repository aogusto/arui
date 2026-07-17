import { Item, ItemMedia, ItemContent, ItemTitle, ItemDescription } from "@aogusto/arui"
import { Bell } from "lucide-react"

export default function Example() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Item variant="outline" size="default">
        <ItemMedia variant="icon">
          <Bell />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Default size</ItemTitle>
          <ItemDescription>Comfortable padding for standalone rows.</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline" size="sm">
        <ItemMedia variant="icon">
          <Bell />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Small size</ItemTitle>
          <ItemDescription>Tighter padding for dense lists.</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline" size="xs">
        <ItemMedia variant="icon">
          <Bell />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Extra small size</ItemTitle>
        </ItemContent>
      </Item>
    </div>
  )
}
