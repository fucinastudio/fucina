"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import Preview from "@/components/preview/preview";
import { cn } from "@fucina/utils";
import {
  Button,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
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

const ComboboxDemo = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "placeholder:text-placeholder w-[240px] justify-between font-normal",
            value ? frameworks.find((framework) => framework.value === value)?.label : "text-placeholder"
          )}>
          {value ? frameworks.find((framework) => framework.value === value)?.label : "Select framework..."}
          <ChevronsUpDown className="stroke-icon ml-2 size-4 shrink-0 !stroke-2" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[240px] p-0">
        <Command>
          <CommandInput
            placeholder="Search framework..."
            className="!bg-item h-9 focus:!ring-0 focus:!ring-offset-0 focus:!ring-offset-transparent"
          />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {frameworks.map((framework) => (
              <CommandItem
                className="flex items-center justify-between gap-2"
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}>
                <span className={cn(value === framework.value ? "text-brand" : "")}>{framework.label}</span>
                <Check
                  className={cn(
                    "stroke-icon-brand ml-2 size-4",
                    value === framework.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export const ComboboxPreview = () => (
  <Preview>
    <ComboboxDemo />
  </Preview>
);
