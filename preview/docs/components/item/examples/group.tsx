import { ItemGroup, ItemSeparator, Item, ItemMedia, ItemContent, ItemTitle, ItemDescription, ItemActions, Button } from "@aogusto/arui"
import { Bell, CreditCard, Shield } from "lucide-react"

export default function Example() {
  return (
    <ItemGroup className="w-full max-w-sm">
      <Item>
        <ItemMedia variant="icon">
          <Bell />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Notifications</ItemTitle>
          <ItemDescription>Email and push alerts.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="outline">Manage</Button>
        </ItemActions>
      </Item>
      <ItemSeparator />
      <Item>
        <ItemMedia variant="icon">
          <CreditCard />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Billing</ItemTitle>
          <ItemDescription>Payment method and invoices.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="outline">Manage</Button>
        </ItemActions>
      </Item>
      <ItemSeparator />
      <Item>
        <ItemMedia variant="icon">
          <Shield />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Security</ItemTitle>
          <ItemDescription>Two-factor authentication.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="outline">Manage</Button>
        </ItemActions>
      </Item>
    </ItemGroup>
  )
}
