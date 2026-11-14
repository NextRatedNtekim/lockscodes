import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import { MotionConfig } from "motion/react";
import "./globals.css";
import { SITE_URL, SITE_NAME, DESCRIPTION } from "@/lib/site";
import { Nav, Footer } from "@/components/sections";
const d = Bricolage_Grotesque({ subsets: ["latin"], variable: "--f-display" });
const s = Instrument_Sans({ subsets: ["latin"], variable: "--f-sans" });
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "LocksCodes | We ship websites and apps", template: "%s | LocksCodes" },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: ["web design agency", "web development", "mobile app development", "Next.js", "React", "LocksCodes", "Samuel Ntekim"],
  authors: [{ name: "Samuel Ntekim" }],
  creator: "Samuel Ntekim",
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: SITE_URL, siteName: SITE_NAME, title: "LocksCodes | We ship websites and apps", description: DESCRIPTION, locale: "en_US" },
  twitter: { card: "summary_large_image", title: "LocksCodes | We ship websites and apps", description: DESCRIPTION, creator: "@underrated_lx" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
};
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": `${SITE_URL}/#org`, name: SITE_NAME, url: SITE_URL, logo: `${SITE_URL}/icon-512.png`, description: DESCRIPTION, founder: { "@id": `${SITE_URL}/#founder` }, sameAs: ["https://github.com/underrated-lx", "https://x.com/underrated_lx"] },
    { "@type": "Person", "@id": `${SITE_URL}/#founder`, name: "Samuel Ntekim", jobTitle: "Founder", worksFor: { "@id": `${SITE_URL}/#org` }, url: SITE_URL },
    { "@type": "WebSite", "@id": `${SITE_URL}/#site`, url: SITE_URL, name: SITE_NAME, publisher: { "@id": `${SITE_URL}/#org` } },
  ],
};
export const viewport = { themeColor: "#070707" };
export default function Layout({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className={`${d.variable} ${s.variable}`}><body>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <MotionConfig reducedMotion="user"><Nav />{children}<Footer /></MotionConfig>
  </body></html>);
}
