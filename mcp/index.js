#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js"
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js"
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js"
import { readFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const here = dirname(fileURLToPath(import.meta.url))
const manifest = JSON.parse(readFileSync(join(here, "manifest.json"), "utf8"))
const byKey = (q) => (c) =>
  c.slug === q || c.name.toLowerCase() === String(q).toLowerCase()

const text = (s) => ({ content: [{ type: "text", text: s }] })

function renderComponent(c) {
  const propLines = c.props.length
    ? c.props
        .map((p) => `- ${p.prop}: ${p.type}${p.default ? ` (default ${p.default})` : ""} — ${p.description}`)
        .join("\n")
    : "(no documented props)"
  const examples = c.examples.map((e) => `### ${e.name}\n\`\`\`tsx\n${e.code}\n\`\`\``).join("\n\n")
  return [
    `# ${c.name} (${c.category})`,
    c.description,
    ``,
    `Import: \`import { ${c.imports.join(", ")} } from "@aogusto/arui"\``,
    ``,
    `## Props`,
    propLines,
    ``,
    `## Examples`,
    examples,
  ].join("\n")
}

const tools = [
  {
    name: "list_components",
    description:
      "List arui components, optionally filtered by category. Returns slug, name, category, one-line description.",
    inputSchema: {
      type: "object",
      properties: { category: { type: "string", description: "Optional category filter" } },
    },
    handler: (args) => {
      const list = manifest.components.filter(
        (c) => !args?.category || c.category.toLowerCase() === args.category.toLowerCase()
      )
      return text(list.map((c) => `- ${c.slug} — ${c.name} (${c.category}): ${c.description}`).join("\n"))
    },
  },
  {
    name: "get_component",
    description:
      "Get full docs for one arui component: import line, curated props, and live examples (real code). Accepts slug or name.",
    inputSchema: {
      type: "object",
      properties: { name: { type: "string", description: "Component slug or name (e.g. 'button' or 'Button')" } },
      required: ["name"],
    },
    handler: (args) => {
      const c = manifest.components.find(byKey(args.name))
      if (!c) return text(`No component matching "${args.name}". Use list_components to see all.`)
      return text(renderComponent(c))
    },
  },
  {
    name: "search_components",
    description:
      "Search arui components by use case or keyword (matches name, description, prop names, and example code).",
    inputSchema: {
      type: "object",
      properties: { query: { type: "string" } },
      required: ["query"],
    },
    handler: (args) => {
      const q = String(args.query).toLowerCase()
      const hits = manifest.components.filter((c) => {
        const hay = [
          c.name,
          c.slug,
          c.description,
          ...c.props.map((p) => p.prop + " " + p.description),
          ...c.examples.map((e) => e.code),
        ]
          .join("\n")
          .toLowerCase()
        return hay.includes(q)
      })
      if (!hits.length) return text(`No matches for "${args.query}".`)
      return text(hits.map((c) => `- ${c.slug} — ${c.name}: ${c.description}`).join("\n"))
    },
  },
  {
    name: "get_design_guide",
    description:
      "Get the arui design guide (Apple HIG usage concept, glassmorphism technique, tokens, motion, a11y, component patterns). Optional topic filters to a section.",
    inputSchema: {
      type: "object",
      properties: {
        topic: {
          type: "string",
          description: "Optional: a word to filter sections, e.g. materials, color, typography, motion, accessibility",
        },
      },
    },
    handler: (args) => {
      if (!args?.topic) return text(manifest.designGuide)
      const t = args.topic.toLowerCase()
      const sections = manifest.designGuide.split(/\n(?=#{1,3} )/).filter((s) => s.toLowerCase().includes(t))
      return text(sections.length ? sections.join("\n\n") : manifest.designGuide)
    },
  },
  {
    name: "get_setup",
    description:
      "How to install and set up arui in a project (npm install, Tailwind v4 theme import + @source, usage).",
    inputSchema: { type: "object", properties: {} },
    handler: () => text(manifest.setup),
  },
]

const server = new Server(
  { name: "arui-mcp", version: manifest.version || "0.1.0" },
  { capabilities: { tools: {} } }
)
server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: tools.map(({ handler, ...t }) => t),
}))
server.setRequestHandler(CallToolRequestSchema, async (req) => {
  const tool = tools.find((t) => t.name === req.params.name)
  if (!tool) return text(`Unknown tool: ${req.params.name}`)
  return tool.handler(req.params.arguments || {})
})

const transport = new StdioServerTransport()
await server.connect(transport)
