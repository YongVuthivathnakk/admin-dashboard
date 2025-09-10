import { SettingProfile } from '@/features/settings/profile'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/settings/')({
  component: SettingProfile,
})

