import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import { MotionConfig } from "motion/react";
import "./globals.css";
import { Nav, Footer } from "@/components/sections";
const d = Bricolage_Grotesque({ subsets: ["latin"], variable: "--f-display" });
const s = Instrument_Sans({ subsets: ["latin"], variable: "--f-sans" });
export const metadata: Metadata = {
  title: "LocksCodes | We ship websites and apps",
  description: "LocksCodes is a web and app agency founded by Samuel Ntekim. We design, build and launch websites, web apps and mobile apps.",
  openGraph: { images: ["/og-image.png"] }, icons: "/favicon.png",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className={`${d.variable} ${s.variable}`}><body>
    <MotionConfig reducedMotion="user"><Nav />{children}<Footer /></MotionConfig>
  </body></html>);
}
