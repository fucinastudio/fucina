"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import Preview from "@/components/preview/preview";
import {
  //Input
  Input,
  //Button
  Button,
  //Textarea
  Textarea,
  //Label
  Label,
  //Form
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  //Toast
  toast,
} from "@fucina/ui";

const FormSchema = z.object({
  bio: z
    .string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    }),
});

const TextareaFormDemo = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("You submitted the following values:", {
      description: JSON.stringify(data, null, 2),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-10">
        <div className="space-y-6">
          <FormItem className="space-y-2">
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input value="Michael Scott" className="patch-input" />
            </FormControl>
            <FormMessage />
          </FormItem>
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Textarea placeholder="Once upon a time..." className="resize-none" {...field} />
                </FormControl>
                <FormDescription>
                  You can <span>@mention</span> other users and organizations.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export const TextareaPreview = () => (
  <Preview>
    <Textarea placeholder="Once upon a time..." />
  </Preview>
);

export const TextareaDisabled = () => (
  <Preview>
    <Textarea placeholder="Once upon a time..." disabled />
  </Preview>
);

export const TextareaWithText = () => (
  <Preview>
    <div className="grid w-full gap-3">
      <Label htmlFor="message">Bio</Label>
      <Textarea placeholder="Once upon a time..." id="message" />
      <span className="text-description text-md">You can @mention other users and organizations.</span>
    </div>
  </Preview>
);

export const TextareaWithForm = () => (
  <Preview>
    <TextareaFormDemo />
  </Preview>
);
