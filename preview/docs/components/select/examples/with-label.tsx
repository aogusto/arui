import { Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@aogusto/arui"

export default function Example() {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="fruit">Favorite fruit</Label>
      <Select defaultValue="apple">
        <SelectTrigger id="fruit" className="w-48">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
