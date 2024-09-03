"use client";

import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@fucina/ui";

const meta: Meta<typeof ResizablePanelGroup> = {
  title: "Components/Resizable",
  component: ResizablePanelGroup,
  tags: ["autodocs"],
  argTypes: {
    direction: { table: { disable: true } },
    autoSaveId: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    onLayout: { table: { disable: true } },
    disablePointerEventsDuringResize: { table: { disable: true } },
    storage: { table: { disable: true } },
    style: { table: { disable: true } },
    tagName: { table: { disable: true } },
    units: { table: { disable: true } },
  },
  parameters: {
    docs: {
      description: {
        component: "Accessible resizable panel groups and layouts with keyboard support.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof ResizablePanelGroup>;

export const Default: Story = {
  render: (args) => (
    <ResizablePanelGroup className="border-default w-full rounded-lg border" {...args}>
      <ResizablePanel defaultSize={50}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Two</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Three</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
  args: {
    direction: "horizontal",
  },
};

export const Vertical: Story = {
  render: (args) => (
    <ResizablePanelGroup className="border-default min-h-[200px] w-full rounded-lg border" {...args}>
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Header</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
  args: { direction: "vertical" },
};

export const Handle: Story = {
  render: (args) => (
    <ResizablePanelGroup className="border-default min-h-[200px] w-full rounded-lg border" {...args}>
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
  args: { direction: "horizontal" },
};
