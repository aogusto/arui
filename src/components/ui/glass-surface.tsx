import * as React from "react"

import { cn } from "@/lib/utils"

const glass = {
  regular:
    "glass " +
    "bg-glass-regular/60 supports-[backdrop-filter]:bg-glass-regular/40 " +
    "backdrop-blur-glass backdrop-saturate-150 " +
    "[-webkit-backdrop-filter:blur(24px)_saturate(180%)] " +
    "border border-white/15 dark:border-white/10 " +
    "shadow-glass",
  thick:
    "glass " +
    "bg-glass-regular/96 supports-[backdrop-filter]:bg-glass-regular/90 " +
    "backdrop-blur-md backdrop-saturate-150 " +
    "[-webkit-backdrop-filter:blur(12px)_saturate(180%)] " +
    "border border-white/15 dark:border-white/10 " +
    "shadow-glass",
  clear:
    "glass-clear " +
    "bg-glass-clear/10 supports-[backdrop-filter]:bg-glass-clear/5 " +
    "backdrop-blur-[12px] backdrop-saturate-150 " +
    "border border-white/10 " +
    "shadow-glass-sm",
}

type GlassSurfaceProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "regular" | "thick" | "clear"
  dim?: boolean
  tint?: "accent" | (string & {})
}

function GlassSurface({
  variant = "regular",
  dim = false,
  tint,
  className,
  children,
  ...props
}: GlassSurfaceProps) {
  const tintColor = tint === "accent" ? "var(--primary)" : tint
  return (
    <div className={cn("relative isolate rounded-2xl", className)} {...props}>
      {dim && variant === "clear" && (
        <div
          aria-hidden
          className="absolute inset-0 rounded-[inherit] bg-black/35"
        />
      )}
      <div className={cn("relative rounded-[inherit]", glass[variant])}>
        {tintColor && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit]"
            style={{ backgroundColor: tintColor, opacity: 0.16 }}
          />
        )}
        {children}
      </div>
    </div>
  )
}

export { GlassSurface, glass }
export type { GlassSurfaceProps }
