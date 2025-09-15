import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { toast } from "sonner";

export function showSubmittedData(
  data: unknown,
  title: string = "You submitted the following values:"
) {
  toast.message(title, {
    description: (
      <ScrollArea className="w-[320px]">
        <pre className="mt-2 rounded-md w-full bg-slate-950 p-4 overflow-hidden">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    ),
  });
}
