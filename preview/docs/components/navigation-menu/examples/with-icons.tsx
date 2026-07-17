import { BarChart3, LayoutGrid, Plug, ShieldCheck } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@aogusto/arui"

const links = [
  {
    href: "#automations",
    icon: LayoutGrid,
    title: "Automations",
    description: "Trigger actions when orders change status.",
  },
  {
    href: "#integrations",
    icon: Plug,
    title: "Integrations",
    description: "Connect payment and shipping providers.",
  },
  {
    href: "#analytics",
    icon: BarChart3,
    title: "Analytics",
    description: "Track sales and conversion over time.",
  },
  {
    href: "#security",
    icon: ShieldCheck,
    title: "Security",
    description: "Manage roles, sessions and audit logs.",
  },
]

export default function Example() {
  return (
    <div className="flex min-h-[340px] w-full items-start justify-center pt-6">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Features</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[420px] grid-cols-2 gap-1">
                {links.map(({ href, icon: Icon, title, description }) => (
                  <li key={href}>
                    <NavigationMenuLink href={href} className="flex-col items-start gap-1">
                      <div className="flex items-center gap-2">
                        <Icon />
                        <span className="text-callout font-medium text-label">{title}</span>
                      </div>
                      <p className="text-footnote text-label-secondary">{description}</p>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
