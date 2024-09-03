import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "@fucina/utils";

const badgeVariants = tv({
  base: cn(
    "flex h-5 min-w-5 items-center justify-center gap-x-1 whitespace-nowrap rounded-full px-1.5 text-sm font-medium [&>svg]:size-[14px]"
  ),
  variants: {
    variant: {
      default: ["bg-inverse text-inverse"],
      brand: ["bg-brand text-brand-inverse"],
      danger: ["bg-danger text-danger-inverse"],
      warning: ["bg-warning text-warning-inverse"],
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface BadgeProps extends React.ComponentPropsWithoutRef<"span">, VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, ...props }: BadgeProps, forwardedRef) => {
    return (
      <span
        ref={forwardedRef}
        className={cn(badgeVariants({ variant }), className)}
        tremor-id="tremor-raw"
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";

export { Badge, badgeVariants, type BadgeProps };
