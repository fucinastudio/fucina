"use client";

import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  //Button
  Button,
  //Label
  Label,
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
  //Textare
  Textarea,
  //Toast
  ToastProvider,
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

const TextareaFormDemo = (args) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("You submitted the following values:", {
      description: JSON.stringify(data, null, 2),
    });
    action("onSubmit")(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-10">
        <div className="space-y-6">
          <FormItem className="space-y-3">
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input value="Micheal Scott" />
            </FormControl>
          </FormItem>
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Textarea placeholder={args.placeholder} className="resize-none" {...field} />
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

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      description: "Guide users in filling the textarea",
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
    docs: {
      description: {
        component: "A text area lets users enter long form text which spans over multiple lines.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  render: (args) => <Textarea {...args} />,
  args: {
    placeholder: "Once upon a time...",
    disabled: false,
  },
};

export const Disabled: Story = {
  render: (args) => <Textarea {...args} />,
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const WithError: Story = {
  render: (args) => <Textarea {...args} />,
  args: {
    ...Default.args,
    hasError: true,
    disabled: false,
  },
};

export const WithText: Story = {
  render: (args) => (
    <div className="grid w-full gap-3">
      <Label htmlFor="message">Bio</Label>
      <Textarea {...args} id="message" />
      <p className="text-description text-md">You can @mention other users and organizations.</p>
    </div>
  ),
  args: { ...Default.args },
};

export const WithForm: Story = {
  render: (args) => (
    <div className="grid w-full gap-3">
      <TextareaFormDemo {...args} />
      <ToastProvider />
    </div>
  ),
  args: { ...Default.args },
};
