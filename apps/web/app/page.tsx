"use client";

import * as React from "react";
import Image from "next/image";
import { HomeIcon, Terminal, Github } from "lucide-react";

import { cn } from "@fucina/utils";
import { FloatingDock } from "@/components/floating-dock";
import { GridPattern } from "@/components/grid-pattern";

export default function Home() {
  const links = [
    {
      title: "Home",
      icon: <HomeIcon className="size-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "Products",
      icon: <Terminal className="size-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "Aceternity UI",
      icon: <Image src="" width={20} height={20} alt="Aceternity Logo" />,
      href: "#",
    },
    {
      title: "GitHub",
      icon: <Github className="size-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
  ];
  return (
    <main className="h-screen w-screen">
      <div className="bg-background relative flex size-full flex-col items-center justify-center overflow-hidden md:shadow-xl">
        <span className="font-logo brand-gradient pointer-events-none z-10 whitespace-pre-wrap text-center text-7xl font-medium leading-none sm:text-8xl">
          Fucina
        </span>
        <p className="text pt-4 text-center text-lg font-medium sm:text-xl">Open source product foundry</p>
      </div>
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn("[mask-image:radial-gradient(765px_circle_at_center,white,transparent)]")}
      />
      <FloatingDock items={links} />
    </main>
  );
}
