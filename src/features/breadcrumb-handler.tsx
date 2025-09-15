import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link, useRouterState } from "@tanstack/react-router";

export const BreadcrumbHandler = () => {
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;
  const pathnames = pathname.split("/").filter(Boolean); // store the pathname in the array list

  return (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink asChild>
              <Link to="/" className={`${pathname === "/" && "text-foreground"}`} >Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {pathnames.map((value, index) => {
            const to = "/" + pathnames.slice(0, index + 1).join("/");
            const label = value.charAt(0).toUpperCase() + value.slice(1);
            const isLast = index === pathnames.length - 1;

            return (
              <div key={to} className="flex items-center">
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {isLast ? (
                    // Last breadcrumb: not clickable
                    <span className="text-foreground">{label}</span>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link to={to}>{label}</Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </div>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
  );
};
