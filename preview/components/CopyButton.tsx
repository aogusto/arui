import { useEffect, useRef, useState } from "react"
import { Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"

type CopyButtonProps = {
  value: string
  className?: string
  /** show a text label beside the icon ("Copy" → "Copied") */
  withText?: boolean
  label?: string
}

/**
 * Copies `value` to the clipboard and confirms with a check + "Copied" for a
 * moment. Reused by the hero command chip and the install steps.
 */
export function CopyButton({
  value,
  className,
  withText = false,
  label = "Copy",
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false)
  const timer = useRef<number | null>(null)

  useEffect(() => () => {
    if (timer.current) window.clearTimeout(timer.current)
  }, [])

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
    } catch {
      // Clipboard can be unavailable in insecure contexts — fail quietly.
    }
    setCopied(true)
    if (timer.current) window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      aria-label={copied ? "Copied" : label}
      className={cn(
        "inline-flex items-center justify-center gap-1.5 rounded-lg border border-separator text-callout text-label transition-colors hover:bg-label/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring active:translate-y-px",
        withText ? "h-9 px-3" : "size-9",
        className
      )}
    >
      {copied ? (
        <Check className="size-4 text-mint" />
      ) : (
        <Copy className="size-4" />
      )}
      {withText ? (
        <span className="text-footnote font-medium">
          {copied ? "Copied" : label}
        </span>
      ) : null}
    </button>
  )
}
