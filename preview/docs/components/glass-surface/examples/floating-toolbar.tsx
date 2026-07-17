import { GlassSurface, Button } from "@aogusto/arui"
import { Bell, Home, Search, User } from "lucide-react"

export default function Example() {
  return (
    <div className="relative flex w-full items-end justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-indigo to-purple p-10">
      <GlassSurface variant="regular" className="rounded-full">
        <div className="flex items-center gap-1 p-2">
          <Button size="icon" variant="ghost" className="text-white hover:bg-white/15 hover:text-white" aria-label="Home">
            <Home />
          </Button>
          <Button size="icon" variant="ghost" className="text-white hover:bg-white/15 hover:text-white" aria-label="Search">
            <Search />
          </Button>
          <Button size="icon" variant="ghost" className="text-white hover:bg-white/15 hover:text-white" aria-label="Notifications">
            <Bell />
          </Button>
          <Button size="icon" variant="ghost" className="text-white hover:bg-white/15 hover:text-white" aria-label="Profile">
            <User />
          </Button>
        </div>
      </GlassSurface>
    </div>
  )
}
