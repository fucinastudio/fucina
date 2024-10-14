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
    <div className="relative overflow-hidden group size-full">
      <div className="top-0 left-0 absolute px-5 sm:px-6 md:px-8 pt-5 sm:pt-6 md:pt-8 size-full">
        <div className="group-hover:scale-[1.02] gap-1 border-default grid border border-b-0 rounded-t-lg transition duration-300 overflow-hidden size-full">
          <Image
            src={src}
            alt="Picture of the product"
            height={720}
            width={1400}
            className="object-left-top mx-auto rounded h-full object-cover"
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
    <div className="relative overflow-hidden group size-full">
      <div className="top-0 left-0 absolute px-5 sm:px-6 md:px-8 pt-5 sm:pt-6 md:pt-8 size-full">
        <div className="group-hover:scale-[1.02] gap-1 border-default grid border border-b-0 rounded-t-lg transition duration-300 overflow-hidden size-full">
          <Image
            src={src}
            alt="Picture of the product"
            height={1882}
            width={3582}
            className="object-left-top mx-auto h-full object-cover"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};

export const ThirdIllustration = () => {
  return (
    <div className="relative overflow-hidden group size-full">
      <div className="top-0 left-0 absolute px-3 sm:px-4 md:px-5 pt-3 sm:pt-4 md:pt-5 size-full">
        <div className="group-hover:scale-[1.02] gap-1 border-default grid border border-b-0 rounded-t-lg transition duration-300 overflow-hidden size-full">
          <Image
            src="/assets/storybook.png"
            alt="Storybook cover"
            height={1880}
            width={3584}
            className="object-left-top mx-auto h-full object-cover"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};

export const FourthIllustration = () => {
  const { resolvedTheme } = useTheme();
  let src;

  switch (resolvedTheme) {
    case "light":
      src = "/assets/product-light.png";
      break;
    case "dark":
      src = "/assets/product-dark.png";
      break;
    default:
      src = "/assets/product-light.png";
      break;
  }
  return (
    <div className="relative overflow-hidden group size-full">
      <div className="top-0 left-0 absolute px-5 sm:px-6 md:px-8 pt-5 sm:pt-6 md:pt-8 size-full">
        <div className="group-hover:scale-[1.02] gap-1 border-default grid border border-b-0 rounded-t-lg transition duration-300 overflow-hidden size-full">
          <Image
            src={src}
            alt="Picture of the product"
            height={720}
            width={1400}
            className="mx-auto rounded h-full object-center object-cover"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};

export const FifthIllustration = () => {
  const { resolvedTheme } = useTheme();
  let src;

  switch (resolvedTheme) {
    case "light":
      src = "/assets/website-light.png";
      break;
    case "dark":
      src = "/assets/website-dark.png";
      break;
    default:
      src = "/assets/website-light.png";
      break;
  }
  return (
    <div className="relative overflow-hidden group size-full">
      <div className="top-0 left-0 absolute px-5 sm:px-6 md:px-8 pt-5 sm:pt-6 md:pt-8 size-full">
        <div className="group-hover:scale-[1.02] gap-1 border-default grid border border-b-0 rounded-t-lg transition duration-300 overflow-hidden size-full">
          <Image
            src={src}
            alt="Picture of the product"
            height={1882}
            width={3582}
            className="mx-auto h-full object-center object-cover"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};

export const SixthIllustration = () => {
  const { resolvedTheme } = useTheme();
  let src;

  switch (resolvedTheme) {
    case "light":
      src = "/assets/website-light.png";
      break;
    case "dark":
      src = "/assets/website-dark.png";
      break;
    default:
      src = "/assets/website-light.png";
      break;
  }
  return (
    <div className="relative overflow-hidden group size-full">
      <div className="top-0 left-0 absolute px-3 sm:px-4 md:px-5 pt-3 sm:pt-4 md:pt-5 size-full">
        <div className="group-hover:scale-[1.02] gap-1 border-default grid border border-b-0 rounded-t-lg transition duration-300 overflow-hidden size-full">
          <Image
            src={src}
            alt="Storybook cover"
            height={1880}
            width={3584}
            className="mx-auto h-full object-center object-cover"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};
