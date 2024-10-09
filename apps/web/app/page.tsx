"use client";

import * as React from "react";
import Image from "next/image";
import { HomeIcon, Terminal, Github } from "lucide-react";

import { FloatingDock } from "@/components/floating-dock";
import { TextHoverEffect } from "@/components/text-hover";

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
    <main className="h-screen w-screen bg-gradient-to-b from-white/0 to-fuchsia-600/[0.07]">
      <div className="relative z-40 flex h-screen items-center justify-center">
        <TextHoverEffect text="FUCINA" />
      </div>
      <FloatingDock items={links} />
      <button></button>
    </main>
  );
}
