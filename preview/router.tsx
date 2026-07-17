import { createRootRoute, createRoute, createRouter, Outlet } from "@tanstack/react-router"
import { HomePage } from "./pages/HomePage"
import { DocsLayout } from "./docs/DocsLayout"
import { GettingStarted } from "./docs/GettingStarted"

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

// Task 3 adiciona componentRoute como filha de docsRoute.
const routeTree = rootRoute.addChildren([
  homeRoute,
  docsRoute.addChildren([docsIndexRoute]),
])

export const router = createRouter({ routeTree })

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}
