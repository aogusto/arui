import { Avatar, AvatarImage, AvatarFallback } from "@aogusto/arui"
import { User } from "lucide-react"

export default function Example() {
  return (
    <div className="flex items-center gap-3">
      <Avatar>
        <AvatarImage src="https://github.com/broken-link-404.png" alt="Ana Souza" />
        <AvatarFallback>AS</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>
          <User className="size-4" />
        </AvatarFallback>
      </Avatar>
    </div>
  )
}
