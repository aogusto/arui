import { Link, Outlet } from "@tanstack/react-router"
import { Sheet, SheetContent, SheetTrigger, Button } from "@aogusto/arui"
import { Menu } from "lucide-react"
import { useTheme } from "../lib/useTheme"
import { ThemeToggle } from "../components/ThemeToggle"
import { DOCS_REGISTRY, DOCS_CATEGORIES } from "./registry"

function SidebarNav() {
  return (
    <nav className="space-y-6 text-subhead">
      {DOCS_CATEGORIES.map((cat) => (
        <div key={cat} className="space-y-1">
          <p className="px-2 text-caption-1 font-semibold uppercase tracking-wide text-label-tertiary">
            {cat}
          </p>
          {DOCS_REGISTRY.filter((e) => e.category === cat).map((e) => (
            // `/docs/components/$slug` is only registered as a route in Task 3
            // (componentRoute, child of docsRoute). Until then TanStack
            // Router's generated route union doesn't include it, so `to`
            // needs a cast here; it resolves to a normal typed link once
            // Task 3 attaches the child route (safe to drop the cast then).
            <Link
              key={e.slug}
              to={"/docs/components/$slug" as any}
              params={{ slug: e.slug } as any}
              className="block rounded-md px-2 py-1.5 text-label-secondary hover:bg-fill hover:text-label [&.active]:bg-fill [&.active]:font-medium [&.active]:text-label"
            >
              {e.name}
            </Link>
          ))}
        </div>
      ))}
    </nav>
  )
}

export function DocsLayout() {
  const { theme, toggle } = useTheme()
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <header className="sticky top-0 z-40 flex h-14 items-center gap-3 border-b border-separator bg-background/80 px-4 backdrop-blur-glass">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 overflow-y-auto p-4">
            <SidebarNav />
          </SheetContent>
        </Sheet>
        <Link to="/" className="text-headline font-semibold">arui</Link>
        <div className="ml-auto flex items-center gap-1">
          <a href="https://www.npmjs.com/package/@aogusto/arui" className="rounded-md px-2 py-1 text-subhead text-label-secondary hover:text-label">npm</a>
          <a href="https://github.com/aogusto/arui" className="rounded-md px-2 py-1 text-subhead text-label-secondary hover:text-label">GitHub</a>
          <ThemeToggle theme={theme} onToggle={toggle} />
        </div>
      </header>
      <div className="mx-auto flex w-full max-w-7xl">
        <aside className="sticky top-14 hidden h-[calc(100dvh-3.5rem)] w-64 shrink-0 overflow-y-auto border-r border-separator p-4 lg:block">
          <SidebarNav />
        </aside>
        <main className="min-w-0 flex-1 px-4 py-8 sm:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
