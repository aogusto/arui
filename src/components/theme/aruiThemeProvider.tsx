"use client"

import * as React from "react"
import { parseColor, relativeLuminance, toRgbString } from "@/lib/color"

export type AruiTint =
  | "blue"
  | "indigo"
  | "violet"
  | "pink"
  | "rose"
  | "green"
  | "teal"
  | "orange"
  | "red"
  | (string & {})

const TINT_PRESETS: Record<string, string> = {
  blue: "#3b82f6",
  indigo: "#6366f1",
  violet: "#8b5cf6",
  pink: "#ec4899",
  rose: "#f43f5e",
  green: "#22c55e",
  teal: "#14b8a6",
  orange: "#f97316",
  red: "#ef4444",
}

const MANAGED_VARS = ["--primary", "--primary-foreground", "--ring", "--glass-tint"]

function resolveTint(tint: string): string {
  return TINT_PRESETS[tint] ?? tint
}

/**
 * Applies a tint (preset name or CSS color) to `target` by setting the arui
 * highlight custom properties. Returns a cleanup that removes them.
 */
export function applyAruiTint(
  tint: string,
  target: HTMLElement = document.documentElement
): () => void {
  const color = resolveTint(tint)
  const rgb = parseColor(color)
  target.style.setProperty("--primary", color)
  target.style.setProperty("--ring", color)
  if (rgb) {
    target.style.setProperty("--glass-tint", `rgb(${toRgbString(rgb)})`)
    // Foreground contrast: light tint gets dark text, dark tint gets white.
    const fg = relativeLuminance(rgb) > 0.55 ? "oklch(0.21 0.006 285.885)" : "oklch(1 0 0)"
    target.style.setProperty("--primary-foreground", fg)
  } else {
    // Non-parseable input (e.g. oklch()): tint the glass with the raw color, keep white fg.
    target.style.setProperty("--glass-tint", color)
    target.style.setProperty("--primary-foreground", "oklch(1 0 0)")
  }
  return () => {
    for (const v of MANAGED_VARS) target.style.removeProperty(v)
  }
}

export function AruiThemeProvider({
  tint,
  children,
}: {
  tint?: AruiTint
  children: React.ReactNode
}) {
  React.useEffect(() => {
    if (!tint) return
    return applyAruiTint(tint)
  }, [tint])
  return <>{children}</>
}
