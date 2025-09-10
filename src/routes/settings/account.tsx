import { DashboardLayout, SettingLayout } from '@/layouts'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/settings/account')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <DashboardLayout>
      <SettingLayout>
        Account
      </SettingLayout>
    </DashboardLayout>
  )
}
