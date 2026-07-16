import { useCallback, useEffect, useState } from "react"

type Theme = "dark" | "light"

const STORAGE_KEY = "arui-theme"

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark")
}

/**
 * Dark by default — glass over vivid photos reads most dramatically on a dark
 * canvas. Choice is persisted; toggling flips the `dark` class on <html>.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "dark"
    return window.localStorage.getItem(STORAGE_KEY) === "light" ? "light" : "dark"
  })

  useEffect(() => {
    applyTheme(theme)
    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const toggle = useCallback(() => {
    setTheme((current) => (current === "dark" ? "light" : "dark"))
  }, [])

  return { theme, toggle }
}
