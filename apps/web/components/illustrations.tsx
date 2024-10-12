"use client";

import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

export const FirstIllustration = () => {
  const { resolvedTheme } = useTheme();
  let src;

  switch (resolvedTheme) {
    case "light":
      src = "/assets/feely-light.png";
      break;
    case "dark":
      src = "/assets/feely-dark.png";
      break;
    default:
      src = "/assets/feely-light.png";
      break;
  }
  return (
    <div className="relative size-full overflow-hidden">
      <div className="absolute left-0 top-0 size-full px-5 pt-5 sm:px-6 sm:pt-6 md:px-8 md:pt-8">
        <div className="border-default grid size-full gap-1 rounded-t-lg border border-b-0">
          <Image
            src={src}
            alt="Picture of the product"
            height={720}
            width={1400}
            className="mx-auto h-full rounded object-cover object-left-top"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};

export const SecondIllustration = () => {
  const { resolvedTheme } = useTheme();
  let src;

  switch (resolvedTheme) {
    case "light":
      src = "/assets/ds-light.png";
      break;
    case "dark":
      src = "/assets/ds-dark.png";
      break;
    default:
      src = "/assets/ds-light.png";
      break;
  }
  return (
    <div className="relative size-full overflow-hidden">
      <div className="absolute left-0 top-0 size-full px-5 pt-5 sm:px-6 sm:pt-6 md:px-8 md:pt-8">
        <div className="border-default grid size-full gap-1 rounded-t-lg border border-b-0">
          <Image
            src={src}
            alt="Picture of the product"
            height={1882}
            width={3582}
            className="mx-auto h-full rounded object-cover object-left-top"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};

export const ThirdIllustration = () => {
  return (
    <div className="relative size-full overflow-hidden">
      <div className="absolute left-0 top-0 size-full px-3 pt-3 sm:px-4 sm:pt-4 md:px-5 md:pt-5">
        <div className="border-default grid size-full gap-1 rounded-t-lg border border-b-0">
          <Image
            src="/assets/storybook.png"
            alt="Storybook cover"
            height={1880}
            width={3584}
            className="mx-auto h-full rounded object-cover object-left-top"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};
