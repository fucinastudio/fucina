import React from "react";
import * as RadioGroupPrimitives from "@radix-ui/react-radio-group";

import { cn, focusRing } from "@fucina/utils";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitives.Root>
>(({ className, ...props }, forwardedRef) => {
  return <RadioGroupPrimitives.Root ref={forwardedRef} className={cn("grid gap-2", className)} {...props} />;
});

RadioGroup.displayName = "RadioGroup";

const RadioGroupIndicator = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitives.Indicator>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitives.Indicator>
>(({ className, ...props }, forwardedRef) => {
  return (
    <RadioGroupPrimitives.Indicator
      ref={forwardedRef}
      className={cn("flex items-center justify-center", className)}
      {...props}>
      <div
        className={cn(
          // base
          "size-1.5 shrink-0 rounded-full",
          // indicator
          "bg-white",
          // disabled
          "group-data-[disabled]:bg-neutral-disabled"
        )}
      />
    </RadioGroupPrimitives.Indicator>
  );
});

RadioGroupIndicator.displayName = "RadioGroupIndicator";

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitives.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitives.Item>
>(({ className, ...props }, forwardedRef) => {
  return (
    <RadioGroupPrimitives.Item
      ref={forwardedRef}
      className={cn(
        "group rounded-full relative flex size-4 appearance-none items-center justify-center outline-none",
        focusRing,
        className
        
      )}
      {...props}>
      <div
        className={cn(
          // base
          "flex size-4 shrink-0 items-center justify-center rounded-full border shadow-sm",
          // border color
          "border-item",
          // background color
          "bg-item",
          // checked
          "group-data-[state=checked]:border-0 group-data-[state=checked]:border-transparent group-data-[state=checked]:bg-brand",
          // disabled
          "group-data-[disabled]:border",
          "group-data-[disabled]:border-disabled group-data-[disabled]:bg-neutral-disabled group-data-[disabled]:text-disabled",
        )}>
        <RadioGroupIndicator />
      </div>
    </RadioGroupPrimitives.Item>
  );
});

RadioGroupItem.displayName = "RadioGroupItem";

export { RadioGroup, RadioGroupItem };
