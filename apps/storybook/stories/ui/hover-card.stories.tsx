import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";

import {
  //Button
  Button,
  //Avatar
  Avatar,
  AvatarFallback,
  AvatarImage,
  //HoverCard
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@fucina/ui";

const meta: Meta<typeof HoverCard> = {
  title: "Components/HoverCard",
  component: HoverCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "For sighted users to preview content available behind a link.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof HoverCard>;

export const Base: Story = {
  render: (args) => (
    <HoverCard {...args}>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-md-semibold">@nextjs</h4>
            <p className="text-md">The React Framework – created and maintained by @vercel.</p>
            <div className="flex items-center pt-2">
              <span className="text-description text-sm">Joined December 2021</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
  args: {},
};
