import { useState } from "react"
import {
  Menubar,
  MenubarContent,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarTrigger,
} from "@aogusto/arui"

export default function Example() {
  const [profile, setProfile] = useState("andy")

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Profiles</MenubarTrigger>
        <MenubarContent>
          <MenubarLabel>Switch profile</MenubarLabel>
          <MenubarSeparator />
          <MenubarRadioGroup value={profile} onValueChange={setProfile}>
            <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
            <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
            <MenubarRadioItem value="luis">Luis</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
