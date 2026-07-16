import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { SITE } from "../showcase"
import { GitHubMark, Wordmark } from "./icons"

const META = [
  { label: "Components", value: `${SITE.componentCount} total` },
  { label: "License", value: "MIT" },
  { label: "Stack", value: "React 19 · Tailwind 4" },
]

export function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn("mt-8 border-t border-separator", className)}>
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm space-y-4">
            <Wordmark className="text-title-3" />
            <p className="text-subhead text-label-secondary">
              Liquid-glass React components built on Apple HIG materials. Copy
              the source, keep the polish.
            </p>
            <Button asChild variant="outline" size="sm" className="gap-1.5">
              <a href={SITE.github} target="_blank" rel="noreferrer">
                <GitHubMark />
                Star on GitHub
                <ArrowUpRight className="size-3.5" />
              </a>
            </Button>
          </div>

          <dl className="grid grid-cols-3 gap-x-8 gap-y-1 sm:gap-x-12">
            {META.map((item) => (
              <div key={item.label} className="space-y-1">
                <dt className="text-caption-2 font-semibold uppercase tracking-[0.16em] text-label-tertiary">
                  {item.label}
                </dt>
                <dd className="text-subhead text-label">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-separator pt-6 text-caption-1 text-label-tertiary sm:flex-row sm:items-center sm:justify-between">
          <p>
            {SITE.name} — glass-surface + {SITE.primitiveCount} primitives.
            Released under the MIT License.
          </p>
          <p>
            Photos:{" "}
            <a
              href="https://www.pexels.com"
              target="_blank"
              rel="noreferrer"
              className="text-label-secondary underline-offset-2 hover:text-label hover:underline"
            >
              Pexels
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
