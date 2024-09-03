import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { TagIcon } from "lucide-react";

import { Tag } from "@fucina/ui";

const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["brand", "neutral", "red", "amber", "emerald", "teal", "cyan", "blue", "purple", "pink"],
      description: "Define the color of message communicated by the badge",
      table: {
        defaultValue: { summary: "blue" },
        type: { summary: null },
      },
    },
  },
  args: {
    variant: "brand",
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Displays an element for categorizing or markup.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Tag>;

export const Brand: Story = {
  render: (args) => (
    <Tag {...args}>
      <TagIcon />
      Umbrella
    </Tag>
  ),
  args: {
    variant: "brand",
  },
};

export const Neutral: Story = {
  render: (args) => (
    <Tag {...args}>
      <TagIcon />
      Umbrella
    </Tag>
  ),
  args: {
    variant: "neutral",
  },
};

export const Red: Story = {
  render: (args) => (
    <Tag {...args}>
      <TagIcon />
      Umbrella
    </Tag>
  ),
  args: {
    variant: "red",
  },
};

export const Amber: Story = {
  render: (args) => (
    <Tag {...args}>
      <TagIcon />
      Umbrella
    </Tag>
  ),
  args: {
    variant: "amber",
  },
};

export const Emerald: Story = {
  render: (args) => (
    <Tag {...args}>
      <TagIcon />
      Umbrella
    </Tag>
  ),
  args: {
    variant: "emerald",
  },
};

export const Teal: Story = {
  render: (args) => (
    <Tag {...args}>
      <TagIcon />
      Umbrella
    </Tag>
  ),
  args: {
    variant: "teal",
  },
};

export const Cyan: Story = {
  render: (args) => (
    <Tag {...args}>
      <TagIcon />
      Umbrella
    </Tag>
  ),
  args: {
    variant: "cyan",
  },
};

export const Blue: Story = {
  render: (args) => (
    <Tag {...args}>
      <TagIcon />
      Umbrella
    </Tag>
  ),
  args: {
    variant: "blue",
  },
};

export const Purple: Story = {
  render: (args) => (
    <Tag {...args}>
      <TagIcon />
      Umbrella
    </Tag>
  ),
  args: {
    variant: "purple",
  },
};

export const Pink: Story = {
  render: (args) => (
    <Tag {...args}>
      <TagIcon />
      Umbrella
    </Tag>
  ),
  args: {
    variant: "pink",
  },
};
