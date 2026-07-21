"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"

import { cn } from "@/lib/utils"

// Fonte única do visual do pill (glassmorphism, tingido pelo tema).
// Sem backdrop-filter aqui de propósito: o frost vem do container; assim o
// transform do slide não derruba o efeito.
export const GLASS_PILL_STYLE: React.CSSProperties = {
  background:
    "color-mix(in oklch, var(--glass-tint, var(--primary)) 18%, rgb(var(--glass-regular) / 0.82))",
  boxShadow:
    "inset 0 1px 0 0 rgb(255 255 255 / 0.55), inset 0 0 0 0.5px rgb(255 255 255 / 0.15), 0 2px 8px -3px rgb(0 0 0 / 0.28)",
}

// Estado "on/selected" ESTÁTICO (multi ToggleGroup, Toggle standalone): o gêmeo
// não-animado do GlassPill. Mesmo vidro (glass-fill), aplicado direto no item.
// (single-select ToggleGroup NÃO usa isso: lá o pill deslizante já faz o vidro.)
export const GLASS_ON_ITEM =
  "data-[state=on]:glass-fill data-[state=on]:text-foreground data-[state=on]:border-white/40 dark:data-[state=on]:border-white/15"

export interface PillGeometry {
  x: number
  y: number
  width: number
  height: number
  radius: string
}

export interface UseGlassHighlightOptions {
  /** seletor CSS do item ativo/destacado, ex: '[data-highlighted]', '[data-state="active"]' */
  activeSelector: string
  /** quando o nó de medição não é o próprio nó do callback ref (ex: [cmdk-list-sizer]) */
  resolveContainer?: (root: HTMLElement) => HTMLElement | null
  /** 'offset' (default, scroll-safe) ou 'rect' quando há wrapper relative intermediário */
  measure?: "offset" | "rect"
  /** copia o border-radius do item pro pill (default true) */
  matchRadius?: boolean
  /** false desliga e não posiciona (ex: ToggleGroup multi) */
  enabled?: boolean
  /** recálculos extras (orientation, breakpoint) */
  deps?: React.DependencyList
}

// Extrai os nomes de atributo de um seletor pra filtrar o MutationObserver.
// '.active' → observa 'class'. Sem match → undefined (observa todos).
function attrFilterFrom(selector: string): string[] | undefined {
  const attrs = Array.from(selector.matchAll(/\[([a-zA-Z0-9_-]+)/g)).map((m) => m[1])
  if (selector.includes(".")) attrs.push("class")
  return attrs.length ? Array.from(new Set(attrs)) : undefined
}

export function useGlassHighlight(
  options: UseGlassHighlightOptions
): { ref: (node: HTMLElement | null) => void; geometry: PillGeometry | null } {
  const {
    activeSelector,
    resolveContainer,
    measure = "offset",
    matchRadius = true,
    enabled = true,
    deps = [],
  } = options
  const [root, setRoot] = React.useState<HTMLElement | null>(null)
  const ref = React.useCallback((node: HTMLElement | null) => setRoot(node), [])
  const [geometry, setGeometry] = React.useState<PillGeometry | null>(null)

  React.useLayoutEffect(() => {
    if (!enabled || !root || typeof document === "undefined") {
      setGeometry(null)
      return
    }
    const container = resolveContainer ? resolveContainer(root) : root
    if (!container) {
      setGeometry(null)
      return
    }

    const measureNow = () => {
      const item = container.querySelector<HTMLElement>(activeSelector)
      if (!item) {
        setGeometry(null)
        return
      }
      const width = item.offsetWidth
      const height = item.offsetHeight
      let x: number
      let y: number
      if (measure === "rect") {
        const cr = container.getBoundingClientRect()
        const ir = item.getBoundingClientRect()
        x = ir.left - cr.left + container.scrollLeft
        y = ir.top - cr.top + container.scrollTop
      } else {
        x = item.offsetLeft
        y = item.offsetTop
      }
      const radius = matchRadius ? getComputedStyle(item).borderRadius : ""
      setGeometry({ x, y, width, height, radius })
    }

    measureNow()

    const mo = new MutationObserver(measureNow)
    mo.observe(container, {
      attributes: true,
      attributeFilter: attrFilterFrom(activeSelector),
      childList: true,
      subtree: true,
    })
    const ro = new ResizeObserver(measureNow)
    ro.observe(container)
    window.addEventListener("resize", measureNow)

    return () => {
      mo.disconnect()
      ro.disconnect()
      window.removeEventListener("resize", measureNow)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [root, activeSelector, resolveContainer, measure, matchRadius, enabled, ...deps])

  return { ref, geometry }
}

export function GlassPill({
  geometry,
  className,
  style,
}: {
  geometry: PillGeometry | null
  className?: string
  style?: React.CSSProperties
}) {
  const reduce = useReducedMotion()
  const isReady = geometry != null
  // Congela a última geometria conhecida. Assim, quando o highlight some (ex.:
  // mouse sai do menu, ou o menu fecha), o pill some FIXO no lugar via opacity,
  // em vez de voar pro canto (x/y -> 0) e colapsar num quadradinho (width/height
  // -> auto). Sem isso, sair de um menu vertical arrastava o pill "pra cima" e
  // fechar um menubar horizontal jogava ele "pra esquerda" virando quadrado.
  const lastGeometry = React.useRef<PillGeometry | null>(null)
  if (geometry) lastGeometry.current = geometry
  const g = geometry ?? lastGeometry.current
  // Primeiro reveal (escondido para visível, ex.: menu recém-aberto ganha o
  // primeiro item destacado): o pill surge no lugar via opacity, sem deslizar
  // do canto (0, 0). O movimento item a item depois disso usa a spring.
  const wasReady = React.useRef(false)
  const justAppeared = isReady && !wasReady.current
  React.useEffect(() => {
    wasReady.current = isReady
  }, [isReady])
  const spring = { type: "spring", stiffness: 400, damping: 34 } as const
  const posTransition = reduce || justAppeared ? { duration: 0 } : spring
  return (
    <motion.span
      aria-hidden="true"
      data-slot="glass-pill"
      className={cn(
        "pointer-events-none absolute left-0 top-0 z-0 border border-white/40 dark:border-white/15",
        className
      )}
      style={{ ...GLASS_PILL_STYLE, borderRadius: g?.radius || undefined, ...style }}
      initial={false}
      animate={
        g
          ? { opacity: isReady ? 1 : 0, x: g.x, y: g.y, width: g.width, height: g.height }
          : { opacity: 0 }
      }
      transition={{
        opacity: { duration: reduce ? 0 : 0.15 },
        x: posTransition,
        y: posTransition,
        width: posTransition,
        height: posTransition,
      }}
    />
  )
}
