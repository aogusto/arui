import { createRootRoute, createRoute, createRouter, Outlet } from "@tanstack/react-router"
import { HomePage } from "./pages/HomePage"

export const rootRoute = createRootRoute({ component: () => <Outlet /> })

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
})

// docsRoute e suas filhas são anexadas nas Tasks 2/3 via routeTree abaixo.
// Task 2 exporta docsRoute e docsChildren; aqui deixamos a home pronta.
const routeTree = rootRoute.addChildren([homeRoute])

export const router = createRouter({ routeTree })

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}
