import type { ReactNode, RefObject } from "react"
import { motion, useDragControls, useReducedMotion } from "framer-motion"
import { GripVertical } from "lucide-react"
import { glass } from "@/components/ui/glass-surface"
import { cn } from "@/lib/utils"

type DragCardProps = {
  title: string
  subtitle?: string
  constraintsRef: RefObject<HTMLDivElement | null>
  className?: string
  children: ReactNode
}

/**
 * A frosted card the reader can fling around a bounded stage. The glass classes
 * live directly on the dragged element, so the transform moves the refraction
 * region with the card (a real liquid-glass lens) instead of breaking it — a
 * transformed *ancestor* of a backdrop-filter is what kills the effect, not the
 * element itself. Drag is initiated only from the header grip, leaving every
 * control in the body fully clickable.
 */
export function DragCard({
  title,
  subtitle,
  constraintsRef,
  className,
  children,
}: DragCardProps) {
  const controls = useDragControls()
  const reduced = useReducedMotion()

  return (
    <motion.div
      drag={!reduced}
      dragControls={controls}
      dragListener={false}
      dragConstraints={constraintsRef}
      dragElastic={0.12}
      dragMomentum={false}
      dragTransition={{ bounceStiffness: 320, bounceDamping: 28 }}
      whileDrag={{
        scale: 1.04,
        boxShadow: "0 34px 64px -22px rgb(0 0 0 / 0.5)",
      }}
      className={cn(
        "relative isolate flex flex-col overflow-hidden rounded-2xl",
        glass.regular,
        className
      )}
    >
      <div
        onPointerDown={(event) => {
          if (!reduced) controls.start(event)
        }}
        className={cn(
          "flex items-center justify-between gap-2 border-b border-white/10 px-4 py-2.5",
          !reduced && "arui-grip"
        )}
      >
        <div className="min-w-0">
          <p className="truncate text-subhead font-semibold text-label">
            {title}
          </p>
          {subtitle ? (
            <p className="truncate text-caption-1 text-label-tertiary">
              {subtitle}
            </p>
          ) : null}
        </div>
        {!reduced ? (
          <span className="inline-flex shrink-0 items-center gap-1 text-caption-2 text-label-tertiary">
            <GripVertical className="size-3.5" />
            drag
          </span>
        ) : null}
      </div>
      <div className="flex-1 p-4">{children}</div>
    </motion.div>
  )
}
