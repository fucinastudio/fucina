import type { Metadata } from "next";
import { ToastProvider } from "@fucina/ui/src/toast";
import { ThemeProvider } from "@/components/theme-provider";
import { sans, brand, logo } from "@/styles/fonts/font";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Fucina - Open source product foundry",
  description: "Open source product foundry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${brand.variable} ${logo.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <ToastProvider />
      </body>
    </html>
  );
}
