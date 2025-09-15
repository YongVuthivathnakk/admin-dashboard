import { DeleteDialog } from "@/components/delete-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  FileInput,
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
} from "@/components/ui/file-input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { showSubmittedData } from "@/lib/show-submited-data";
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogClose } from "@radix-ui/react-dialog";
import { CloudUpload, Paperclip } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z, { file, maxSize, multipleOf } from "zod";

const USER_INFO = {
  name: "shadcn",
  image: ""
};

const formSchema = z.object({
  image: z
    .array(z.instanceof(File))
    .nonempty({ message: "Please select a file to upload." })
    .max(1, { message: "Only one file can be uploaded." }),
});

export const AvatarForm = () => {
  const [open, setOpen] = useState(false);

  const dropZoneConfig = {
    maxFiles: 1,
    maxSize: 1024 * 1024 * 4,
    multiple: false,
  };

  const avatarFallback = USER_INFO.name!.charAt(0).toUpperCase();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema as any),
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    try {
      // >>> logic with data base  here <<<
      const file = values.image[0];
      showSubmittedData(file);
      setOpen(false);
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  };

  const handleDelete = () => {
    // >>> Logic here <<<
  }

  return (
    <div className="flex items-center gap-5 mt-5">
      <Avatar className="size-10 hover:opacity-75 transition ">
        <AvatarImage alt={USER_INFO.name} src={USER_INFO.image} />
        <AvatarFallback className="bg-foreground text-background text-xl">
          {avatarFallback}
        </AvatarFallback>
      </Avatar>
      <div className=" flex gap-4">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>Update Image</Button>
          </DialogTrigger>
          <DialogContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 max-w-3xl pt-5"
              >
                <DialogHeader>
                  <DialogTitle>Upload Image</DialogTitle>
                  <DialogDescription asChild>
                    <FormField
                      control={form.control}
                      name="image"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="pt-5">Select File *</FormLabel>
                          <FormControl>
                            <FileUploader
                              value={field.value || []}
                              onValueChange={field.onChange}
                              dropzoneOptions={dropZoneConfig}
                              className="relative bg-background rounded-lg p-2"
                            >
                              <FileInput
                                id="fileInput"
                                className="outline-dashed outline-1 outline-slate-500"
                              >
                                <div className="flex items-center justify-center flex-col p-8 w-full ">
                                  <CloudUpload className="text-gray-500 w-10 h-10" />
                                  <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-semibold">
                                      Click to upload
                                    </span>
                                    &nbsp; or drag and drop
                                  </p>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">
                                    SVG, PNG, JPG or GIF
                                  </p>
                                </div>
                              </FileInput>
                              <FileUploaderContent>
                                {field.value &&
                                  field.value.length > 0 &&
                                  field.value.map((file, i) => (
                                    <FileUploaderItem key={i} index={i}>
                                      <Paperclip className="h-4 w-4 stroke-current" />
                                      <span>{file.name}</span>
                                    </FileUploaderItem>
                                  ))}
                              </FileUploaderContent>
                            </FileUploader>
                          </FormControl>
                          <FormDescription>
                            Select a file to upload.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="button" variant={"outline"}>
                      Close
                    </Button>
                  </DialogClose>
                  <Button type="submit">Submit</Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
        <DeleteDialog onDelete={handleDelete}>
          <Button variant={"outline"}>
            Delete Image
          </Button>
        </DeleteDialog>
      </div>
    </div>
  );
};
