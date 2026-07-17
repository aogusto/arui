import { CopyButton } from "../components/CopyButton"

const CLAUDE_CMD = `claude mcp add arui -- npx -y @aogusto/arui-mcp`

const MCP_JSON = `{
  "mcpServers": {
    "arui": {
      "command": "npx",
      "args": ["-y", "@aogusto/arui-mcp"]
    }
  }
}`

function CodeBlock({ code }: { code: string }) {
  return (
    <div className="relative rounded-xl border border-separator bg-fill-tertiary p-4 pr-12">
      <pre className="overflow-x-auto font-mono text-caption-1 text-label">
        <code>{code}</code>
      </pre>
      <div className="absolute right-2 top-2">
        <CopyButton value={code} />
      </div>
    </div>
  )
}

export function McpPage() {
  return (
    <article className="mx-auto w-full max-w-3xl space-y-8">
      <header className="space-y-2">
        <p className="text-caption-1 font-semibold uppercase tracking-wide text-label-tertiary">Guides</p>
        <h1 className="text-title-1 font-bold text-label">Use with AI agents</h1>
        <p className="text-body text-label-secondary">
          arui ships an MCP server so your coding agent understands the library. Point your agent at
          it and it can look up components, their props, real usage examples, the design guide, and
          the setup contract, so it writes arui code that compiles and looks right.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-title-3 font-semibold text-label">Claude Code</h2>
        <CodeBlock code={CLAUDE_CMD} />
      </section>

      <section className="space-y-3">
        <h2 className="text-title-3 font-semibold text-label">Cursor and other MCP clients</h2>
        <p className="text-subhead text-label-secondary">
          Add this to the client's <code className="rounded bg-fill px-1 font-mono text-caption-1">mcpServers</code> config:
        </p>
        <CodeBlock code={MCP_JSON} />
      </section>

      <section className="space-y-3">
        <h2 className="text-title-3 font-semibold text-label">What the agent gets</h2>
        <ul className="list-disc space-y-1.5 pl-5 text-subhead text-label-secondary">
          <li>
            <code className="font-mono text-caption-1">list_components</code>: every component with a one-line description.
          </li>
          <li>
            <code className="font-mono text-caption-1">get_component</code>: import line, curated props, and live examples for one component.
          </li>
          <li>
            <code className="font-mono text-caption-1">search_components</code>: find components by use case, like "date picker" or "toast".
          </li>
          <li>
            <code className="font-mono text-caption-1">get_design_guide</code>: the Apple HIG usage guide with the glassmorphism material, tokens, motion, and accessibility rules.
          </li>
          <li>
            <code className="font-mono text-caption-1">get_setup</code>: how to install arui and wire the Tailwind v4 theme.
          </li>
        </ul>
        <p className="text-footnote text-label-tertiary">
          The knowledge is generated from these same docs, so it stays in sync with the library.
        </p>
      </section>
    </article>
  )
}
