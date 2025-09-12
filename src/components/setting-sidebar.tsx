import { Check, ChevronDown, Home, type LucideIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useRouterState } from "@tanstack/react-router";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { act, useEffect, useState } from "react";

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
  const [page, setPage] = useState("");
  const [pageIcon, setPageIcon] = useState<LucideIcon>();

  useEffect(() => {
    const activeItem = items.find((item) => item.url === currentPathname);
    if (activeItem) {
      setPage(activeItem.title);
      setPageIcon(activeItem.icon);
    }
  }, [currentPathname, items]);

  const Icon = pageIcon;

  return (
    <>
      {/* Small screen */}
      <div className="block sm:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="flex w-[190px] text-lg font-normal justify-between"
              variant={"outline"}
            >
              <div className="flex font-normal gap-3 justify-center items-center">
                {Icon && <Icon />}
                {page}
              </div>
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className=" w-[190px]">
            {items.map((item) => {
              let isActive = currentPathname === item.url;
              useEffect(() => {
                if (isActive) {
                  setPage(item.title);
                  setPageIcon(item.icon);
                }
              });
              return (
                <DropdownMenuItem
                  key={item.title}
                  className={`${isActive && "bg-accent"
                    }`}
                  asChild >
                  <Link className="flex gap-5 w-full justify-between" to={item.url}>
                    <div className="flex gap-3 justify-center items-center text-lg">
                      {item.icon && <item.icon className="text-foreground" />}
                      <span>{item.title}</span>
                    </div>
                    <Check
                      className={`
                        ${isActive ? "block" : "hidden"}
                        `}
                    />
                  </Link>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>


      {/* Larget screen */}
      <div className="hidden flex-row gap-2 w-[125px] sm:flex lg:flex-col ">
        {items.map((item) => {
          let isActive = currentPathname === item.url;
          return (
            <Button
              key={item.title}
              variant={"ghost"}
              asChild
              className={`
            w-full flex justify-center md:justify-start
            ${isActive
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
    </>
  );
};
