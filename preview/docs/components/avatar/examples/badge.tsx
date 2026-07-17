import { Avatar, AvatarImage, AvatarFallback, AvatarBadge } from "@aogusto/arui"
import { Check } from "lucide-react"

export default function Example() {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="Shad" />
        <AvatarFallback>SC</AvatarFallback>
        <AvatarBadge />
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src="https://github.com/shadcn.png" alt="Shad" />
        <AvatarFallback>SC</AvatarFallback>
        <AvatarBadge>
          <Check />
        </AvatarBadge>
      </Avatar>
    </div>
  )
}
