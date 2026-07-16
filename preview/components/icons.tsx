import { cn } from "@/lib/utils"

/** GitHub mark — lucide dropped brand glyphs, so it's inlined here. */
export function GitHubMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={cn("size-4", className)}
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  )
}

/**
 * The Arui wordmark. The diamond is a rotated, gradient-filled square — a glass
 * facet — rather than a glyph, so it renders identically everywhere.
 */
export function Wordmark({
  className,
  tone = "auto",
}: {
  className?: string
  /** "light" forces white text for use over dark, imagery-backed panels */
  tone?: "auto" | "light"
}) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <span
        aria-hidden
        className="inline-block size-[0.7em] rotate-45 rounded-[0.15em] bg-gradient-to-br from-indigo via-cyan to-pink shadow-glass-sm"
      />
      <span
        className={cn(
          "font-bold tracking-[-0.02em]",
          tone === "light" ? "text-white" : "text-label"
        )}
      >
        Arui
      </span>
    </span>
  )
}
