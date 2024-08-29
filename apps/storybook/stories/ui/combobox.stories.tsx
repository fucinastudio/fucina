"use client";

import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@fucina/utils";
import {
  //Button
  Button,
  //Command
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  //Popover
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@fucina/ui";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

const Combobox = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          role="combobox"
          aria-expanded={open}
          className="justify-between w-[240px]">
          {value ? frameworks.find((framework) => framework.value === value)?.label : "Select framework..."}
          <ChevronsUpDown className="opacity-disabled ml-2 shrink-0" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-[240px]">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {frameworks.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}>
                <Check
                  className={cn("mr-2", value === framework.value ? "opacity-visible" : "opacity-invisible")}
                />
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

const meta: Meta<typeof Combobox> = {
  title: "Components/Combobox",
  component: Combobox,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Autocomplete input and command palette with a list of suggestions.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Combobox>;

export const Default: Story = {
  render: () => <Combobox />,
  args: {},
};
