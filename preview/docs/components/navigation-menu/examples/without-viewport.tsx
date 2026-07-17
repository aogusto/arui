import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@aogusto/arui"

export default function Example() {
  return (
    <div className="flex min-h-[240px] w-full items-start justify-center pt-6">
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Account</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-56 gap-1">
                <li>
                  <NavigationMenuLink href="#profile">Profile</NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink href="#billing">Billing</NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink href="#logout">Log out</NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
