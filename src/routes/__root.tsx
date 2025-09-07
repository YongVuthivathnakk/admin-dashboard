import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'


const RootLayout = () => (
  <>
      <TanStackRouterDevtools position='bottom-right' />
      <Outlet />
  </>
)

export const Route = createRootRoute({ component: RootLayout })