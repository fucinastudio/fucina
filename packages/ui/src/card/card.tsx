import React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@fucina/utils";

interface CardProps extends React.ComponentPropsWithoutRef<"div"> {
  asChild?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, asChild, ...props }, forwardedRef) => {
  const Component = asChild ? Slot : "div";
  return (
    <Component
      ref={forwardedRef}
      className={cn(
        // base
        "text-md relative w-full rounded-lg border p-6 text-left shadow-sm",
        // background color
        "bg-card",
        // border color
        "border-default",
        className
      )}
      {...props}
    />
  );
});

Card.displayName = "Card";

export { Card, type CardProps };
