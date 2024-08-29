
import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from "@fucina/utils";
import {
  //Button
  Button,
  //Calendar
  Calendar,
  //Form
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  //Popover
  Popover,
  PopoverContent,
  PopoverTrigger,
  //Toast
  ToastProvider,
  toast,
} from "@fucina/ui";
import { CalendarIcon } from "lucide-react";

const meta: Meta<typeof Calendar> = {
  title: "Components/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "An interactive calendar for date selection experiences.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Calendar>;

const FormSchema = z.object({
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
});

export const Default: Story = {
  args: {
    mode: "single",
    className: "rounded border border-default w-fit",
  },
  argTypes: {
    mode: { table: { disable: true } },
    className: { table: { disable: true } },
  },
};

export const CalendarForm: Story = {
  render: () => <ExampleCalendarForm />,
};

const ExampleCalendarForm = (args: Story["args"]) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
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
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date of birth</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"secondary"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-description"
                        )}>
                        {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                        <CalendarIcon className="opacity-disabled ml-auto" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="p-0 w-auto" align="start">
                    <Calendar
                      {...args}
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>Your date of birth is used to calculate your age.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      <ToastProvider />
    </>
  );
};
