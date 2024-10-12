import React from "react";
import Link from "next/link";

import { cn, focusRing } from "@fucina/utils";

interface CardProps {
  title: string;
  description: string;
  illustration: JSX.Element;
  href: string;
}

const SingleCard: React.FC<CardProps> = ({ title, description, illustration, href }) => {
  return (
    <div className="border-grid w-full border-b">
      <div className="border-grid mx-auto grid size-full max-w-screen-lg gap-4 border-x px-4">
        <div className="border-grid block border-x p-4">
          <Link href={href} target="_blank" className={cn(focusRing)}>
            <div className="border-default bg-subtle h-96 rounded-lg border p-1 shadow-sm">
              <div className="border-default bg-background flex h-full flex-col overflow-hidden rounded border">
                <div className="h-full grow">{illustration}</div>
                <div className="border-grid grid w-full gap-1 border-t p-4">
                  <h3 className="font-brand text-xl font-medium">{title}</h3>
                  <p className="text-description text-lg">{description}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

interface DoubleCardProps {
  firstTitle: string;
  firstDescription: string;
  firstIllustration: JSX.Element;
  firstHref: string;
  secondTitle: string;
  secondDescription: string;
  secondIllustration: JSX.Element;
  secondHref: string;
}

const DoubleCard: React.FC<DoubleCardProps> = ({
  firstTitle,
  firstDescription,
  firstIllustration,
  firstHref,
  secondTitle,
  secondDescription,
  secondIllustration,
  secondHref,
}) => {
  return (
    <div className="border-grid w-full border-b">
      <div className="border-grid mx-auto grid size-full max-w-screen-lg grid-cols-1 border-x px-4 md:grid-cols-3 md:gap-4">
        <div className="border-grid col-span-2 block size-full border-x p-4">
          <Link href={firstHref} target="_blank" className={cn(focusRing)}>
            <div className="border-default bg-subtle h-80 rounded-lg border p-1 shadow-sm">
              <div className="border-default bg-background flex h-full flex-col overflow-hidden rounded border">
                <div className="h-full grow">{firstIllustration}</div>
                <div className="border-grid grid w-full gap-1 border-t p-4">
                  <h3 className="font-brand text-xl font-medium">{firstTitle}</h3>
                  <p className="text-description text-lg">{firstDescription}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="border-grid block size-full border-x border-t p-4 md:border-t-0">
          <Link href={secondHref} target="_blank" className={cn(focusRing)}>
            <div className="border-default bg-subtle h-80 rounded-lg border p-1 shadow-sm">
              <div className="border-default bg-background flex h-full flex-col overflow-hidden rounded border">
                <div className="h-full grow">{secondIllustration}</div>
                <div className="border-grid grid w-full gap-1 border-t p-4">
                  <h3 className="font-brand text-xl font-medium">{secondTitle}</h3>
                  <p className="text-description text-lg">{secondDescription}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { SingleCard, DoubleCard };
