import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Bold } from "lucide-react";

import { Toggle } from "@fucina/ui";

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Prevent user actions when certain conditions are not met.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: null },
      },
    },
    asChild: { table: { disable: true } },
  },
  args: {
    disabled: false,
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A two-state button that can be either on or off.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  render: (args) => (
    <Toggle {...args} aria-label="Toggle bold">
      <Bold />
    </Toggle>
  ),
  args: {
    disabled: false,
  },
};

export const Small: Story = {
  render: (args) => (
    <Toggle {...args} aria-label="Toggle bold">
      <Bold />
    </Toggle>
  ),
  args: {
    disabled: false,
    size: "small",
  },
};

export const WithText: Story = {
  render: (args) => (
    <Toggle {...args} aria-label="Toggle bold">
      <Bold />
      Bold
    </Toggle>
  ),
  args: {
    disabled: false,
  },
};

export const Disabled: Story = {
  render: (args) => (
    <Toggle {...args} aria-label="Toggle bold">
      <Bold />
    </Toggle>
  ),
  args: {
    disabled: true,
  },
  argTypes: {
    disabled: { table: { disable: true } },
  },
};
