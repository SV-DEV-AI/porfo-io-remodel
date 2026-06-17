import type { Metadata } from "next";
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
  description: "Portfolio of Sarthak Verma. Building digital experiences, automation systems, and AI-powered products.",
};

import { ModeProvider } from "@/context/ModeContext";
import ModeSwitcher from "@/components/ModeSwitcher";
import EasterEggs from "@/components/EasterEggs";
import MiniAIAssistant from "@/components/MiniAIAssistant";
import ScrollToTop from "@/components/ScrollToTop";

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
