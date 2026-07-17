import { Avatar, AvatarImage, AvatarFallback } from "@aogusto/arui"

export default function Example() {
  return (
    <div className="flex items-center gap-3">
      <Avatar size="sm">
        <AvatarImage src="https://github.com/shadcn.png" alt="Shad" />
        <AvatarFallback>SC</AvatarFallback>
      </Avatar>
      <Avatar size="default">
        <AvatarImage src="https://github.com/shadcn.png" alt="Shad" />
        <AvatarFallback>SC</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src="https://github.com/shadcn.png" alt="Shad" />
        <AvatarFallback>SC</AvatarFallback>
      </Avatar>
    </div>
  )
}
