import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import type { Viewport } from "next";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#00f0ff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "AstroKalki - The Archive of Becoming",
  description: "Ancient wisdom. Modern interface. Discover patterns encoded in your journey.",
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body className="bg-[#0a0e27] text-[#e0f2ff] font-sans antialiased">
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
