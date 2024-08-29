import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { User, Lock } from "lucide-react";

import {
  //Button
  Button,
  //Input
  Input,
  //Label
  Label,
  //Card
  Card,
  //Tabs
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@fucina/ui";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      control: "radio",
      options: ["account", "password"],
      description: "Define the tab opened by default",
      table: {
        type: { summary: null },
      },
    },
    asChild: { table: { disable: true } },
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
      },
    },
  },
};
export default meta;

type TabsCustomProps = {
  defaultValue?: string;
  disabled?: boolean;
};

type Story = StoryObj<TabsCustomProps>;

export const Default: Story = {
  render: (args) => (
    <Tabs defaultValue={args.defaultValue} className="max-w-[400px]">
      <TabsList className="w-full">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password" disabled={args.disabled}>
          Password
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="space-y-4 w-full">
        <div className="space-y-2 mt-2">
          <div className="space-y-2">
            <p className="text-heading-subsection">Account</p>
            <p className="text-description text-md">
              Make changes to your account here. Click save when you&apos;re done.
            </p>
          </div>
          <div className="gap-2 grid py-4">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Michael Scott" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@mscott" />
            </div>
          </div>
        </div>
        <div className="flex">
          <Button>Save</Button>
        </div>
      </TabsContent>
      <TabsContent value="password" className="space-y-4 w-full">
        <div className="space-y-2 mt-2">
          <div className="space-y-2">
            <p className="text-heading-subsection">Password</p>
            <p className="text-description text-md">
              Change your password here. After saving, you&apos;ll be logged out.
            </p>
          </div>
          <div className="gap-2 grid py-4">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </div>
        </div>
        <div className="flex">
          <Button>Save</Button>
        </div>
      </TabsContent>
    </Tabs>
  ),
  args: {
    defaultValue: "account",
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Prevent user actions when certain conditions are not met.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: null },
      },
    },
  },
};

export const DefaultValue: Story = {
  render: (args) => (
    <Tabs defaultValue={args.defaultValue} className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password" disabled={args.disabled}>
          Password
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">Make changes to your account here.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  ),
  args: {
    defaultValue: "password",
    disabled: false,
  },
};

export const Disabled: Story = {
  render: (args) => (
    <Tabs defaultValue={args.defaultValue} className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password" disabled={args.disabled}>
          Password
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">Make changes to your account here.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  ),
  args: {
    defaultValue: "account",
    disabled: true,
  },
};

export const WithIcon: Story = {
  render: (args) => (
    <Tabs defaultValue={args.defaultValue} className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">
          <User />
          Account
        </TabsTrigger>
        <TabsTrigger value="password" disabled={args.disabled}>
          <Lock />
          Password
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">Make changes to your account here.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  ),
  args: {
    defaultValue: "account",
    disabled: false,
  },
};

export const WithCard: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="w-full">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <div className="pb-6">
            <h3 className="text-heading-subsection">Account</h3>
            <p className="text-description">
              Make changes to your account here. Click save when you&apos;re done.
            </p>
          </div>
          <div className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Michael Scott" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@mscott" />
            </div>
          </div>
          <div>
            <Button>Save</Button>
          </div>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <div>
            <h3 className="text-heading-subsection">Password</h3>
            <p className="text-description">
              Change your password here. After saving, you&apos;ll be logged out.
            </p>
          </div>
          <div className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </div>
          <div>
            <Button>Save</Button>
          </div>
        </Card>
      </TabsContent>
    </Tabs>
  ),
  args: {
    defaultValue: "account",
  },
};
