import type { ReactNode } from "react"
import guide from "../../mcp/knowledge/design-guide.md?raw"

function Markdown({ md }: { md: string }) {
  const lines = md.split("\n")
  const out: ReactNode[] = []
  let i = 0
  let key = 0
  while (i < lines.length) {
    const line = lines[i]
    if (line.startsWith("```")) {
      const code: string[] = []
      i++
      while (i < lines.length && !lines[i].startsWith("```")) {
        code.push(lines[i])
        i++
      }
      i++ // skip closing fence
      out.push(
        <pre
          key={key++}
          className="overflow-x-auto rounded-lg border border-separator bg-fill-tertiary p-3 font-mono text-caption-1 text-label"
        >
          <code>{code.join("\n")}</code>
        </pre>
      )
      continue
    }
    if (line.startsWith("### ")) {
      out.push(
        <h3 key={key++} className="mt-6 text-headline font-semibold text-label">
          {line.slice(4)}
        </h3>
      )
      i++
      continue
    }
    if (line.startsWith("## ")) {
      out.push(
        <h2 key={key++} className="mt-8 text-title-3 font-semibold text-label">
          {line.slice(3)}
        </h2>
      )
      i++
      continue
    }
    if (line.startsWith("# ")) {
      out.push(
        <h1 key={key++} className="text-title-1 font-bold text-label">
          {line.slice(2)}
        </h1>
      )
      i++
      continue
    }
    if (line.startsWith("- ") || line.startsWith("* ")) {
      const items: string[] = []
      while (i < lines.length && (lines[i].startsWith("- ") || lines[i].startsWith("* "))) {
        items.push(lines[i].slice(2))
        i++
      }
      out.push(
        <ul key={key++} className="list-disc space-y-1 pl-5 text-subhead text-label-secondary">
          {items.map((it, idx) => (
            <li key={idx}>{it}</li>
          ))}
        </ul>
      )
      continue
    }
    if (line.trim() === "") {
      i++
      continue
    }
    out.push(
      <p key={key++} className="text-subhead text-label-secondary">
        {line}
      </p>
    )
    i++
  }
  return <div className="space-y-3">{out}</div>
}

export function DesignPage() {
  return (
    <article className="mx-auto w-full max-w-3xl">
      <Markdown md={guide} />
    </article>
  )
}
