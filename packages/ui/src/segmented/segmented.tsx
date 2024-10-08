import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn, focusRing } from "@fucina/utils";

const Segmented = TabsPrimitive.Root;

const SegmentedList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn("bg-muted flex h-9 items-center justify-center rounded p-1", className)}
    {...props}
  />
));
SegmentedList.displayName = TabsPrimitive.List.displayName;

const SegmentedTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "text-description text-md hover:text data-[state=active]:text data-[state=active]:bg-item disabled:text-disabled disabled:stroke-icon-disabled flex h-full items-center justify-center gap-1 whitespace-nowrap rounded-sm px-3 py-1 font-medium transition-all disabled:pointer-events-none disabled:shadow-none data-[state=active]:shadow-sm [&>svg]:size-4",
      focusRing,
      className
    )}
    {...props}
  />
));
SegmentedTrigger.displayName = TabsPrimitive.Trigger.displayName;

const SegmentedContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn("text-md mt-2 p-3 outline-none focus-visible:rounded", focusRing, className)}
    {...props}
  />
));
SegmentedContent.displayName = TabsPrimitive.Content.displayName;

export { Segmented, SegmentedList, SegmentedTrigger, SegmentedContent };
