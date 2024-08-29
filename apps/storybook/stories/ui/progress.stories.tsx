import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { Progress } from "@fucina/ui";

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "brand", "danger", "warning"],
      description: "Define the type of message communicated by the badge.",
      table: {
        defaultValue: { summary: "default" },
        type: { summary: null },
      },
    },
    value: {
      description: "The progress value.",
      table: {
        type: { summary: null },
      },
    },
  },
  args: {
    variant: "default",
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  render: (args) => <Progress {...args} className="w-[400px]" />,
  args: {
    variant: "default",
    value: 33,
  },
};

export const Brand: Story = {
  render: (args) => <Progress {...args} className="w-[400px]" />,
  args: {
    variant: "brand",
    value: 33,
  },
};

export const Danger: Story = {
  render: (args) => <Progress {...args} className="w-[400px]" />,
  args: {
    variant: "danger",
    value: 33,
  },
};

export const Warning: Story = {
  render: (args) => <Progress {...args} className="w-[400px]" />,
  args: {
    variant: "warning",
    value: 33,
  },
};
