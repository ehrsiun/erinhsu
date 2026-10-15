import type { Metadata } from "next";
import { Instrument_Serif, Open_Sans } from "next/font/google";
import "./globals.css";

const sans = Open_Sans({ subsets: ["latin"], variable: "--font-sans" });
// Stand-in for the "Erin Hsu" wordmark (a Figma vector) and the statement
// (Mencken Std Italic, not available as a web font here).
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
      <body>{children}</body>
    </html>
  );
}
