import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { FilePlus } from "lucide-react";

import { Button, Tooltip } from "@fucina/ui";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A floating, non-actionable label used to explain a user interface element or feature.",
      },
    },
  },
  argTypes: {
    side: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
      description: "Define the position of the tooltip",
      table: {
        defaultValue: { summary: "top" },
        type: { summary: null },
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <Button variant="secondary" icon={true}>
        <FilePlus />
        <span className="sr-only">Add to library</span>
      </Button>
    </Tooltip>
  ),
  args: {
    content: "Add to library",
    side: "top",
  },
};

export const Side: Story = {
  render: () => (
    <div className="my-6 grid justify-items-center gap-4 sm:flex">
      <Tooltip content="Add to library" side="top">
        <Button variant="secondary" icon={true}>
          <FilePlus />
          <span className="sr-only">Add to library</span>
        </Button>
      </Tooltip>
      <Tooltip content="Add to library" side="bottom">
        <Button variant="secondary" icon={true}>
          <FilePlus />
          <span className="sr-only">Add to library</span>
        </Button>
      </Tooltip>
      <Tooltip content="Add to library" side="right">
        <Button variant="secondary" icon={true}>
          <FilePlus />
          <span className="sr-only">Add to library</span>
        </Button>
      </Tooltip>
      <Tooltip content="Add to library" side="left">
        <Button variant="secondary" icon={true}>
          <FilePlus />
          <span className="sr-only">Add to library</span>
        </Button>
      </Tooltip>
    </div>
  ),
  argTypes: {
    side: { table: { disable: true } },
  },
};
