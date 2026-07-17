import { useState } from "react"
import { Link, Outlet } from "@tanstack/react-router"
import { Sheet, SheetContent, SheetTrigger, Button, Kbd, KbdGroup } from "@aogusto/arui"
import { Menu, Search } from "lucide-react"
import { useTheme } from "../lib/useTheme"
import { ThemeToggle } from "../components/ThemeToggle"
import { Wordmark } from "../components/icons"
import { CommandMenu } from "./CommandMenu"
import { DOCS_REGISTRY, DOCS_CATEGORIES } from "./registry"

function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const guideLinkClass =
    "block rounded-md px-2 py-1.5 text-label-secondary hover:bg-fill hover:text-label [&.active]:bg-fill [&.active]:font-medium [&.active]:text-label"
  return (
    <nav className="space-y-6 text-subhead">
      <div className="space-y-1">
        <p className="px-2 text-caption-1 font-semibold uppercase tracking-wide text-label-tertiary">
          Guides
        </p>
        <Link to="/docs" onClick={onNavigate} activeOptions={{ exact: true }} className={guideLinkClass}>
          Getting started
        </Link>
        <Link to="/docs/design" onClick={onNavigate} className={guideLinkClass}>
          Design guide
        </Link>
        <Link to="/docs/theming" onClick={onNavigate} className={guideLinkClass}>
          Theming
        </Link>
        <Link to="/docs/mcp" onClick={onNavigate} className={guideLinkClass}>
          AI agents (MCP)
        </Link>
      </div>
      {DOCS_CATEGORIES.map((cat) => (
        <div key={cat} className="space-y-1">
          <p className="px-2 text-caption-1 font-semibold uppercase tracking-wide text-label-tertiary">
            {cat}
          </p>
          {DOCS_REGISTRY.filter((e) => e.category === cat).map((e) => (
            <Link
              key={e.slug}
              to="/docs/components/$slug"
              params={{ slug: e.slug }}
              onClick={onNavigate}
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
  const [commandOpen, setCommandOpen] = useState(false)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <CommandMenu open={commandOpen} onOpenChange={setCommandOpen} />
      <header className="sticky top-0 z-40 flex h-14 items-center gap-3 border-b border-separator bg-background/80 px-4 backdrop-blur-glass">
        <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 overflow-y-auto p-4">
            <SidebarNav onNavigate={() => setMobileNavOpen(false)} />
          </SheetContent>
        </Sheet>
        <Link
          to="/"
          className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="arui, back to home"
        >
          <Wordmark className="text-headline" />
        </Link>
        <Button
          variant="outline"
          onClick={() => setCommandOpen(true)}
          className="ml-4 hidden w-64 items-center justify-between text-label-tertiary sm:flex"
        >
          <span className="flex items-center gap-2 text-subhead">
            <Search className="size-4" />
            Search
          </span>
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </KbdGroup>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCommandOpen(true)}
          className="ml-4 sm:hidden"
          aria-label="Search components"
        >
          <Search className="size-5" />
        </Button>
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
