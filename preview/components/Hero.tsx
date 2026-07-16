import { ArrowRight } from "lucide-react"
import { GlassSurface, Button } from "arui"
import { HERO_INSTALL, SITE } from "../showcase"
import { scrollToId } from "../lib/scroll"
import { CommandRow } from "./CommandRow"
import { DriftingPhotos } from "./DriftingPhotos"
import { GitHubMark, Wordmark } from "./icons"

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden px-4 pt-28 pb-16 sm:px-6 sm:pt-32"
    >
      {/* The signature: six photos drifting slowly behind the pane. A gentle
          float on the whole strip adds parallax without touching the glass. */}
      <div aria-hidden className="arui-float absolute inset-0">
        <DriftingPhotos
          speed={72}
          overlayClassName="bg-gradient-to-b from-background/40 via-background/15 to-background/85"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-3xl">
        <GlassSurface variant="clear" dim className="overflow-hidden">
          <div className="space-y-8 p-7 sm:p-12">
            <Wordmark tone="light" className="text-title-3" />

            <div className="space-y-5">
              <h1 className="text-[clamp(2.6rem,8vw,4.75rem)] font-bold leading-[1.02] tracking-[-0.03em] text-white text-balance">
                Liquid glass, done right.
              </h1>
              <p className="max-w-xl text-body text-white/75 sm:text-callout">
                A React component library built on Apple HIG materials —
                install it, import what you need, frosted and yours to
                style.
              </p>
            </div>

            {/* Copyable install command */}
            <CommandRow command={HERO_INSTALL} tone="light" />

            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                className="gap-1.5"
                onClick={() => scrollToId("components")}
              >
                Browse components
                <ArrowRight className="size-4" />
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-1.5 border-white/25 bg-white/10 text-white hover:bg-white/20 hover:text-white dark:border-white/25 dark:bg-white/10 dark:hover:bg-white/20"
              >
                <a href={SITE.github} target="_blank" rel="noreferrer">
                  <GitHubMark />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </GlassSurface>
      </div>
    </section>
  )
}
