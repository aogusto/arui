import { useEffect } from "react"
import {
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@aogusto/arui"
import { CommandRow } from "../components/CommandRow"
import { CopyButton } from "../components/CopyButton"

const CSS_SETUP = `@import "tailwindcss";
@import "@aogusto/arui/theme.css";
@source "../node_modules/@aogusto/arui/dist";`

const USAGE_EXAMPLE = `import { Button } from "@aogusto/arui"

export function Example() {
  return <Button>Click me</Button>
}`

function CodeBlock({ value }: { value: string }) {
  return (
    <div className="relative rounded-xl border border-separator bg-fill-tertiary p-4 pr-14">
      <CopyButton value={value} className="absolute right-3 top-3" />
      <pre className="overflow-x-auto">
        <code className="font-mono text-caption-1 leading-relaxed text-label sm:text-footnote">
          {value}
        </code>
      </pre>
    </div>
  )
}

export function GettingStarted() {
  useEffect(() => {
    document.title = "arui docs: Getting started"
  }, [])

  return (
    <div className="mx-auto w-full max-w-3xl space-y-10 pb-12">
      <div className="space-y-2">
        <h1 className="text-title-1 font-bold text-label">Getting started</h1>
        <p className="text-body text-label-secondary">
          arui is a React component library built with Tailwind CSS v4 and
          Apple HIG tokens. Its signature look is a glassmorphism surface:
          frosted, translucent panels with a soft blur and a subtle inner
          highlight.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-headline">1. Install</CardTitle>
          <CardDescription className="text-subhead">
            Add the package to your project. It ships as ES modules with
            types included.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CommandRow command="npm install @aogusto/arui" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-headline">
            2. Set up the stylesheet
          </CardTitle>
          <CardDescription className="text-subhead">
            arui requires Tailwind CSS v4. In your global stylesheet, import
            Tailwind first, then the arui theme, then point{" "}
            <code className="rounded-md bg-fill px-1.5 py-0.5 font-mono text-caption-1 text-label">
              @source
            </code>{" "}
            at the package's{" "}
            <code className="rounded-md bg-fill px-1.5 py-0.5 font-mono text-caption-1 text-label">
              dist
            </code>{" "}
            folder so Tailwind can see the classes used inside its
            components.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CodeBlock value={CSS_SETUP} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-headline">3. Use a component</CardTitle>
          <CardDescription className="text-subhead">
            Import components directly from{" "}
            <code className="rounded-md bg-fill px-1.5 py-0.5 font-mono text-caption-1 text-label">
              @aogusto/arui
            </code>
            . Every component is tree shaken, so only what you use ends up in
            your bundle.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CodeBlock value={USAGE_EXAMPLE} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <CardTitle className="text-headline">react-hook-form</CardTitle>
            <Badge variant="secondary">Optional</Badge>
          </div>
          <CardDescription className="text-subhead">
            The{" "}
            <code className="rounded-md bg-fill px-1.5 py-0.5 font-mono text-caption-1 text-label">
              Form
            </code>{" "}
            component integrates with react-hook-form for validation and
            field state. It is listed as an optional peer dependency, so
            install it only if your project uses{" "}
            <code className="rounded-md bg-fill px-1.5 py-0.5 font-mono text-caption-1 text-label">
              Form
            </code>
            .
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CommandRow command="npm install react-hook-form" />
        </CardContent>
      </Card>
    </div>
  )
}
