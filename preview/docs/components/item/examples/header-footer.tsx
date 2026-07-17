import { Item, ItemHeader, ItemTitle, ItemContent, ItemDescription, ItemFooter, ItemActions, Button, Badge } from "@aogusto/arui"

export default function Example() {
  return (
    <Item variant="outline" className="w-full max-w-sm">
      <ItemHeader>
        <ItemTitle>Order #4821</ItemTitle>
        <Badge variant="secondary">Shipped</Badge>
      </ItemHeader>
      <ItemContent>
        <ItemDescription>3 items, arriving Jul 22.</ItemDescription>
      </ItemContent>
      <ItemFooter>
        <ItemActions>
          <Button size="sm" variant="outline">Track package</Button>
          <Button size="sm" variant="ghost">View order</Button>
        </ItemActions>
      </ItemFooter>
    </Item>
  )
}
