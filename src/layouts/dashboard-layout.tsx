import React, { useState } from 'react'

import { AppSidebar } from '@/components/app-sidebar'
import { Separator } from '@/components/ui/separator'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { Outlet } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

import { BreadcrumbHandler } from '@/features/breadcrumb-handler'


export function DashboardLayout({
    children
}:{children?: React.ReactNode}) {

  return (
    <SidebarProvider className='text-foreground'>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 justify-between pr-10 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className='p-2' />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <BreadcrumbHandler />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {children ?? <Outlet />}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
