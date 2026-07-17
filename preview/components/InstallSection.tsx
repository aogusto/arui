import { PackageCheck, Wind } from "lucide-react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@aogusto/arui"
import { INSTALL_STEPS } from "../showcase"
import { CommandRow } from "./CommandRow"
import { Reveal } from "./Reveal"
import { SectionHeading } from "./SectionHeading"

export function InstallSection() {
  return (
    <section
      id="install"
      className="mx-auto w-full max-w-5xl scroll-mt-24 px-4 py-24 sm:px-6 sm:py-28"
    >
      <Reveal>
        <SectionHeading
          eyebrow="Install"
          title="Install it, import it."
          description="Install once, import what you need. Tree-shaken by default — only the components you use ship."
        />
      </Reveal>

      <Reveal axis="none" delay={0.05}>
        <div className="mt-8 flex items-center gap-2.5 rounded-xl border border-separator bg-fill-tertiary px-4 py-3">
          <Wind className="size-4 shrink-0 text-cyan" />
          <p className="text-subhead text-label-secondary">
            Prerequisite: a project already running{" "}
            <span className="font-medium text-label">Tailwind CSS v4</span>.
          </p>
        </div>
      </Reveal>

      <div className="mt-4 grid gap-4">
        {INSTALL_STEPS.map((step, i) => (
          <Reveal key={step.n} axis="none" delay={0.1 + i * 0.05}>
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-fill text-footnote font-semibold text-label">
                    {step.n}
                  </span>
                  <CardTitle className="text-headline">{step.title}</CardTitle>
                </div>
                <CardDescription className="text-subhead">
                  {step.body}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CommandRow command={step.command} kind={step.kind} />
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>

      <Reveal axis="none" delay={0.2}>
        <div className="mt-4 flex items-start gap-3 rounded-2xl border border-separator bg-background-secondary p-5">
          <PackageCheck className="mt-0.5 size-5 shrink-0 text-mint" />
          <div className="space-y-1">
            <p className="text-callout font-medium text-label">
              Tree-shaken by default.
            </p>
            <p className="text-subhead text-label-secondary">
              Only the components you import end up in your bundle —{" "}
              <code className="rounded-md bg-fill px-1.5 py-0.5 font-mono text-caption-1 text-label">
                Dialog
              </code>{" "}
              pulls in the glass surface it depends on, nothing more.{" "}
              <code className="rounded-md bg-fill px-1.5 py-0.5 font-mono text-caption-1 text-label">
                @aogusto/arui/theme.css
              </code>{" "}
              already brings the font and animations, so there's nothing else
              to wire up.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
