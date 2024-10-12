import React from "react";
import Link from "next/link";

import { GridPattern } from "@/components/grid-pattern";
import { cn } from "@fucina/utils";
import { Card } from "@fucina/ui";

const About = () => {
  return (
    <div className="relative max-h-[60vh] w-full overflow-auto px-10 py-20">
      <p className="font-brand relative z-40 text-5xl font-normal leading-[1.1]">
        Nelle profondità ardenti sotto l&apos;isola di Lemno, risuona l&apos;eco di martelli che danzano sulle
        incudini, un inno alla creazione che si eleva dalle fucine divine. Qui, Efesto, il maestro artigiano
        degli dei, plasma con mani indomabili e un cuore infuocato, le meraviglie del mondo: armature
        indistruttibili, gioielli che catturano l&apos;essenza stessa della bellezza, e armi forgiate con la
        forza dei vulcani. Ogni colpo del martello è un gesto di passione, ogni scintilla un sogno che prende
        forma, ogni creazione un tributo all&apos;ingegno senza limiti.
        <br />
        <br />
        Sotto la sua guida, la fucina diventa un luogo di trasformazione magica, dove il fuoco non solo
        consuma, ma dà vita. Efesto ci insegna che, nel cuore ardente della fatica, nascono l&apos;arte e
        l&apos;innovazione. Nelle sue mani, il metallo più ribelle si arrende, trasformandosi in opere che
        sfidano il tempo, testimoni della forza dell&apos;ingegno e della fiamma eterna dell&apos;ispirazione.
        <br />
        <br />
        Così, nel crepitio delle braci e nel bagliore dei fuochi, ritroviamo l&apos;eco di una promessa: che
        ogni sfida può essere vinta con astuzia e perseveranza, che ogni idea può essere plasmata nella
        realtà. Il lavoro di Efesto è un monito per chiunque osi sognare: anche nel buio più profondo, la luce
        dell&apos;innovazione può brillare, forte come il fuoco di una fucina divina.
      </p>
      <GridPattern
        width={32}
        height={32}
        x={-1}
        y={-1}
        strokeDasharray={"4 4"}
        className={cn(
          "[mask-image:radial-gradient(1024px_circle_at_center,white,transparent)]",
          "fixed h-full opacity-60"
        )}
      />
    </div>
  );
};

const Manifesto = () => {
  return (
    <div className="relative max-h-[60vh] w-full overflow-auto px-10 py-20">
      <p className="font-brand relative z-40 text-5xl font-normal leading-[1.1]">
        Nelle profondità ardenti sotto l&apos;isola di Lemno, risuona l&apos;eco di martelli che danzano sulle
        incudini, un inno alla creazione che si eleva dalle fucine divine. Qui, Efesto, il maestro artigiano
        degli dei, plasma con mani indomabili e un cuore infuocato, le meraviglie del mondo: armature
        indistruttibili, gioielli che catturano l&apos;essenza stessa della bellezza, e armi forgiate con la
        forza dei vulcani. Ogni colpo del martello è un gesto di passione, ogni scintilla un sogno che prende
        forma, ogni creazione un tributo all&apos;ingegno senza limiti.
        <br />
        <br />
        Sotto la sua guida, la fucina diventa un luogo di trasformazione magica, dove il fuoco non solo
        consuma, ma dà vita. Efesto ci insegna che, nel cuore ardente della fatica, nascono l&apos;arte e
        l&apos;innovazione. Nelle sue mani, il metallo più ribelle si arrende, trasformandosi in opere che
        sfidano il tempo, testimoni della forza dell&apos;ingegno e della fiamma eterna dell&apos;ispirazione.
        <br />
        <br />
        Così, nel crepitio delle braci e nel bagliore dei fuochi, ritroviamo l&apos;eco di una promessa: che
        ogni sfida può essere vinta con astuzia e perseveranza, che ogni idea può essere plasmata nella
        realtà. Il lavoro di Efesto è un monito per chiunque osi sognare: anche nel buio più profondo, la luce
        dell&apos;innovazione può brillare, forte come il fuoco di una fucina divina.
      </p>
      <GridPattern
        width={32}
        height={32}
        x={-1}
        y={-1}
        strokeDasharray={"4 4"}
        className={cn(
          "[mask-image:radial-gradient(1024px_circle_at_center,white,transparent)]",
          "fixed h-full opacity-60"
        )}
      />
    </div>
  );
};

const Products = () => {
  const products = [
    {
      title: "Feely",
      description: "User feedbacks get real by being rewarded",
      href: "https://feely.so",
    },
    {
      title: "Wait for it",
      description: "Coming soon...",
      href: "/",
    },
  ];
  return (
    <div className="relative grid max-h-[60vh] w-full grid-cols-2 gap-4 overflow-auto px-6 py-20">
      {products.map((product) => (
        <Link href={product.href} key={product.title} target="_blank" className="relative z-40 w-full">
          <Card className="flex flex-col gap-1 p-4">
            <h2 className="font-brand text-2xl font-medium">{product.title}</h2>
            <p className="text-description">{product.description}</p>
          </Card>
        </Link>
      ))}
      <GridPattern
        width={32}
        height={32}
        x={-1}
        y={-1}
        strokeDasharray={"4 4"}
        className={cn("[mask-image:linear-gradient(to_bottom_left,white,transparent)]", "fixed h-full")}
      />
    </div>
  );
};

export { About, Manifesto, Products };
