import path from "node:path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  // Vercel serve na raiz do domínio → base "/" (default). No GitHub Pages seria "/arui/".
  plugins: [react(), tailwindcss()],
  // O showcase (build:preview) NÃO pode escrever em dist/ — dist/ é da lib (tsup) e é publicado (files: ["dist"]).
  build: { outDir: "showcase-dist" },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // dogfood: o showcase importa pelo caminho público real, resolvido no source
      arui: path.resolve(__dirname, "./src/index.ts"),
    },
  },
})
