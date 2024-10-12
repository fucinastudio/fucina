import React from "react";
import Link from "next/link";

import { Separator } from "@fucina/ui";
import { GithubIcon } from "@/components/social-icons";
import { cn, focusRing } from "@fucina/utils";

export default function Footer() {
  return (
    <footer id="footer" className="bg-subtle relative z-20 w-screen">
      <div className="container mx-auto grid max-w-screen-lg gap-6 px-5 py-8 sm:px-6">
        <div className="grid items-center justify-between gap-6 sm:flex">
          <Link href="/" className={cn("rounded", focusRing)}>
            <h3 className="font-logo text-2xl font-medium uppercase">Fucina</h3>
          </Link>
          <div className="flex items-center justify-normal space-x-3 sm:justify-center">
            <Link
              href="https://github.com/fucinastudio"
              className={cn("rounded-full opacity-85 hover:cursor-pointer hover:opacity-100", focusRing)}>
              <GithubIcon />
            </Link>
          </div>
        </div>
        <Separator />
        <div className="grid items-center justify-start gap-6 sm:flex">
          <Link href="https://fucina.studio">
            <p className="text-description hover:text text-md">© 2024 Fucina</p>
          </Link>
        </div>
      </div>
    </footer>
  );
}
