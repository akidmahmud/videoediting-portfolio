import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Google_Sans, Google_Sans_Code } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const archivo = localFont({
  src: [
    { path: "../fonts/Archivo-Variable.woff2", style: "normal" },
    { path: "../fonts/Archivo-Variable-Italic.woff2", style: "italic" },
  ],
  variable: "--font-display",
  weight: "100 900",
  display: "swap",
});

const sans = Google_Sans({ subsets: ["latin"], weight: "variable", variable: "--font-sans", display: "swap" });
const mono = Google_Sans_Code({ subsets: ["latin"], weight: "variable", variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: `${site.name} — ${site.role}`,
  description:
    "Short-form reels, kinetic typography, motion design and real-estate edits. Portfolio of " + site.name + ".",
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: "Edits that stop the scroll.",
    images: ["/media/poster/stride.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
