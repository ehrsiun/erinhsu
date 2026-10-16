import type { Metadata } from "next";
import { Instrument_Serif, Open_Sans } from "next/font/google";
import { ProjectViewerProvider } from "@/components/ProjectViewer";
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

export const metadata: Metadata = {
  title: "Erin Hsu",
  description: "Product, brand and visual design by Erin Hsu.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body>
        <ProjectViewerProvider>{children}</ProjectViewerProvider>
      </body>
    </html>
  );
}
