import { useCallback, useEffect, useRef, useState } from "react"
import {
  applyAruiTint,
  Button,
  GlassSurface,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@aogusto/arui"
import { CopyButton } from "../components/CopyButton"

const USAGE_CODE = `import { AruiThemeProvider } from "@aogusto/arui"

export function App() {
  return (
    <AruiThemeProvider tint="pink">
      <YourApp />
    </AruiThemeProvider>
  )
}`

const CSS_ONLY_CODE = `:root {
  --primary: #ec4899;
  --ring: #ec4899;
  --glass-tint: rgb(236, 72, 153);
}`

const PRESETS = ["blue", "indigo", "violet", "pink", "rose", "green", "teal", "orange", "red"]

const SWATCHES: { name: string; color: string }[] = [
  { name: "Blue", color: "blue" },
  { name: "Pink", color: "pink" },
  { name: "Green", color: "green" },
]

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

function LiveTintDemo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cleanupRef = useRef<(() => void) | null>(null)
  const [active, setActive] = useState<string | null>(null)

  const pick = useCallback((color: string) => {
    if (!containerRef.current) return
    cleanupRef.current?.()
    cleanupRef.current = applyAruiTint(color, containerRef.current)
    setActive(color)
  }, [])

  useEffect(() => () => cleanupRef.current?.(), [])

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {SWATCHES.map((s) => (
          <Button
            key={s.color}
            size="sm"
            variant={active === s.color ? "default" : "outline"}
            onClick={() => pick(s.color)}
          >
            {s.name}
          </Button>
        ))}
      </div>
      <div
        ref={containerRef}
        className="rounded-2xl border border-separator bg-background-secondary p-6"
      >
        <div className="flex flex-wrap items-center gap-4">
          <Button>Primary button</Button>
          <GlassSurface tint="accent">
            <div className="w-36 p-4 text-center text-subhead font-semibold text-foreground">
              Accent glass
            </div>
          </GlassSurface>
          <Tabs defaultValue="one" className="w-56">
            <TabsList variant="glass">
              <TabsTrigger value="one">One</TabsTrigger>
              <TabsTrigger value="two">Two</TabsTrigger>
            </TabsList>
            <TabsContent value="one" className="p-2 text-footnote text-label-secondary">
              Tab one content.
            </TabsContent>
            <TabsContent value="two" className="p-2 text-footnote text-label-secondary">
              Tab two content.
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <p className="text-footnote text-label-tertiary">
        This demo scopes the tint to the box above via <code className="font-mono">applyAruiTint(color, ref.current)</code>.
        It never touches <code className="font-mono">document.documentElement</code>, so the rest of this site is unaffected.
      </p>
    </div>
  )
}

export function ThemingPage() {
  return (
    <article className="mx-auto w-full max-w-3xl space-y-8">
      <header className="space-y-2">
        <p className="text-caption-1 font-semibold uppercase tracking-wide text-label-tertiary">Guides</p>
        <h1 className="text-title-1 font-bold text-label">Theming</h1>
        <p className="text-body text-label-secondary">
          arui ships with a blue primary by default, but every app can pick its own accent with a
          single prop. Wrap your app in <code className="font-mono text-caption-1">AruiThemeProvider</code>{" "}
          with a <code className="font-mono text-caption-1">tint</code>, and the primary color, the
          focus ring, and the glass materials all follow it.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-title-3 font-semibold text-label">Usage</h2>
        <p className="text-subhead text-label-secondary">
          Mount <code className="font-mono">AruiThemeProvider</code> once near the root of your app,
          typically alongside your existing theme/dark-mode provider.
        </p>
        <CodeBlock code={USAGE_CODE} />
      </section>

      <section className="space-y-3">
        <h2 className="text-title-3 font-semibold text-label">Presets</h2>
        <p className="text-subhead text-label-secondary">
          Nine named presets ship out of the box:
        </p>
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((p) => (
            <code
              key={p}
              className="rounded-md border border-separator bg-fill-tertiary px-2 py-1 font-mono text-caption-1 text-label"
            >
              {p}
            </code>
          ))}
        </div>
        <p className="text-subhead text-label-secondary">
          Or pass any CSS color instead of a preset name: a hex string (<code className="font-mono">#22c55e</code>),
          an <code className="font-mono">rgb()</code>, or an <code className="font-mono">oklch()</code> value.
          Anything that isn't a recognized preset name is used as-is.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-title-3 font-semibold text-label">What the tint affects</h2>
        <ul className="list-disc space-y-1.5 pl-5 text-subhead text-label-secondary">
          <li>
            <code className="font-mono text-caption-1">--primary</code> and{" "}
            <code className="font-mono text-caption-1">--ring</code>: the default{" "}
            <code className="font-mono text-caption-1">Button</code> fill and the focus ring color
            used across every interactive component.
          </li>
          <li>
            <code className="font-mono text-caption-1">GlassSurface</code> with{" "}
            <code className="font-mono text-caption-1">tint=&quot;accent&quot;</code>: the frosted
            panel picks up the same color as a translucent overlay.
          </li>
          <li>
            <code className="font-mono text-caption-1">Tabs</code> with{" "}
            <code className="font-mono text-caption-1">variant=&quot;glass&quot;</code> on{" "}
            <code className="font-mono text-caption-1">TabsList</code>: the animated glass pill
            behind the active tab is tinted to match.
          </li>
        </ul>
        <p className="text-subhead text-label-secondary">
          A contrasting <code className="font-mono text-caption-1">--primary-foreground</code> is
          computed automatically from the tint's luminance, so text on top of a primary-colored
          surface stays readable whether the tint is light (like a pale yellow) or dark.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-title-3 font-semibold text-label">CSS-only path</h2>
        <p className="text-subhead text-label-secondary">
          No React provider required. Set the same three custom properties directly in your global
          CSS, and every arui component reads them the same way:
        </p>
        <CodeBlock code={CSS_ONLY_CODE} />
      </section>

      <section className="space-y-3">
        <h2 className="text-title-3 font-semibold text-label">Try it</h2>
        <p className="text-subhead text-label-secondary">
          Pick a tint below. It only restyles the box, via a container ref passed to{" "}
          <code className="font-mono text-caption-1">applyAruiTint</code>, not the whole page.
        </p>
        <LiveTintDemo />
      </section>
    </article>
  )
}
