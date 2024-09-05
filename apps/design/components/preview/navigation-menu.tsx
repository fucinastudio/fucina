import Link from "next/link";
import { Lightbulb, Map, Users } from "lucide-react";

import Preview from "@/components/preview/preview";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuItem,
  Separator,
} from "@fucina/ui";

export const NavigationMenuPreview = () => (
  <Preview>
    <NavigationMenu>
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
  </Preview>
);

export const NavigationMenuVertical = () => (
  <Preview>
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
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className="w-full justify-start">
              <Users />
              Community
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </Preview>
);

export const NavigationMenuSmall = () => (
  <Preview>
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
            <Link href="/" legacyBehavior passHref>
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
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink size="small" className="w-full justify-start">
                <Users />
                Community
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  </Preview>
);
