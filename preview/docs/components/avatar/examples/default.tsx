import { Avatar, AvatarImage, AvatarFallback } from "@aogusto/arui"

export default function Example() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="Shad" />
      <AvatarFallback>SC</AvatarFallback>
    </Avatar>
  )
}
