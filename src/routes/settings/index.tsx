import { DashboardLayout } from '@/layouts'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/settings/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <DashboardLayout>
      Profile
    </DashboardLayout>
  )
}
