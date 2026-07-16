import { cn } from "@/lib/utils"
import { CopyButton } from "./CopyButton"

type CommandRowProps = {
  command: string
  /** "light" for placement over dark, imagery-backed panels (e.g. the hero) */
  tone?: "auto" | "light"
  className?: string
  /** "shell" shows a `$` prompt (default); "css" is a stylesheet line, no shell prompt. */
  kind?: "shell" | "css"
}

/** A terminal-style command line with a one-tap copy. Reused by hero + install. */
export function CommandRow({
  command,
  tone = "auto",
  className,
  kind = "shell",
}: CommandRowProps) {
  const light = tone === "light"
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-xl border p-1.5 pl-3",
        light ? "border-white/15 bg-black/35" : "border-separator bg-fill-tertiary",
        className
      )}
    >
      <span
        aria-hidden
        className={cn(
          "font-mono text-caption-1 select-none",
          light ? "text-white/40" : "text-label-tertiary"
        )}
      >
        {kind === "shell" ? "$" : "css"}
      </span>
      <code
        className={cn(
          "min-w-0 flex-1 truncate font-mono text-caption-1 sm:text-footnote",
          light ? "text-white/85" : "text-label"
        )}
      >
        {command}
      </code>
      <CopyButton
        value={command}
        withText
        className={cn(
          light &&
            "border-white/20 bg-white/10 text-white hover:bg-white/20"
        )}
      />
    </div>
  )
}
