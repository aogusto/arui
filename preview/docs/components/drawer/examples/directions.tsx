import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  Button,
} from "@aogusto/arui"

type Direction = "top" | "bottom" | "left" | "right"

function DirectionDrawer({ direction, label }: { direction: Direction; label: string }) {
  return (
    <Drawer direction={direction}>
      <DrawerTrigger asChild>
        <Button variant="outline">{label}</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{label} drawer</DrawerTitle>
          <DrawerDescription>This one slides in from the {label.toLowerCase()}.</DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  )
}

export default function Example() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <DirectionDrawer direction="top" label="Top" />
      <DirectionDrawer direction="bottom" label="Bottom" />
      <DirectionDrawer direction="left" label="Left" />
      <DirectionDrawer direction="right" label="Right" />
    </div>
  )
}
