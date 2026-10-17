import type { Metadata } from "next";
import { Instrument_Serif, Open_Sans } from "next/font/google";
import { ProjectViewerProvider } from "@/components/ProjectViewer";
import { PathnameWatcher } from "@/components/PageTransition";
import "./globals.css";

// Stand-in for Ardoise Std (labels and titles), which isn't a web font here.
const sans = Open_Sans({ subsets: ["latin"], variable: "--font-sans" });
// Stand-in for Mencken Std Italic (the statements).
const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
});

// erin's Adobe Fonts web project (Mencken Std and Ardoise Std). Paste the
// project ID from fonts.adobe.com > Web Projects here, e.g. "abc1def".
const ADOBE_FONTS_KIT = "pas1cwi";

export const metadata: Metadata = {
  title: "Erin Hsu",
  description: "Product, brand and visual design by Erin Hsu.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      {ADOBE_FONTS_KIT && (
        <head>
          <link rel="stylesheet" href={`https://use.typekit.net/${ADOBE_FONTS_KIT}.css`} />
        </head>
      )}
      <body>
        <PathnameWatcher />
        <ProjectViewerProvider>{children}</ProjectViewerProvider>
      </body>
    </html>
  );
}
