import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Grid, List } from "lucide-react";

import { Segmented, SegmentedContent, SegmentedList, SegmentedTrigger } from "@fucina/ui";

const meta: Meta<typeof Segmented> = {
  title: "Components/Segmented",
  component: Segmented,
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      control: "radio",
      options: ["grid", "list"],
      description: "Define the segmented opened by default",
      table: {
        type: { summary: null },
      },
    },
    asChild: { table: { disable: true } },
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Used to organize content by grouping similar information on the same area.",
      },
    },
  },
};
export default meta;

type TabsCustomProps = {
  defaultValue?: string;
  disabled?: boolean;
};

type Story = StoryObj<TabsCustomProps>;

export const Default: Story = {
  render: (args) => (
    <Segmented defaultValue={args.defaultValue}>
      <SegmentedList>
        <SegmentedTrigger value="grid">Grid</SegmentedTrigger>
        <SegmentedTrigger value="list" disabled={args.disabled}>
          List
        </SegmentedTrigger>
      </SegmentedList>
      <SegmentedContent value="grid" className="text-center">
        Grid view
      </SegmentedContent>
      <SegmentedContent value="list" className="text-center">
        List view
      </SegmentedContent>
    </Segmented>
  ),
  args: {
    defaultValue: "grid",
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Prevent user actions when certain conditions are not met.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: null },
      },
    },
  },
};

export const DefaultValue: Story = {
  render: (args) => (
    <Segmented defaultValue={args.defaultValue}>
      <SegmentedList>
        <SegmentedTrigger value="grid">Grid</SegmentedTrigger>
        <SegmentedTrigger value="list" disabled={args.disabled}>
          List
        </SegmentedTrigger>
      </SegmentedList>
      <SegmentedContent value="grid" className="text-center">
        Grid view
      </SegmentedContent>
      <SegmentedContent value="list" className="text-center">
        List view
      </SegmentedContent>
    </Segmented>
  ),
  args: {
    defaultValue: "list",
    disabled: false,
  },
};

export const Disabled: Story = {
  render: (args) => (
    <Segmented defaultValue={args.defaultValue}>
      <SegmentedList>
        <SegmentedTrigger value="grid">Grid</SegmentedTrigger>
        <SegmentedTrigger value="list" disabled={args.disabled}>
          List
        </SegmentedTrigger>
      </SegmentedList>
      <SegmentedContent value="grid" className="text-center">
        Grid view
      </SegmentedContent>
      <SegmentedContent value="list" className="text-center">
        List view
      </SegmentedContent>
    </Segmented>
  ),
  args: {
    defaultValue: "grid",
    disabled: true,
  },
};

export const WithIcon: Story = {
  render: (args) => (
    <Segmented defaultValue={args.defaultValue}>
      <SegmentedList>
        <SegmentedTrigger value="grid">
          <Grid />
        </SegmentedTrigger>
        <SegmentedTrigger value="list" disabled={args.disabled}>
          <List />
        </SegmentedTrigger>
      </SegmentedList>
      <SegmentedContent value="grid" className="text-center">
        Grid view
      </SegmentedContent>
      <SegmentedContent value="list" className="text-center">
        List view
      </SegmentedContent>
    </Segmented>
  ),
  args: {
    defaultValue: "grid",
    disabled: false,
  },
};
