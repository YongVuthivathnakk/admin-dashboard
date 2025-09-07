"use client"

import * as React from "react"

import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { SidebarData } from "@/constants"
import NavGeneral from "./navigation/nav-general"
import { NavOther } from "./navigation/nav-other"
import { SearchForm } from "./ui/search-form"

// This is sample data.


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={SidebarData.teams} />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        <NavGeneral items={SidebarData.navGeneral} />
        <NavOther items={SidebarData.navOther}></NavOther>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={SidebarData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
