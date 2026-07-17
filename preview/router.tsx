import { createRootRoute, createRoute, createRouter, Outlet } from "@tanstack/react-router"
import { HomePage } from "./pages/HomePage"
import { DocsLayout } from "./docs/DocsLayout"
import { GettingStarted } from "./docs/GettingStarted"
import { ComponentDocPage } from "./docs/ComponentDocPage"
import { McpPage } from "./docs/McpPage"
import { DesignPage } from "./docs/DesignPage"
import { ThemingPage } from "./docs/ThemingPage"

export const rootRoute = createRootRoute({ component: () => <Outlet /> })

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
})

export const docsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "docs",
  component: DocsLayout,
})

const docsIndexRoute = createRoute({
  getParentRoute: () => docsRoute,
  path: "/",
  component: GettingStarted,
})

const componentRoute = createRoute({
  getParentRoute: () => docsRoute,
  path: "components/$slug",
  component: ComponentDocPage,
})

const mcpRoute = createRoute({
  getParentRoute: () => docsRoute,
  path: "mcp",
  component: McpPage,
})

const designRoute = createRoute({
  getParentRoute: () => docsRoute,
  path: "design",
  component: DesignPage,
})

const themingRoute = createRoute({
  getParentRoute: () => docsRoute,
  path: "theming",
  component: ThemingPage,
})

const routeTree = rootRoute.addChildren([
  homeRoute,
  docsRoute.addChildren([docsIndexRoute, mcpRoute, designRoute, themingRoute, componentRoute]),
])

export const router = createRouter({ routeTree })

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}
