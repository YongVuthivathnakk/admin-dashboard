import { Check, ChevronDown, type LucideIcon } from "lucide-react";
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
import { useEffect, useState } from "react";

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
  return (
    <>
      <div className="block sm:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="flex w-[190px] text-md justify-between"
              variant={"outline"}
            >
              {page}
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className=" w-[190px]">
            {items.map((item) => {
              let isActive = currentPathname === item.url;
              useEffect(() => {
                if (isActive) {
                  setPage(item.title);
                }
              });
              return (
                <DropdownMenuItem>
                  <Button
                    key={item.title}
                    variant={"ghost"}
                    asChild
                    className={`w-full justify-between`}
                  >
                    <Link className="flex gap-5" to={item.url}>
                      <div className="flex gap-3 justify-center items-center text-md">
                        {item.icon && <item.icon className="text-foreground" />}
                        <span>{item.title}</span>
                      </div>
                      <Check
                        className={`
                        ${isActive ? "block" : "hidden"}
                        `}
                      />
                    </Link>
                  </Button>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="hidden w-[125px] md:w-[200px] sm:flex flex-row lg:flex-col gap-2">
        {items.map((item) => {
          let isActive = currentPathname === item.url;
          return (
            <Button
              key={item.title}
              variant={"ghost"}
              asChild
              className={`
            w-full flex justify-center md:justify-start
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
    </>
  );
};
