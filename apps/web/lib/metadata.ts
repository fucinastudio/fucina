import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fucina - Open source product foundry",
  description: "An opensource product foundry",
  keywords: ["Fucina", "Opensource", "Product Foundry"],
  metadataBase: new URL("https://www.fucina.studio"),
  alternates: {
    canonical: "https://www.fucina.studio",
  },
  openGraph: {
    title: "Fucina - Open source product foundry",
    description: "An opensource product foundry",
    url: "https://www.fucina.studio",
    siteName: "Fucina",
    images: [
      {
        url: "https://www.fucina.studio/assets/og.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://wwww.fucina.studio/assets/og-alt.png",
        width: 1800,
        height: 1600,
        alt: "An opensource product foundry",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Fucina - Open source product foundry",
    description: "An opensource product foundry",
    card: "summary_large_image",
    images: [
      {
        url: "https://www.fucina.studio/assets/twitter-og.png",
        alt: "An opensource product foundry",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};
