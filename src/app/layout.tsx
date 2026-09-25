import type { Metadata, Viewport } from "next";
import { Geist_Pixel } from "next/font/google";
import { StyledComponentsRegistry } from "@/lib/registry";
import { Providers } from "./providers";
import { portfolio } from "@/data/portfolio";
import "./globals.css";

const geistPixel = Geist_Pixel({
  variable: "--font-geist-pixel",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: `${portfolio.name} — Portfolio`,
  description: `A Windows 95-styled digital portfolio for ${portfolio.name}: about, contact, education, experience, leadership, trainings, and projects.`,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#008080",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistPixel.variable} h-full antialiased`}>
      <body className="min-h-full">
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
