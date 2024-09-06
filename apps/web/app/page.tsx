"use client";

import * as React from "react";

import RetroGrid from "@/components/retro-grid";

export default function Home() {
  return (
    <main className="h-screen w-screen">
      <div className="bg-background relative flex size-full flex-col items-center justify-center overflow-hidden md:shadow-xl">
        <span className="font-logo brand-gradient pointer-events-none z-10 whitespace-pre-wrap text-center text-7xl font-medium leading-none sm:text-8xl">
          Fucina
        </span>
        <p className="text pt-4 text-center text-lg font-medium sm:text-xl">Open source product foundry</p>
        <RetroGrid />
      </div>
    </main>
  );
}
