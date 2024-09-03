
import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { DownloadIcon, SearchIcon } from "lucide-react";

import { Button } from "@fucina/ui";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: "Define the text label displayed on the button.",
      table: {
        type: { summary: null },
      },
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "text", "link", "danger"],
      description: "Define the priority of the button",
      table: {
        defaultValue: { summary: "primary" },
        type: { summary: null },
      },
    },
    size: {
      control: "select",
      options: ["default", "small"],
      description: "Define the size of the button",
      table: {
        defaultValue: { summary: "primary" },
        type: { summary: null },
      },
    },
    icon: {
      control: "boolean",
      description: "Display an icon button",
      table: {
        defaultValue: { summary: false },
        type: { summary: null },
      },
    },
    isLoading: {
      control: "boolean",
      description:
        "When the button is loading",
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
  args: {
    title: "Button",
    variant: "primary",
    icon: false,
    asChild: false,
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Triggers an event or action. They let users know what will happen next.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: (args) => (
    <Button {...args} size={args.size} variant={args.variant}>
      {args.title}
    </Button>
  ),
  args: {
    title: "Primary",
    variant: "primary",
    size: "default",
  },
};

export const Secondary: Story = {
  render: (args) => (
    <Button {...args} size={args.size} variant={args.variant}>
      {args.title}
    </Button>
  ),
  args: {
    title: "Secondary",
    variant: "secondary",
    size: "default",
  },
  argTypes: {
    icon: { table: { disable: true } },
    asChild: { table: { disable: true } },
  },
};

export const Text: Story = {
  render: (args) => (
    <Button {...args} size={args.size} variant={args.variant}>
      {args.title}
    </Button>
  ),
  args: {
    title: "Text",
    variant: "text",
    size: "default",
  },
  argTypes: {
    icon: { table: { disable: true } },
    asChild: { table: { disable: true } },
  },
};

export const Link: Story = {
  render: (args) => (
    <Button {...args} size={args.size} variant={args.variant}>
      {args.title}
    </Button>
  ),
  args: {
    title: "Link",
    variant: "link",
    size: "default",
  },
  argTypes: {
    icon: { table: { disable: true } },
    asChild: { table: { disable: true } },
  },
};

export const Danger: Story = {
  render: (args) => (
    <Button {...args} size={args.size} variant={args.variant}>
      {args.title}
    </Button>
  ),
  args: {
    title: "Danger",
    variant: "danger",
    size: "default",
  },
  argTypes: {
    icon: { table: { disable: true } },
    asChild: { table: { disable: true } },
  },
};

export const WithIcon: Story = {
  render: (args) => (
    <Button variant={args.variant}>
      <DownloadIcon />
      Download
    </Button>
  ),
  args: {
    variant: "primary",
    size: "default",
  },
  argTypes: {
    title: { table: { disable: true } },
    icon: { table: { disable: true } },
    asChild: { table: { disable: true } },
  },
};

export const Icon: Story = {
  render: (args) => (
    <Button {...args} icon={true}>
      <SearchIcon />
      <span className="sr-only">search</span>
    </Button>
  ),
  args: {
    title: undefined,
    variant: "secondary",
    icon: true,
  },
  argTypes: {
    title: { table: { disable: true } },
    asChild: { table: { disable: true } },
  },
};

export const IsLoading: Story = {
  render: (args) => (
    <Button {...args} size={args.size} variant={args.variant}>
      <DownloadIcon />
      Download
    </Button>
  ),
  args: {
    isLoading: true,
    loadingText: "Wait a sec...",
    variant: "primary",
    size: "default",
  },
  argTypes: {
    title: { table: { disable: true } },
    icon: { table: { disable: true } },
    asChild: { table: { disable: true } },
  },
};
