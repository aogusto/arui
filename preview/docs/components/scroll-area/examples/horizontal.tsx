import { ScrollArea, ScrollBar } from "@aogusto/arui"

const colors = [
  { name: "Rose", className: "bg-rose-400" },
  { name: "Amber", className: "bg-amber-400" },
  { name: "Lime", className: "bg-lime-400" },
  { name: "Teal", className: "bg-teal-400" },
  { name: "Sky", className: "bg-sky-400" },
  { name: "Indigo", className: "bg-indigo-400" },
  { name: "Fuchsia", className: "bg-fuchsia-400" },
]

export default function Example() {
  return (
    <ScrollArea className="w-full max-w-md rounded-md border whitespace-nowrap">
      <div className="flex w-max gap-4 p-4">
        {colors.map((color) => (
          <figure key={color.name} className="w-28 shrink-0">
            <div className={`h-28 w-28 rounded-md ${color.className}`} />
            <figcaption className="mt-2 text-sm text-muted-foreground">{color.name}</figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
