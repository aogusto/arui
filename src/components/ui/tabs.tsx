"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Tabs as TabsPrimitive } from "radix-ui"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

type TabsVariant = "default" | "line" | "segmented" | "glass"

interface TabsRootContextValue {
  activeValue: string | undefined
  pillId: string
}
const TabsRootContext = React.createContext<TabsRootContextValue | null>(null)
const TabsListContext = React.createContext<{ variant: TabsVariant }>({ variant: "default" })

function Tabs({
  className,
  orientation = "horizontal",
  value,
  defaultValue,
  onValueChange,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  const pillId = React.useId()
  const [internalValue, setInternalValue] = React.useState<string | undefined>(
    value ?? defaultValue
  )
  const activeValue = value ?? internalValue
  const handleValueChange = React.useCallback(
    (next: string) => {
      setInternalValue(next)
      onValueChange?.(next)
    },
    [onValueChange]
  )
  return (
    <TabsRootContext.Provider value={{ activeValue, pillId }}>
      <TabsPrimitive.Root
        data-slot="tabs"
        data-orientation={orientation}
        orientation={orientation}
        value={value}
        defaultValue={defaultValue}
        onValueChange={handleValueChange}
        className={cn("group/tabs flex gap-2 data-[orientation=horizontal]:flex-col", className)}
        {...props}
      />
    </TabsRootContext.Provider>
  )
}

const tabsListVariants = cva(
  "group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-[orientation=horizontal]/tabs:h-9 group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col data-[variant=line]:rounded-none",
  {
    variants: {
      variant: {
        default: "bg-muted",
        line: "gap-1 bg-transparent",
        segmented: "bg-muted/60 supports-backdrop-filter:backdrop-blur-md",
        glass:
          "relative overflow-hidden rounded-2xl p-1 group-data-[orientation=horizontal]/tabs:h-10 " +
          "bg-glass-regular/60 supports-[backdrop-filter]:bg-glass-regular/40 backdrop-blur-glass backdrop-saturate-150 " +
          "border border-white/15 dark:border-white/10 shadow-glass-sm",
      },
    },
    defaultVariants: { variant: "default" },
  }
)

function TabsList({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> & VariantProps<typeof tabsListVariants>) {
  const resolved: TabsVariant = variant ?? "default"
  return (
    <TabsListContext.Provider value={{ variant: resolved }}>
      <TabsPrimitive.List
        data-slot="tabs-list"
        data-variant={resolved}
        className={cn(tabsListVariants({ variant: resolved }), className)}
        {...props}
      />
    </TabsListContext.Provider>
  )
}

// Active-item lens for the glass variant. It is a real frosted pane: a
// theme-aware frost (rgb(--glass-regular)) so it stays light on light and dark
// on dark, mixed with a touch of the tint, plus a top shine and a soft lift.
// backdrop-blur (on the element's className) is what makes it read as glass in
// both modes rather than a flat translucent color.
const GLASS_PILL_STYLE: React.CSSProperties = {
  background:
    "color-mix(in oklch, var(--glass-tint, var(--primary)) 18%, rgb(var(--glass-regular) / 0.82))",
  boxShadow:
    "inset 0 1px 0 0 rgb(255 255 255 / 0.55), inset 0 0 0 0.5px rgb(255 255 255 / 0.15), 0 2px 8px -3px rgb(0 0 0 / 0.28)",
}

function TabsTrigger({
  className,
  value,
  children,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  const root = React.useContext(TabsRootContext)
  const { variant } = React.useContext(TabsListContext)
  const isGlass = variant === "glass"
  const isActive = isGlass && root != null && root.activeValue === value

  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      value={value}
      className={cn(
        "relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "group-data-[variant=default]/tabs-list:data-[state=active]:bg-background group-data-[variant=default]/tabs-list:data-[state=active]:shadow-sm data-[state=active]:text-foreground dark:group-data-[variant=default]/tabs-list:data-[state=active]:border-input dark:group-data-[variant=default]/tabs-list:data-[state=active]:bg-input/30",
        "group-data-[variant=segmented]/tabs-list:data-[state=active]:bg-background group-data-[variant=segmented]/tabs-list:data-[state=active]:shadow-xs group-data-[variant=segmented]/tabs-list:data-[state=active]:text-foreground",
        "group-data-[variant=glass]/tabs-list:z-10 group-data-[variant=glass]/tabs-list:rounded-xl group-data-[variant=glass]/tabs-list:font-semibold group-data-[variant=glass]/tabs-list:data-[state=active]:text-foreground",
        "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100",
        className
      )}
      {...props}
    >
      {isActive && root && (
        <motion.span
          layoutId={`tabs-glass-pill-${root.pillId}`}
          aria-hidden="true"
          className="absolute inset-0 rounded-xl border border-white/40 dark:border-white/15"
          style={GLASS_PILL_STYLE}
          initial={false}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
      <span className="relative z-10 inline-flex items-center justify-center gap-1.5">
        {children}
      </span>
    </TabsPrimitive.Trigger>
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 text-sm outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants }
