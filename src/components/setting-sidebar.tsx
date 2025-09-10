import type { LucideIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useRouterState } from "@tanstack/react-router";

export const SettingSidebar = ({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
  }[];
}) => {
  const routerState = useRouterState();
  const currentPathname = routerState.location.pathname;

  return (
    <div className="w-[200px] flex flex-col gap-2">
      {items.map((item) => {
        let isActive = currentPathname === item.url;
        return (
          <Button
            key={item.title}
            variant={"ghost"}
            asChild
            className={`
            w-full flex justify-start
            ${
              isActive
                ? "bg-accent/50 font-semibold"
                : "bg-background font-normal"
            }
          `}
          >
            <Link to={item.url}>
              {item.icon && <item.icon />}
              <span>{item.title}</span>
            </Link>
          </Button>
        );
      })}
    </div>
  );
};
