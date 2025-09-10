import { DashboardLayout, SettingLayout } from "@/layouts";
import { AccountForm } from "./account-form";

export const SettingAccount = () => {
  return (
    <DashboardLayout>
      <SettingLayout>
        <AccountForm />
      </SettingLayout>
    </DashboardLayout>
  );
};
