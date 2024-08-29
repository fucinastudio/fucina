import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { Slider } from "@fucina/ui";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
  tags: ["autodocs"],
  args: {
    defaultValue: [25],
    max: 100,
    min: 0,
    step: 1,
    minStepsBetweenThumbs: 0,
    disabled: false,
  },
  argTypes: {
    defaultValue: {
      control: { type: "object", min: 1, max: 100, step: 1 },
      description: "Add multiple `values` to create a range slider.",
    },
    max: {
      control: { type: "number", min: 1, max: 10000, step: 1 },
      description: "Define the maximum value for the range.",
      table: {
        defaultValue: { summary: 100 },
        type: { summary: null },
      },
    },
    min: {
      control: { type: "number", min: 0, max: 10000, step: 1 },
      description: "Define the minimum value for the range.",
      table: {
        defaultValue: { summary: 0 },
        type: { summary: null },
      },
    },
    step: {
      control: { type: "number", min: 1, max: 10, step: 1 },
      description: "Define the stepping interval.",
      table: {
        defaultValue: { summary: 1 },
        type: { summary: null },
      },
    },
    minStepsBetweenThumbs: {
      control: { type: "number", min: 1, max: 10, step: 1 },
      description: "Avoid thumbs with equal values.",
      table: {
        defaultValue: { summary: 0 },
        type: { summary: null },
      },
    },
    disabled: {
      control: "boolean",
      description: "Prevent user actions when certain conditions are not met.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: null },
      },
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
  parameters: {
    docs: {
      description: {
        component: "An input where the user selects a value from within a given range.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: (args) => (
    <div className="flex justify-items-center items-center p-10 w-full h-40">
      <Slider {...args} />
    </div>
  ),
  args: {
    defaultValue: [25],
    max: 100,
    min: 0,
    step: 1,
    minStepsBetweenThumbs: 0,
    disabled: false,
  },
};

export const Range: Story = {
  render: (args) => (
    <div className="flex justify-items-center items-center p-10 w-full h-40">
      <Slider {...args} />
    </div>
  ),
  args: {
    defaultValue: [25, 75],
    max: 100,
    min: 0,
    step: 1,
    minStepsBetweenThumbs: 0,
    disabled: false,
  },
};

export const StepSize: Story = {
  render: (args) => (
    <div className="flex justify-items-center items-center p-10 w-full h-40">
      <Slider {...args} />
    </div>
  ),
  args: {
    defaultValue: [25],
    max: 100,
    min: 0,
    step: 10,
    minStepsBetweenThumbs: 0,
    disabled: false,
  },
};

export const PreventThumbOverlap: Story = {
  render: (args) => (
    <div className="flex justify-items-center items-center p-10 w-full h-40">
      <Slider {...args} />
    </div>
  ),
  args: {
    defaultValue: [25, 75],
    max: 100,
    min: 0,
    step: 10,
    minStepsBetweenThumbs: 1,
    disabled: false,
  },
};
