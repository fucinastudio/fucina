import React from "react";
import Link from "next/link";

import { Tag, Button } from "@fucina/ui";
import { cn, focusRing } from "@fucina/utils";
import { GridPattern } from "@/components/grid-pattern";
import { FadeText } from "@/components/text-fadeup";

export default function Hero() {
  return (
    <section id="hero" className="relative z-20 bg-gradient-to-b from-white/0 to-fuchsia-600/[0.07] w-screen">
      <div className="relative z-20 justify-items-center grid mx-auto px-6 sm:px-6 pt-48 sm:pt-56 pb-56 sm:pb-64 w-full max-w-screen-lg">
        <Link href="https://feely.so" className={cn("rounded-full", focusRing)}>
          <Tag variant="brand" className="rounded-full text-md">
            🔥 Feely out now
          </Tag>
        </Link>
        <div className="justify-items-center gap-4 sm:gap-6 grid mt-6 sm:mt-8 max-w-screen-md text-center">
          <FadeText
            className="font-brand font-medium text-6xl sm:text-8xl"
            direction="up"
            framerProps={{
              show: { transition: { delay: 0.2, duration: 0.8 } },
            }}
            text={
              <>
                Open source <br />
                <span className="brand-gradient">product foundry</span>
              </>
            }
          />
          <FadeText
            className="max-w-screen-sm text-description text-lg"
            direction="up"
            framerProps={{
              show: { transition: { delay: 0.4, duration: 0.8 } },
            }}
            text="Our mission is to simplify product development by creating tools that help early-stage companies
            launch quickly."
          />
        </div>
        <div className="mt-10">
          <Button asChild className="font-brand font-medium text-lg">
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
