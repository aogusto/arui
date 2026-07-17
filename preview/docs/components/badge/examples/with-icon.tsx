import { Badge } from "@aogusto/arui"
import { BadgeCheck, ArrowUpRight } from "lucide-react"

export default function Example() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge>
        <BadgeCheck data-icon="inline-start" />
        Verified
      </Badge>
      <Badge variant="secondary">
        Trending
        <ArrowUpRight data-icon="inline-end" />
      </Badge>
    </div>
  )
}
