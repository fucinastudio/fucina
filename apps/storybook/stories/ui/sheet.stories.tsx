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
  SheetBody,
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

type Story = StoryObj<typeof Sheet>;

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
        <SheetBody className="flex w-full flex-col items-start gap-4 py-4">
          <div className="flex w-full flex-col justify-start gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" value="Michael Scott" className="col-span-3" />
          </div>
          <div className="flex w-full flex-col justify-start gap-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" value="@mscott" className="col-span-3" />
          </div>
        </SheetBody>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="secondary">Cancel</Button>
          </SheetClose>
          <Button type="submit">Save changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
  argTypes: {},
};
