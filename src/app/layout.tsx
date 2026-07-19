import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sarthak Verma | Software Engineer & AI Builder",
  description: "Sarthak Verma — CS student building production e-commerce platforms and AI automation systems. Creator of Shineora and Elize AI.",
  metadataBase: new URL("https://sarthak.foo"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sarthak Verma | Software Engineer & AI Builder",
    description: "Sarthak Verma — CS student building production e-commerce platforms and AI automation systems. Creator of Shineora and Elize AI.",
    url: "https://sarthak.foo",
    siteName: "Sarthak Verma",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sarthak Verma Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarthak Verma | Software Engineer & AI Builder",
    description: "Sarthak Verma — CS student building production e-commerce platforms and AI automation systems. Creator of Shineora and Elize AI.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
};

import { ModeProvider } from "@/context/ModeContext";
import ModeSwitcher from "@/components/ModeSwitcher";
import EasterEggs from "@/components/EasterEggs";
import MiniAIAssistant from "@/components/MiniAIAssistant";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/ui/ScrollProgress";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col relative pb-24">
        <ModeProvider>
          <ScrollProgress />
          <SmoothScrolling>{children}</SmoothScrolling>
          <ModeSwitcher />
          <EasterEggs />
          <MiniAIAssistant />
          <ScrollToTop />
        </ModeProvider>
      </body>
    </html>
  );
}
