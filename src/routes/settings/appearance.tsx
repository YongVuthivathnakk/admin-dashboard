import { DashboardLayout } from '@/layouts'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/settings/appearance')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <DashboardLayout>
      Appearance
    </DashboardLayout>
)
}
