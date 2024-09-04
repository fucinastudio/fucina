import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Lightbulb, Map, Users } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  Separator,
} from "@fucina/ui";
import Link from "next/link";

const meta: Meta<typeof NavigationMenu> = {
  title: "Components/NavigationMenu",
  component: NavigationMenu,
  tags: ["autodocs"],
  argTypes: {
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
    layout: "centered",
    docs: {
      description: {
        component: "A collection of links for navigating websites.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof NavigationMenu>;

export const Default: Story = {
  render: (args) => (
    <NavigationMenu {...args}>
      <NavigationMenuList orientation="horizontal">
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink active={true}>
              <Lightbulb />
              Ideas
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink>
              <Map />
              Roadmap
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink>
              <Users />
              Community
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
  args: {
    orientation: "horizontal",
  },
};

export const Vertical: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList orientation="vertical">
        <NavigationMenuItem className="w-full">
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink active={true} className="w-full justify-start">
              <Lightbulb />
              Ideas
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="w-full">
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className="w-full justify-start">
              <Map />
              Roadmap
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="w-full">
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className="w-full justify-start">
              <Users />
              Community
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

export const Small: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink size="small" active={true}>
                <Lightbulb />
                Ideas
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink size="small">
                <Map />
                Roadmap
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink size="small">
                <Users />
                Community
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Separator />
      <NavigationMenu>
        <NavigationMenuList orientation="vertical">
          <NavigationMenuItem className="w-full">
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink size="small" className="w-full justify-start" active={true}>
                <Lightbulb />
                Ideas
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="w-full">
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink size="small" className="w-full justify-start">
                <Map />
                Roadmap
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="w-full">
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink size="small" className="w-full justify-start">
                <Users />
                Community
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  ),
};
