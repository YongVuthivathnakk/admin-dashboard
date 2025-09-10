import { SettingAppearance } from "@/features/settings/appearance";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/settings/appearance")({
  component: SettingAppearance,
});
