import { Item, ItemMedia, ItemContent, ItemTitle, ItemDescription, ItemActions, Button } from "@aogusto/arui"
import { Bell, X } from "lucide-react"

export default function Example() {
  return (
    <Item variant="outline" className="w-full max-w-sm">
      <ItemMedia variant="icon">
        <Bell />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>New notification</ItemTitle>
        <ItemDescription>Your weekly report is ready.</ItemDescription>
      </ItemContent>
      <ItemContent className="text-right">
        <span className="text-xs text-muted-foreground">2h ago</span>
      </ItemContent>
      <ItemActions>
        <Button size="icon-sm" variant="ghost" aria-label="Dismiss">
          <X />
        </Button>
      </ItemActions>
    </Item>
  )
}
