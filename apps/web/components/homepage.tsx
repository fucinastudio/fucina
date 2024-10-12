"use client";

import React from "react";
import { Flame, ScrollText, LayoutGrid, Github } from "lucide-react";

import { FloatingDock } from "@/components/floating-dock";
import { TextHoverEffect } from "@/components/text-hover";
import { Manifesto, About, Products } from "@/components/desktop";

export default function Homepage() {
  const links = [
    {
      title: "About",
      icon: <Flame className="size-full text-fuchsia-800 dark:text-fuchsia-300" />,
      children: <About />,
      link: false,
    },
    {
      title: "Manifesto",
      icon: <ScrollText className="size-full text-fuchsia-800 dark:text-fuchsia-300" />,
      children: <Manifesto />,
      link: false,
    },
    {
      title: "Products",
      icon: <LayoutGrid className="size-full text-fuchsia-800 dark:text-fuchsia-300" />,
      children: <Products />,
      link: false,
    },

    {
      title: "GitHub",
      icon: <Github className="size-full text-fuchsia-800 dark:text-fuchsia-300" />,
      link: true,
      href: "https://github.com/fucinastudio",
    },
  ];
  return (
    <main className="h-screen w-screen bg-gradient-to-b from-white/0 to-fuchsia-600/[0.07]">
      <div className="relative z-40 flex h-screen items-center justify-center">
        <TextHoverEffect text="FUCINA" />
      </div>
      <FloatingDock items={links} />
    </main>
  );
}
