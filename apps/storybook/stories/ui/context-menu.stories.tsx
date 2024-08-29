
import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuSubMenu,
  ContextMenuSubMenuContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@fucina/ui";

const meta: Meta<typeof ContextMenu> = {
  title: "Components/ContextMenu",
  component: ContextMenu,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Displays a menu to the user — such as a set of actions or functions — triggered by a button.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof ContextMenu>;

export const Default: Story = {
  render: (args) => (
    <ContextMenu {...args}>
      <ContextMenuTrigger className="flex justify-center items-center border-default border border-dashed rounded w-[320px] h-[160px] text-md">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem shortcut="⌘[">Back</ContextMenuItem>
        <ContextMenuItem disabled shortcut="⌘]">
          Forward
        </ContextMenuItem>
        <ContextMenuItem shortcut="⌘R">Reload</ContextMenuItem>
        <ContextMenuSubMenu>
          <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
          <ContextMenuSubMenuContent className="w-48">
            <ContextMenuItem shortcut="⇧⌘S">Save Page As...</ContextMenuItem>
            <ContextMenuItem>Create Shortcut...</ContextMenuItem>
            <ContextMenuItem>Name Window...</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Developer Tools</ContextMenuItem>
          </ContextMenuSubMenuContent>
        </ContextMenuSubMenu>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem checked shortcut="⌘⇧B">
          Show Bookmarks Bar
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value="michael">
          <ContextMenuLabel>People</ContextMenuLabel>
          <ContextMenuRadioItem value="michael">Michael Scott</ContextMenuRadioItem>
          <ContextMenuRadioItem value="dwight">Dwight Schrute</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  ),
  args: {},
};
