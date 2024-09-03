import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Bold, Italic, Underline } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@fucina/ui";

const meta: Meta<typeof ToggleGroup> = {
  title: "Components/Toggle Group",
  component: ToggleGroup,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "radio",
      options: ["single", "multiple"],
      description: "Define whether a `single` or `multiple` items can be pressed at a time",
      table: {
        defaultValue: { summary: "multiple" },
        type: { summary: null },
      },
    },
    disabled: {
      control: "boolean",
      description: "Prevent user actions when certain conditions are not met",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: null },
      },
    },
    asChild: { table: { disable: true } },
  },
  args: {
    type: "multiple",
    disabled: false,
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A set of two-state buttons that can be toggled on or off.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof ToggleGroup>;

export const Default: Story = {
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="a">
        <Bold />
      </ToggleGroupItem>
      <ToggleGroupItem value="b">
        <Italic />
      </ToggleGroupItem>
      <ToggleGroupItem value="c">
        <Underline />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
  args: {
    type: "multiple",
  },
};

export const Small: Story = {
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="a">
        <Bold />
      </ToggleGroupItem>
      <ToggleGroupItem value="b">
        <Italic />
      </ToggleGroupItem>
      <ToggleGroupItem value="c">
        <Underline />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
  args: {
    type: "multiple",
    size: "small",
  },
};

export const Single: Story = {
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="a">
        <Bold />
      </ToggleGroupItem>
      <ToggleGroupItem value="b">
        <Italic />
      </ToggleGroupItem>
      <ToggleGroupItem value="c">
        <Underline />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
  args: {
    type: "single",
  },
};

export const Disabled: Story = {
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="a">
        <Bold />
      </ToggleGroupItem>
      <ToggleGroupItem value="b">
        <Italic />
      </ToggleGroupItem>
      <ToggleGroupItem value="c">
        <Underline />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
  args: {
    type: "single",
    disabled: true,
  },
};
