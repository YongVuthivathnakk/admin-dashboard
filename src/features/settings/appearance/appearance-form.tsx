import {useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { showSubmittedData } from "@/lib/show-submited-data";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const THEME_COLORS = [
  "default",
  "rose",
  "blue",
  "green",
  "orange",
  "red",
  "yellow",
  "violet",
];

const ThemeModeEnum = z.enum(["light", "dark", "system"]);

const ThemeColorEnum = z.enum([
  "default",
  "rose",
  "blue",
  "green",
  "orange",
  "red",
  "yellow",
  "violet",
]);

const AppearanceFormSchema = z.object({
  mode: ThemeModeEnum,
  color: ThemeColorEnum,
});

export const AppearanceForm = () => {
  const { setTheme, theme } = useTheme();

  const form = useForm<z.infer<typeof AppearanceFormSchema>>({
    resolver: zodResolver(AppearanceFormSchema as any),
    defaultValues: {
      mode: theme?.mode || "light",
      color: theme?.color || "default",
    },
  });


const onSubmit = (values: z.infer<typeof AppearanceFormSchema>) => {
    setTheme({ mode: values.mode, color: values.color });
    showSubmittedData(values)
  };

  return (
    <Form {...form}>
      <form className="flex flex-col" onSubmit={form.handleSubmit(onSubmit)}>
        <header className="mb-5 flex flex-col gap-1">
          <h3 className="text-lg font-semibold">Appearance</h3>
          <p className="text-md text-muted-foreground">
            Customization according to your preference
          </p>
        </header>
        <Separator />
        <main className="mt-5">
          <div className="flex flex-col">
            {/* Theme Color Selection */}
            <FormField
              control={form.control}
              name="color"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-md">Theme Color</FormLabel>
                  <FormDescription className="text-sm text-muted-foreground">
                    Choose the color theme for your dashboard.
                  </FormDescription>
                  <FormControl>
                       <ScrollArea className="h-[50px] w-[300px] rounded-md whitespace-nowrap">
                      <div className="w-full flex mt-2 justify-center items-center gap-2">
                        {THEME_COLORS.map((color) => (
                          <Button
                          key={color}
                          type="button"
                          variant={"link"}
                          onClick={() => field.onChange(color)}
                          className={`
                            capitalize text-md font-normal w-[70px] text-foreground  hover:font-medium transition-none 
                            ${field.value === color ? 'underline font-medium' : ''}
                            `}
                            >
                            {color}
                          </Button>
                        ))}
                      </div>
                       <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Separator />

            {/* Theme Mode Selection */}
            <FormField
              control={form.control}
              name="mode"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2 mt-5">
                  <FormLabel className="font-semibold text-md">Theme Mode</FormLabel>
                  <FormDescription className="text-sm text-muted-foreground">
                    Select between light and dark mode.
                  </FormDescription>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className="flex flex-row gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="light" id="light" />
                        <label htmlFor="light" className="cursor-pointer">
                          Light
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="dark" id="dark" />
                        <label htmlFor="dark" className="cursor-pointer">
                          Dark
                        </label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </main>
        <footer className="mt-10">
          <Button type="submit">Update Appearance</Button>
        </footer>
      </form>
    </Form>
  );
};
