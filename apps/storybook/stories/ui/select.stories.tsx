"use client";

import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";

import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectGroupLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  ToastProvider,
  toast,
} from "@fucina/ui";

const FormSchema = z.object({
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
});

const SelectForm = () => {
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                You can manage email addresses in your <Link href="/examples/forms">email settings</Link>.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Displays a list of options for the user to pick from—triggered by a button.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectGroupLabel>Fruits</SelectGroupLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
  args: {},
};

export const Scrollable: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectGroupLabel>Fruits</SelectGroupLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectGroupLabel>Vegetables</SelectGroupLabel>
          <SelectItem value="aubergine">Aubergine</SelectItem>
          <SelectItem value="broccoli">Broccoli</SelectItem>
          <SelectItem value="carrot" disabled>
            Carrot
          </SelectItem>
          <SelectItem value="courgette">Courgette</SelectItem>
          <SelectItem value="leek">Leek</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectGroupLabel>Meat</SelectGroupLabel>
          <SelectItem value="beef">Beef</SelectItem>
          <SelectItem value="chicken">Chicken</SelectItem>
          <SelectItem value="lamb">Lamb</SelectItem>
          <SelectItem value="pork">Pork</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
  args: {},
};

export const WithForm: Story = {
  render: () => (
    <div className="mx-auto grid w-[460px] gap-3">
      <SelectForm />
      <ToastProvider />
    </div>
  ),
  args: {},
};
