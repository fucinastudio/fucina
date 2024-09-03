import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { Skeleton, Card } from "@fucina/ui";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  argTypes: {
    shape: {
      control: "radio",
      options: ["circle", "line"],
      description: "Represent the element that the skeleton is replacing",
      table: {
        type: { summary: null },
      },
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Use to show a placeholder while content is loading.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Circle: Story = {
  render: (args) => (
    <div className="flex h-24 w-80 items-center justify-center">
      <Skeleton {...args} />
    </div>
  ),
  args: {
    shape: "circle",
  },
};

export const Line: Story = {
  render: (args) => (
    <div className="flex h-24 w-80 items-center justify-center">
      <Skeleton {...args} />
    </div>
  ),
  args: {
    shape: "line",
  },
};

export const WithCard: Story = {
  render: () => (
    <Card className="mx-auto max-w-96">
      <div className="flex items-center space-x-4">
        <Skeleton shape="circle" />
        <div className="space-y-2">
          <Skeleton shape="line" className="w-60" />
          <Skeleton shape="line" className="w-48" />
        </div>
      </div>
    </Card>
  ),
  argTypes: {
    shape: { table: { disable: true } },
  },
};
