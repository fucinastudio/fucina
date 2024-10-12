import React from "react";

import { TextRevealByWord } from "@/components/text-reveal";

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="border-default relative z-20 w-screen border-b bg-gradient-to-b from-fuchsia-100/[0.05] to-fuchsia-600/[0.07] pt-10 dark:from-fuchsia-950/[0.05]">
      <TextRevealByWord
        text="Nelle profondità ardenti sotto l'isola di Lemno, risuona l'eco di martelli che
      danzano sulle incudini, un inno alla creazione che si eleva dalle fucine divine. Qui, Efesto, il maestro
      artigiano degli dei, plasma con mani indomabili e un cuore infuocato, le meraviglie del mondo: armature
      indistruttibili, gioielli che catturano l'essenza stessa della bellezza, e armi forgiate con la forza
      dei vulcani. Ogni colpo del martello è un gesto di passione, ogni scintilla un sogno che prende forma,
      ogni creazione un tributo all'ingegno senza limiti."
      />
      <TextRevealByWord
        text="Sotto la sua guida, la fucina diventa un luogo di
      trasformazione magica, dove il fuoco non solo consuma, ma dà vita. Efesto ci insegna che, nel cuore
      ardente della fatica, nascono l'arte e l'innovazione. Nelle sue mani, il metallo più ribelle si arrende,
      trasformandosi in opere che sfidano il tempo, testimoni della forza dell'ingegno e della fiamma eterna
      dell'ispirazione."
      />
      <TextRevealByWord
        text="Così, nel crepitio delle braci e nel bagliore dei fuochi, ritroviamo l'eco di una
      promessa: che ogni sfida può essere vinta con astuzia e perseveranza, che ogni idea può essere plasmata
      nella realtà. Il lavoro di Efesto è un monito per chiunque osi sognare: anche nel buio più profondo, la
      luce dell'innovazione può brillare, forte come il fuoco di una fucina divina."
      />
    </section>
  );
}
