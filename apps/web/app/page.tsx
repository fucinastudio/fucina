import * as React from "react";

import Navbar from "@/components/modules/navbar";
import Hero from "@/components/modules/hero";
import Footer from "@/components/modules/footer";
import Resources from "@/components/modules/resources";
import Manifesto from "@/components/modules/manifesto";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Resources />
      <Manifesto />
      <Footer />
    </main>
  );
}
