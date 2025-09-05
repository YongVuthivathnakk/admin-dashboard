import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/block')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/block"!</div>
}
