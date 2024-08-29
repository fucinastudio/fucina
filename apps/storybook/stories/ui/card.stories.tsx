import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { BellRing, Check } from "lucide-react";

import {
  //Button
  Button,
  //Input
  Input,
  //Label
  Label,
  //Select
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  //Card
  Card,
  //Switch
  Switch,
} from "@fucina/ui";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Displays a card with header, content, and footer.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];

export const WithForm: Story = {
  render: (args) => (
    <Card {...args} className="w-[340px]">
      <div className="flex flex-col justify-center gap-1 pb-6">
        <h1 className="text-heading-subsection">Create project</h1>
        <p className="text-description">Deploy your new project in one-click.</p>
      </div>
      <div>
        <form>
          <div className="items-center gap-4 grid w-full">
            <div className="flex flex-col space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </div>
      <div className="flex justify-end items-center gap-2 pt-6">
        <Button variant="secondary">Cancel</Button>
        <Button>Deploy</Button>
      </div>
    </Card>
  ),
  args: {},
};

export const WithMapping: Story = {
  render: (args) => (
    <Card className="w-[420px]" {...args}>
      <div className="flex flex-col justify-center gap-1 pb-6">
        <h1 className="text-heading-subsection">Create project</h1>
        <p className="text-description">Deploy your new project in one-click.</p>
      </div>
      <div className="gap-4 grid">
        <div className="flex items-center space-x-4 border-default p-4 border rounded">
          <BellRing />
          <div className="flex-1 space-y-1">
            <p className="text-md-medium leading-none">Push Notifications</p>
            <p className="text-description text-md">Send notifications to device.</p>
          </div>
          <Switch />
        </div>
        <div className="p-4">
          {notifications.map((notification, index) => (
            <div key={index} className="items-start grid grid-cols-[25px_1fr] mb-2 last:mb-0 pb-4 last:pb-0">
              <span className="flex bg-brand rounded-full translate-y-1 size-2" />
              <div className="space-y-1">
                <p className="text-md-medium leading-none">{notification.title}</p>
                <p className="text-description text-md">{notification.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-6 w-full">
        <Button className="w-full">
          <Check /> Mark all as read
        </Button>
      </div>
    </Card>
  ),
  args: {},
};
