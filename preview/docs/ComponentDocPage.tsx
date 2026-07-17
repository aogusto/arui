import { Suspense, lazy, useMemo } from "react"
import { useParams } from "@tanstack/react-router"
import { DOCS_REGISTRY } from "./registry"

const pageModules = import.meta.glob("./components/*/page.tsx")

export function ComponentDocPage() {
  const { slug } = useParams({ from: "/docs/components/$slug" })
  const entry = DOCS_REGISTRY.find((e) => e.slug === slug)

  const Page = useMemo(() => {
    const key = `./components/${slug}/page.tsx`
    const loader = pageModules[key]
    if (!loader) return null
    return lazy(loader as () => Promise<{ default: React.ComponentType }>)
  }, [slug])

  if (!entry) return <p className="text-body text-label-secondary">Unknown component.</p>
  if (!Page)
    return (
      <div className="space-y-2">
        <h1 className="text-title-1 font-bold">{entry.name}</h1>
        <p className="text-body text-label-secondary">Docs for this component are coming soon.</p>
      </div>
    )
  return (
    <Suspense fallback={<p className="text-subhead text-label-tertiary">Loading...</p>}>
      <Page />
    </Suspense>
  )
}
