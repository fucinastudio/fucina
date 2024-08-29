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
};
export default meta;

type TooltipCustomProps = {
  type?: "outline" | "fill";
  side?: "top" | "bottom" | "left" | "right";
};

type Story = StoryObj<TooltipCustomProps>;

export const Default: Story = {
  render: (args) => (
    <Tooltip content="Add to library" side={args.side}>
      <div className="my-6">
        <Button variant="secondary" icon={true}>
          <FilePlus />
          <span className="sr-only">Add to library</span>
        </Button>
      </div>
    </Tooltip>
  ),
  args: {
    side: "top",
  },
  argTypes: {
    side: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
      table: {
        defaultValue: { summary: "top" },
        type: { summary: null },
      },
    },
  },
};

export const Side: Story = {
  render: () => (
    <div className="sm:flex justify-items-center gap-6 grid my-6">
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
