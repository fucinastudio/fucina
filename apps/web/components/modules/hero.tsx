import React from "react";
import Link from "next/link";

import { Tag, Button } from "@fucina/ui";
import { cn, focusRing } from "@fucina/utils";
import { GridPattern } from "@/components/grid-pattern";

export default function Hero() {
  return (
    <section id="hero" className="relative z-20 w-screen bg-gradient-to-b from-white/0 to-fuchsia-600/[0.07]">
      <div className="relative z-20 mx-auto grid w-full max-w-screen-lg justify-items-center px-6 pb-56 pt-48 sm:px-6 sm:pb-64 sm:pt-56">
        <Link href="https://feely.so" className={cn("rounded-full", focusRing)}>
          <Tag variant="brand" className="text-md rounded-full">
            🔥 Feely out now
          </Tag>
        </Link>
        <div className="mt-6 grid max-w-screen-md justify-items-center gap-4 text-center sm:mt-8 sm:gap-6">
          <h1 className="font-brand text-6xl font-medium sm:text-8xl">
            Open source <br />
            <span className="brand-gradient">product foundry</span>
          </h1>
          <p className="text-description max-w-screen-sm text-lg">
            Our mission is to simplify product development by creating tools that help early-stage companies
            launch quickly.
          </p>
        </div>
        <div className="mt-10">
          <Button asChild className="font-brand text-lg font-medium">
            <Link href="https://feely.so">Start with Feely</Link>
          </Button>
        </div>
      </div>
      <GridPattern
        width={32}
        height={32}
        x={-1}
        y={-1}
        strokeDasharray={"4 4"}
        className={cn("[mask-image:radial-gradient(1024px_circle_at_center,white,transparent)]")}
      />
    </section>
  );
}
