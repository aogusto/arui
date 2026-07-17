import { useEffect } from "react"
import { Toaster } from "@aogusto/arui"
import { useTheme } from "../lib/useTheme"
import { Nav } from "../components/Nav"
import { Hero } from "../components/Hero"
import { MaterialSection } from "../components/MaterialSection"
import { ComponentsPlayground } from "../components/ComponentsPlayground"
import { InstallSection } from "../components/InstallSection"
import { Footer } from "../components/Footer"

export function HomePage() {
  const { theme, toggle } = useTheme()

  useEffect(() => {
    document.title = "Arui: React components with glassmorphism"
  }, [])

  return (
    <div className="relative min-h-dvh overflow-x-hidden bg-background text-foreground antialiased">
      {/* Ambient accent haze — ties the sections together so the space between
          them reads as considered rather than empty. Purely decorative. */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-0 overflow-hidden"
      >
        <div className="animate-login-blob-1 absolute -left-32 top-1/4 size-[38rem] rounded-full bg-indigo/10 blur-[120px]" />
        <div className="animate-login-blob-3 absolute -right-24 top-2/3 size-[34rem] rounded-full bg-purple/10 blur-[120px]" />
        <div className="animate-login-blob-2 absolute bottom-0 left-1/3 size-[30rem] rounded-full bg-cyan/[0.07] blur-[120px]" />
      </div>

      <Toaster />
      <Nav theme={theme} onToggleTheme={toggle} />
      <main className="relative z-10">
        <Hero />
        <MaterialSection />
        <ComponentsPlayground />
        <InstallSection />
      </main>
      <Footer className="relative z-10" />
    </div>
  )
}
