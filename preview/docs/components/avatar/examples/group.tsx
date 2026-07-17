import { Avatar, AvatarImage, AvatarFallback, AvatarGroup, AvatarGroupCount } from "@aogusto/arui"

export default function Example() {
  return (
    <AvatarGroup>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="Shad" />
        <AvatarFallback>SC</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>AS</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>MP</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>+5</AvatarGroupCount>
    </AvatarGroup>
  )
}
