import { useEffect } from "react"
import { useNavigate } from "@tanstack/react-router"
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@aogusto/arui"
import { DOCS_CATEGORIES, DOCS_REGISTRY } from "./registry"

type CommandMenuProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CommandMenu({ open, onOpenChange }: CommandMenuProps) {
  const navigate = useNavigate()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        onOpenChange(!open)
      }
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [open, onOpenChange])

  return (
    <CommandDialog
      open={open}
      onOpenChange={onOpenChange}
      title="Search components"
      description="Jump to any component page in the arui docs."
    >
      <CommandInput placeholder="Search components..." />
      <CommandList>
        <CommandEmpty>No component found.</CommandEmpty>
        {DOCS_CATEGORIES.map((cat) => (
          <CommandGroup key={cat} heading={cat}>
            {DOCS_REGISTRY.filter((e) => e.category === cat).map((e) => (
              <CommandItem
                key={e.slug}
                value={e.name}
                onSelect={() => {
                  onOpenChange(false)
                  navigate({
                    to: "/docs/components/$slug",
                    params: { slug: e.slug },
                  })
                }}
              >
                {e.name}
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </CommandDialog>
  )
}
