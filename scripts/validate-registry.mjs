import { readFileSync, existsSync, readdirSync } from "node:fs"
import { resolve } from "node:path"

const root = resolve(process.cwd())
const reg = JSON.parse(readFileSync(resolve(root, "registry.json"), "utf-8"))
let errors = 0
const fail = (m) => {
  console.error("✗", m)
  errors++
}

if (!reg.name || !Array.isArray(reg.items)) fail("registry.json: name/items ausentes")
for (const item of reg.items ?? []) {
  if (!item.name || !item.type) fail(`item sem name/type: ${JSON.stringify(item)}`)
  for (const f of item.files ?? []) {
    if (!existsSync(resolve(root, f.path))) fail(`arquivo inexistente: ${f.path} (item ${item.name})`)
  }
}
// checar que shadcn build gerou os JSONs
const outDir = resolve(root, "public/r")
if (existsSync(outDir)) {
  const built = readdirSync(outDir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.replace(".json", ""))
  for (const item of reg.items ?? []) {
    if (!built.includes(item.name)) fail(`public/r/${item.name}.json não foi gerado`)
  }
} else {
  fail("public/r não existe — rode `npm run registry:build` antes")
}
if (errors) {
  console.error(`\n${errors} erro(s)`)
  process.exit(1)
}
console.log("✓ registry válido:", reg.items.length, "itens")
