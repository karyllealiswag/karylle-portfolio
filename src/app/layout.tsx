import type { Metadata, Viewport } from "next";
import { Geist_Pixel, Silkscreen } from "next/font/google";
import { StyledComponentsRegistry } from "@/lib/registry";
import { Providers } from "./providers";
import "./globals.css";

const geistPixel = Geist_Pixel({
  variable: "--font-geist-pixel",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  adjustFontFallback: false,
});

const silkscreen = Silkscreen({
  variable: "--font-silkscreen",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `Karylle Aliswag | Portfolio`,
  description: `Welcome to Karylle Aliswag's portfolio website! Explore my projects, skills, and experience in web development and design. Discover how I can bring your ideas to life with creativity and technical expertise.`,
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
    <html
      lang="en"
      className={`${geistPixel.variable} ${silkscreen.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
