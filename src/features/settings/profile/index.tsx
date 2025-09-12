import { DashboardLayout, SettingLayout } from "@/layouts";
import { ProfileForm } from "./profile-form";

export const SettingProfile = () => {
  return (
    <DashboardLayout>
      <SettingLayout>
        <ProfileForm />
      </SettingLayout>
    </DashboardLayout>
  );
};
