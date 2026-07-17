import { useState } from "react"
import { CopyButton } from "../components/CopyButton"

type DemoProps = {
  title?: string
  description?: string
  code: string
  children: React.ReactNode
}

export function Demo({ title, description, code, children }: DemoProps) {
  const [showCode, setShowCode] = useState(false)
  return (
    <div className="space-y-3">
      {title ? <h3 className="text-headline font-semibold text-label">{title}</h3> : null}
      {description ? <p className="text-subhead text-label-secondary">{description}</p> : null}
      <div className="overflow-hidden rounded-2xl border border-separator">
        <div className="flex min-h-40 flex-wrap items-center justify-center gap-4 bg-background-secondary p-8">
          {children}
        </div>
        <div className="flex items-center justify-between border-t border-separator bg-background px-3 py-2">
          <button
            onClick={() => setShowCode((v) => !v)}
            className="text-footnote text-label-secondary hover:text-label"
          >
            {showCode ? "Hide code" : "Show code"}
          </button>
          <CopyButton value={code} />
        </div>
        {showCode ? (
          <pre className="overflow-x-auto border-t border-separator bg-background p-4 text-caption-1">
            <code>{code}</code>
          </pre>
        ) : null}
      </div>
    </div>
  )
}
