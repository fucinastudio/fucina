import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";

import {
  Button,
  Label,
  Input,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@fucina/ui";

const meta: Meta<typeof Sheet> = {
  title: "Components/Sheet",
  component: Sheet,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Extends the Dialog component to display content that complements the main content of the screen.",
      },
    },
  },
};
export default meta;

type SheetCustomProps = {
  side?: "top" | "bottom" | "left" | "right";
};

type Story = StoryObj<SheetCustomProps>;

export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>Make changes to your profile here. Click save when youre done.</SheetDescription>
        </SheetHeader>
        <div className="gap-4 grid py-4">
          <div className="items-center gap-4 grid grid-cols-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Michael Scott" className="col-span-3" />
          </div>
          <div className="items-center gap-4 grid grid-cols-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@mscott" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
  argTypes: {
    side: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
      description: "Define the direction in which the sheet will open",
      table: {
        defaultValue: { summary: "right" },
        type: { summary: null },
      },
    },
  },
};
