"use client";

import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  //Form
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  //Button
  Button,
  //Label
  Label,
  //RadioGroup
  RadioGroup,
  RadioGroupItem,
  //Toast
  ToastProvider,
  toast,
} from "@fucina/ui";

const FormSchema = z.object({
  type: z.enum(["all", "mentions", "none"], {
    required_error: "You need to select a notification type.",
  }),
});

const RadioGroupFormDemo = () => {
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Notify me about...</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1">
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="all" />
                    </FormControl>
                    <FormLabel className="font-normal">All new messages</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="mentions" />
                    </FormControl>
                    <FormLabel className="font-normal">Direct messages and mentions</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="none" />
                    </FormControl>
                    <FormLabel className="font-normal">Nothing</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      control: "select",
      options: ["default", "comfortable", "compact"],
      description: "The value of the radio item that should be checked when initially rendered.",
      table: {
        type: { summary: null },
      },
    },
    asChild: {
      control: "boolean",
      description:
        "Change the default rendered element for the one passed as a child, merging their props and behavior.",
      table: {
        defaultValue: { summary: false },
        type: { summary: null },
      },
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  ),
  args: {
    defaultValue: "comfortable",
  },
};

export const WithForm: Story = {
  render: (args) => (
    <div className="mx-auto grid gap-3">
      <RadioGroupFormDemo {...args} />
      <ToastProvider />
    </div>
  ),
  args: {},
  argTypes: {
    defaultValue: { table: { disable: true } },
  },
};
