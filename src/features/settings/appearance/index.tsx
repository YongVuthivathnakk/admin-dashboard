import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { DashboardLayout, SettingLayout } from "@/layouts";
import { AppearanceForm } from "./appearance-form";

export const SettingAppearance = () => {

  return (
    <DashboardLayout>
      <SettingLayout>
        <AppearanceForm/>
      </SettingLayout>
    </DashboardLayout>
  );
};
