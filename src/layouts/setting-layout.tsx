import { SettingSidebar } from "@/components/setting-sidebar";
import { Separator } from "@/components/ui/separator";
import { SettingSidebarData } from "@/constants";
import React from "react";

export function SettingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-4 mx-2 sm:mx-6 text-foreground">
      <header className="pt-5">
        <h1 className="text-3xl md:text-4xl font-bold">Settings</h1>
        <p className="text-muted-foreground text-md md:text-lg mb-5">
          Manage your account settings and customize your workflow
        </p>
      </header>
      <Separator className="hidden sm:block" />
      <main className="sm:pt-5 lg:pt-10"> 
        <div className="flex flex-col gap-5 lg:flex-row lg:gap-15 ">
          <div className="flex-1/6">
            <SettingSidebar items={SettingSidebarData} />
          </div>
      <Separator className="block sm:hidden" />

          <div className="flex-5/6">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
