"use client";

import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

import {
  //Button
  Button,
  //DropdownMenu
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSubMenu,
  DropdownMenuSubMenuContent,
  DropdownMenuSubMenuTrigger,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@fucina/ui";

type Checked = DropdownMenuCheckboxItemProps["checked"];

const DropdownMenuCheckboxesDemo = () => {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
          Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={showActivityBar} onCheckedChange={setShowActivityBar} disabled>
          Activity Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
          Panel
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const DropdownMenuRadioGroupDemo = () => {
  const [position, setPosition] = React.useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const meta: Meta<typeof DropdownMenu> = {
  title: "Components/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Displays a menu to the user — such as a set of actions or functions — triggered by a button.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  render: (args) => (
    <DropdownMenu {...args}>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem shortcut="⇧⌘P">
            <User />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem shortcut="⌘B">
            <CreditCard />
            <span>Billing</span>
          </DropdownMenuItem>
          <DropdownMenuItem shortcut="⌘S">
            <Settings />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuItem shortcut="⌘K">
            <Keyboard />
            <span>Keyboard shortcuts</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Users />
            <span>Team</span>
          </DropdownMenuItem>
          <DropdownMenuSubMenu>
            <DropdownMenuSubMenuTrigger>
              <UserPlus />
              <span>Invite users</span>
            </DropdownMenuSubMenuTrigger>
            <DropdownMenuSubMenuContent>
              <DropdownMenuItem>
                <Mail />
                <span>Email</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <MessageSquare />
                <span>Message</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <PlusCircle />
                <span>More...</span>
              </DropdownMenuItem>
            </DropdownMenuSubMenuContent>
          </DropdownMenuSubMenu>
          <DropdownMenuItem shortcut="⌘+T">
            <Plus />
            <span>New Team</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Github />
          <span>GitHub</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LifeBuoy />
          <span>Support</span>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <Cloud />
          <span>API</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem shortcut="⇧⌘Q">
          <LogOut />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  args: {},
};

export const Checkboxes: Story = {
  render: () => <DropdownMenuCheckboxesDemo />,
};

export const RadioGroup: Story = {
  render: () => <DropdownMenuRadioGroupDemo />,
};
