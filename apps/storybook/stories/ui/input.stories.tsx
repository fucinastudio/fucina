"use client";

import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  //Input
  Input,
  //Button
  Button,
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
  ToastProvider,
  toast,
} from "@fucina/ui";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const InputFormDemo = (args: any) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("You submitted the following values:", {
      description: (
        <pre className="border-default bg-subtle mt-2 p-4 border rounded w-[340px]">
          <code className="text">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-[340px]">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input type={args.type} placeholder={args.placeholder} {...field} />
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

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "password", "email", "number", "date", "time", "url", "search", "tel", "file"],
      description: "Define how the input element behaves and appears in the form.",
      table: {
        defaultValue: { summary: "text" },
        type: { summary: null },
      },
    },
    placeholder: {
      description: "Guide users in filling the input field",
    },
    disabled: {
      control: "boolean",
      description: "Prevent user actions when certain conditions are not met.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: null },
      },
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A basic widget for getting the user input in a text field.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args) => <Input {...args} className="w-[340px]" />,
  args: {
    type: "email",
    placeholder: "Email",
    disabled: false,
  },
};

export const File: Story = {
  render: (args) => <Input {...args} className="w-[340px]" />,
  args: {
    type: "file",
    disabled: false,
  },
};

export const Disabled: Story = {
  render: (args) => <Input {...args} className="w-[340px]" />,
  args: { ...Default.args, disabled: true },
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="items-center gap-2 grid w-[340px] max-w-sm">
      <Label htmlFor="email">{args.placeholder}</Label>
      <Input {...args} id="email" />
    </div>
  ),
  args: { ...Default.args },
};

export const WithButton: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2 w-[340px] max-w-sm">
      <Input {...args} />
      <Button type="submit">Subscribe</Button>
    </div>
  ),
  args: { ...Default.args },
};

export const WithForm: Story = {
  render: (args) => (
    <div className="gap-3 grid w-full">
      <InputFormDemo {...args} />
      <ToastProvider />
    </div>
  ),
  args: { ...Default.args },
  argTypes: {
    disabled: { table: { disable: true } },
  },
};
