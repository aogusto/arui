import { Item, ItemContent, ItemTitle, ItemDescription } from "@aogusto/arui"

export default function Example() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Item variant="default">
        <ItemContent>
          <ItemTitle>Default</ItemTitle>
          <ItemDescription>Transparent background, no border.</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Outline</ItemTitle>
          <ItemDescription>A visible border around the row.</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="muted">
        <ItemContent>
          <ItemTitle>Muted</ItemTitle>
          <ItemDescription>A soft muted background, no border.</ItemDescription>
        </ItemContent>
      </Item>
    </div>
  )
}
