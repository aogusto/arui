import { GlassSurface, Button } from "arui"
import { cn } from "@/lib/utils"
import { NAV_LINKS, SITE } from "../showcase"
import { GitHubMark, Wordmark } from "./icons"
import { ThemeToggle } from "./ThemeToggle"

type NavProps = {
  theme: "dark" | "light"
  onToggleTheme: () => void
}

export function Nav({ theme, onToggleTheme }: NavProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <GlassSurface variant="regular" className="mx-auto max-w-5xl rounded-full">
        <div className="flex items-center gap-3 py-2 pr-2 pl-4 sm:pr-3 sm:pl-5">
          <a
            href="#top"
            className="rounded-full text-headline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Arui — back to top"
          >
            <Wordmark />
          </a>

          <nav
            aria-label="Sections"
            className="ml-1 hidden items-center gap-1 sm:flex"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3 py-1.5 text-subhead text-label-secondary transition-colors",
                  "hover:bg-label/10 hover:text-label focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <Button asChild variant="ghost" size="sm" className="gap-1.5">
              <a href={SITE.github} target="_blank" rel="noreferrer">
                <GitHubMark />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </Button>
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          </div>
        </div>
      </GlassSurface>
    </header>
  )
}
