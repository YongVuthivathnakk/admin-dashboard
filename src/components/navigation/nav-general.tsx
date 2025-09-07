

import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuAction, SidebarMenuButton, SidebarMenuItem, useSidebar } from '../ui/sidebar'
import { MoreHorizontal, Folder, Forward, Trash2, type LucideIcon } from 'lucide-react'
import { Link, useRouterState } from '@tanstack/react-router';

export default function NavGeneral({
  items,
}: {
  items: {
    name: string,
    url: string,
    icon: LucideIcon,
  }[]
}
) {
  const routerState = useRouterState();
  const currentPathname = routerState.location.pathname;
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>General</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const handleActive = () => {
            return item.url === currentPathname
          }
          return (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton asChild isActive={handleActive()}>
                <Link to={item.url}>
                  <item.icon />
                  <span>{item.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
