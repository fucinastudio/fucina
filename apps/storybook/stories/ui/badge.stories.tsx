
import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Activity, AlertTriangle, Info, XCircle } from "lucide-react";

import { Badge } from "@fucina/ui";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  args: {
    variant: "default",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "brand", "danger", "warning"],
      description: "Define the type of message communicated by the badge",
      table: {
        defaultValue: { summary: "default" },
        type: { summary: null },
      },
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Visual indicator for states or numeric values such as tallies and scores.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  render: (args) => (
    <div className="sm:flex justify-items-center gap-3 grid">
      <Badge {...args}>
        <Activity />
        Active
      </Badge>
      <Badge {...args}>Active</Badge>
      <Badge {...args}>
        <Activity />
        <span className="sr-only">Active</span>
      </Badge>
      <Badge {...args}>7</Badge>
    </div>
  ),
  args: {
    variant: "default",
  },
};

export const Brand: Story = {
  render: (args) => (
    <div className="sm:flex justify-items-center gap-3 grid">
      <Badge {...args}>
        <Info />
        Information
      </Badge>
      <Badge {...args}>Information</Badge>
      <Badge {...args}>
        <Info />
        <span className="sr-only">Information</span>
      </Badge>
      <Badge {...args}>7</Badge>
    </div>
  ),
  args: {
    variant: "brand",
  },
};

export const Danger: Story = {
  render: (args) => (
    <div className="sm:flex justify-items-center gap-3 grid">
      <Badge {...args}>
        <XCircle />
        Error
      </Badge>
      <Badge {...args}>Error</Badge>
      <Badge {...args}>
        <XCircle />
        <span className="sr-only">Error</span>
      </Badge>
      <Badge {...args}>7</Badge>
    </div>
  ),
  args: {
    variant: "danger",
  },
};

export const Warning: Story = {
  render: (args) => (
    <div className="sm:flex justify-items-center gap-3 grid">
      <Badge {...args}>
        <AlertTriangle />
        Caution
      </Badge>
      <Badge {...args}>Caution</Badge>
      <Badge {...args}>
        <AlertTriangle />
        <span className="sr-only">Caution</span>
      </Badge>
      <Badge {...args}>7</Badge>
    </div>
  ),
  args: {
    variant: "warning",
  },
};
