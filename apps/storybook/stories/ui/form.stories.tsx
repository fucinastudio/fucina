import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  //Button
  Button,
  //Input
  Input,
  //Form
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  toast,
  ToastProvider,
} from "@fucina/ui";

const meta: Meta<typeof Form> = {
  title: "Components/Form",
  component: Form,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Allows users to input information.",
      },
    },
  },
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Form>;

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const ProfileForm = (args: Story["args"]) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    toast("Profile updated!");
    action("onSubmit")(values);
  }
  return (
    <Form {...args} {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-80 space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="username" {...field} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export const Base: Story = {
  render: (args) => (
    <>
      <ProfileForm {...args} />
      <ToastProvider />
    </>
  ),
  args: {},
};
