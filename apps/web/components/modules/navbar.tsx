import React from "react";

import Logo from "@/components/logo";

export default function Navbar() {
  return (
    <nav
      id="navbar"
      className="bg-background border-b-default fixed left-0 top-0 z-50 flex h-14 w-screen items-center border-b">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-start px-4 sm:px-6">
        <Logo />
      </div>
    </nav>
  );
}
