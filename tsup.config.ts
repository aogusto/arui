import { copyFileSync } from "node:fs"
import { defineConfig } from "tsup"

export default defineConfig({
  entry: { index: "src/index.ts" },
  format: ["esm"],
  dts: true,
  clean: true,
  treeshake: true,
  // resolve os aliases @/* via tsconfig paths
  tsconfig: "tsconfig.app.json",
  // theme.css é asset, não passa pelo bundler JS — copiado cru
  onSuccess: async () => {
    copyFileSync("src/theme.css", "dist/theme.css")
  },
})
