import { readFileSync, readdirSync, writeFileSync, existsSync } from "node:fs"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"
import { DOCS_REGISTRY, DOCS_CATEGORIES } from "../preview/docs/registry.ts"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const componentsDir = join(root, "preview/docs/components")

const order = DOCS_REGISTRY.map((e) => e.slug)
const slugs = readdirSync(componentsDir).filter((s) =>
  existsSync(join(componentsDir, s, "meta.ts"))
)

const components = []
for (const slug of slugs) {
  const dir = join(componentsDir, slug)
  const mod = await import(join(dir, "meta.ts"))
  const meta = mod.meta
  // props: usa `props` se existir; senão concatena todas as exports que começam com "props" e são arrays
  let props: unknown[] = []
  if (Array.isArray(mod.props)) props = mod.props
  else
    props = Object.keys(mod)
      .filter((k) => k.startsWith("props") && Array.isArray(mod[k]))
      .flatMap((k) => mod[k])
  const examplesDir = join(dir, "examples")
  const examples = existsSync(examplesDir)
    ? readdirSync(examplesDir)
        .filter((f) => f.endsWith(".tsx"))
        .map((f) => ({ name: f.replace(/\.tsx$/, ""), code: readFileSync(join(examplesDir, f), "utf8") }))
    : []
  components.push({
    slug: meta.slug,
    name: meta.name,
    category: meta.category,
    description: meta.description,
    imports: meta.imports,
    props,
    examples,
  })
}

components.sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug))

const designGuide = readFileSync(join(root, "mcp/knowledge/design-guide.md"), "utf8")
const version = JSON.parse(readFileSync(join(root, "package.json"), "utf8")).version
const setup = [
  "Install: npm install @aogusto/arui",
  "Peers: React 19 and Tailwind CSS v4. react-hook-form is an optional peer (only Form/Field need it).",
  "Theme setup in your app CSS:",
  '  @import "tailwindcss";',
  '  @import "@aogusto/arui/theme.css";',
  '  @source "../node_modules/@aogusto/arui/dist";',
  "The @source line is required: without it Tailwind will not scan node_modules and the components render unstyled.",
  'Usage: import { Button } from "@aogusto/arui"',
].join("\n")

writeFileSync(
  join(root, "mcp/manifest.json"),
  JSON.stringify({ version, categories: DOCS_CATEGORIES, components, designGuide, setup }, null, 2) + "\n"
)
console.log(`manifest: ${components.length} components`)
