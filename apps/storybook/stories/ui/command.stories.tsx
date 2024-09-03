
import * as React from "react";
import { useState, useEffect } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { CommandSeparator } from "cmdk";
import { Calculator, Calendar, CreditCard, Settings, Smile, User } from "lucide-react";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@fucina/ui";

const meta: Meta<typeof Command> = {
  title: "Components/Command",
  component: Command,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: "Fast, composable, unstyled command menu for React.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Command>;

export const Default: Story = {
  render: () => (
    <Command className="border-default rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Calendar className="size-4" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <Smile className="size-4" />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <Calculator className="size-4" />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User className="size-4" />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard className="size-4" />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className="size-4" />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

export const Dialog: Story = {
  render: () => <CommandDialogDemo />,
  parameters: {
    layout: "centered",
  },
};

const CommandDialogDemo = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <p className="text-description text-sm">
        Press{" "}
        <kbd className="border-default bg-muted opacity-visible text-description pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border px-1 font-mono text-[10px] font-medium">
          <span className="text-sm">⌘</span>K
        </kbd>
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Calendar className="size-4" />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Smile className="size-4" />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <Calculator className="size-4" />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User className="size-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard className="size-4" />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings className="size-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};
