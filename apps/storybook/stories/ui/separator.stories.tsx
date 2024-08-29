import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { Separator } from "@fucina/ui";

const meta: Meta<typeof Separator> = {
  title: "Components/Separator",
  component: Separator,
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "radio",
      options: ["horizontal", "vertical"],
      description: "Define the axis that will divide the separator",
      table: {
        defaultValue: { summary: "horizontal" },
        type: { summary: null },
      },
    },
    asChild: { table: { disable: true } },
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Visually or semantically separates content.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Separator>;

export const Default: Story = {
  render: (args) => (
    <div>
      <div className="space-y-1">
        <h4 className="text-lg-semibold">Feely Design System</h4>
        <p className="text-description text-md">Crafting inclusive experiences for everyone</p>
      </div>
      <Separator {...args} orientation="horizontal" className="my-4" />
      <div className="flex items-center space-x-4 h-6 text-md">
        <div>Blog</div>
        <Separator {...args} orientation="vertical" />
        <div>Docs</div>
        <Separator {...args} orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  ),
  args: {
    orientation: "horizontal",
  },
};

export const Horizontal: Story = {
  render: (args) => (
    <div>
      <h4 className="text-lg-semibold">Feely Design System</h4>
      <Separator {...args} className="my-4" />
      <p className="text-description text-md">Crafting inclusive experiences for everyone</p>
    </div>
  ),
  args: {
    orientation: "horizontal",
  },
  argTypes: {
    orientation: { table: { disable: true } },
  },
};

export const Vertical: Story = {
  render: (args) => (
    <div className="flex items-center space-x-4 h-6 text-md">
      <div>Blog</div>
      <Separator {...args} orientation="vertical" />
      <div>Docs</div>
      <Separator {...args} orientation="vertical" />
      <div>Source</div>
    </div>
  ),
  args: {
    orientation: "vertical",
  },
  argTypes: {
    orientation: { table: { disable: true } },
  },
};
