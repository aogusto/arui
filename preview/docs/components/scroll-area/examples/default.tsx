import { ScrollArea, Separator } from "@aogusto/arui"

const tags = [
  "Jazz",
  "Blues",
  "Rock",
  "Reggae",
  "Bossa nova",
  "Samba",
  "MPB",
  "Funk",
  "Soul",
  "Hip hop",
  "Electronic",
  "Classical",
  "Country",
  "Folk",
  "Metal",
]

export default function Example() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-3 text-sm font-medium leading-none">Genres</h4>
        {tags.map((tag) => (
          <div key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}
