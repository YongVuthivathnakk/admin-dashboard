import { ChevronRight, type LucideIcon } from "lucide-react"
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from "../ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible"
import { Link, useRouterState } from "@tanstack/react-router"
import { useEffect, useState } from "react"

export const NavOther = ({
    items
}: {
    items: {
        title: string
        icon?: LucideIcon
        items?: {
            title: string
            url: string
            icon?: LucideIcon
        }[]
    }[]
}) => {
    const routerState = useRouterState();
    const currentPathname = routerState.location.pathname;
    const [open, setOpen] = useState(false);


    useEffect(() => {
        const haveActiveSubItems = items.some(item => item.items?.some(subItem => subItem.url === currentPathname));
        if(haveActiveSubItems) {
            setOpen(true);
        }
    }, [currentPathname, items])

    return (
        <SidebarGroup>
            <SidebarGroupLabel>Others</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) => {
                    return (
                        <Collapsible
                            key={item.title}
                            asChild
                            open={open}
                            className="group/collapsible"
                            onOpenChange={setOpen}
                        >
                            <SidebarMenuItem>
                                <CollapsibleTrigger asChild >
                                    <SidebarMenuButton tooltip={item.title}>
                                        {item.icon && <item.icon />}
                                        <span>{item.title}</span>
                                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                    </SidebarMenuButton>
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                    <SidebarMenuSub>
                                        {item.items?.map((subItem) => {
                                            const isActive = currentPathname === subItem.url;
                                            return (
                                                <SidebarMenuSubItem key={subItem.title}>
                                                    <SidebarMenuSubButton asChild isActive={isActive} className={`${isActive ? "font-semibold" : ""}`}>
                                                        <Link to={subItem.url}>
                                                        {subItem.icon && <subItem.icon />}
                                                            <span>{subItem.title}</span>
                                                        </Link>
                                                    </SidebarMenuSubButton>
                                                </SidebarMenuSubItem>
                                            )
                                        })}
                                    </SidebarMenuSub>
                                </CollapsibleContent>
                            </SidebarMenuItem>
                        </Collapsible>
                    )
                }

                )}
            </SidebarMenu>
        </SidebarGroup>
    )
}
