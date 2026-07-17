import { useState } from "react"
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarLabel,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@aogusto/arui"

export default function Example() {
  const [showBookmarks, setShowBookmarks] = useState(true)
  const [showFullUrls, setShowFullUrls] = useState(false)

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarLabel>Toolbars</MenubarLabel>
          <MenubarSeparator />
          <MenubarCheckboxItem checked={showBookmarks} onCheckedChange={setShowBookmarks}>
            Always Show Bookmarks Bar
          </MenubarCheckboxItem>
          <MenubarCheckboxItem checked={showFullUrls} onCheckedChange={setShowFullUrls}>
            Always Show Full URLs
          </MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
