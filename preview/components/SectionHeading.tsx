import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: "left" | "center"
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-3",
        align === "center" && "mx-auto max-w-2xl text-center",
        className
      )}
    >
      {eyebrow ? (
        <p className="text-caption-1 font-semibold uppercase tracking-[0.2em] text-label-tertiary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-title-1 tracking-[-0.02em] text-label text-balance">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "text-body text-label-secondary",
            align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
