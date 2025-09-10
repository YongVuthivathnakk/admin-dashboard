import { SettingSidebar } from "@/components/setting-sidebar";
import { Separator } from "@/components/ui/separator";
import { SettingSidebarData } from "@/constants";
import React from "react";

export function SettingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-w-[1000px] mx-auto text-foreground">
      <header className="pt-5">
        <h1 className="text-2xl md:text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground text-md md:text-lg mb-5">
          Manage your account settings and customize your workflow
        </p>
      </header>
      <Separator />
      <main className="pt-10">
        <div className="flex gap-15 sm:gap-20">
          <div className="flex-1/6">
            <SettingSidebar items={SettingSidebarData} />
          </div>
          <div className="flex-5/6">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
