import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@aogusto/arui"

export default function Example() {
  return (
    <div className="flex min-h-[300px] w-full items-start justify-center pt-6">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-56 gap-1">
                <li>
                  <NavigationMenuLink href="#catalog">Catalog</NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink href="#orders">Orders</NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink href="#sellers">Sellers</NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-56 gap-1">
                <li>
                  <NavigationMenuLink href="#docs">Documentation</NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink href="#changelog">Changelog</NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink href="#support">Support</NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#pricing" className={navigationMenuTriggerStyle()}>
              Pricing
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuIndicator />
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
