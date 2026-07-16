import type { ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"

type RevealProps = {
  children: ReactNode
  className?: string
  /** "y" slides up + fades; "none" fades only (safe above backdrop-filter glass) */
  axis?: "y" | "none"
  delay?: number
}

/**
 * Scroll-triggered reveal, once. Respects reduced motion (renders statically).
 * Use axis="none" whenever the revealed subtree contains glass — a lingering
 * transform on an ancestor breaks backdrop-filter capture.
 */
export function Reveal({ children, className, axis = "y", delay = 0 }: RevealProps) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  const initial = axis === "y" ? { opacity: 0, y: 18 } : { opacity: 0 }
  const inView = axis === "y" ? { opacity: 1, y: 0 } : { opacity: 1 }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={inView}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}
