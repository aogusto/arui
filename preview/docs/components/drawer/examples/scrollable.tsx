import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  Button,
} from "@aogusto/arui"

const activity = [
  "Order #1042 confirmed",
  "Order #1043 confirmed",
  "Order #1044 shipped",
  "Order #1045 delivered",
  "Order #1046 confirmed",
  "Order #1047 cancelled",
  "Order #1048 shipped",
  "Order #1049 delivered",
  "Order #1050 confirmed",
  "Order #1051 shipped",
  "Order #1052 delivered",
  "Order #1053 confirmed",
]

export default function Example() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">View activity</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Recent activity</DrawerTitle>
          <DrawerDescription>
            The drawer caps at 80% of the viewport height, so long content scrolls instead of overflowing.
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 space-y-2 overflow-y-auto px-4 pb-4">
          {activity.map((item) => (
            <div
              key={item}
              className="rounded-lg border border-separator px-3 py-2 text-subhead text-label-secondary"
            >
              {item}
            </div>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  )
}
