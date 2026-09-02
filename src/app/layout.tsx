// src/app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navigation from "@/components/Navigation"; 
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. SEO a OpenGraph Metadata (Pro Google, Seznam, Facebook, X)
export const metadata: Metadata = {
  title: {
    default: "Yurij Stav Group | Spolehlivý partner ve stavebnictví",
    template: "%s | Yurij Stav Group s.r.o.",
  },
  description: "Kompletní stavební práce, rekonstrukce bytů a domů, zateplení fasád a realizace střech. Kvalita bez kompromisů a poctivé řemeslo.",
  keywords: ["stavební firma", "rekonstrukce", "zateplení fasád", "střechy", "stavební práce Praha", "Yurij Stav Group"],
  authors: [{ name: "Yurij Stav Group s.r.o." }],
  creator: "Yurij Stav Group",
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://www.yurijstavgroup.cz",
    title: "Yurij Stav Group | Stavební a rekonstrukční práce",
    description: "Nabízíme kompletní stavební práce od menších rekonstrukcí až po realizaci staveb na klíč.",
    siteName: "Yurij Stav Group",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 2. GEO: Strukturovaná data pro AI vyhledávače a LLM (Schema.org)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": "Yurij Stav Group s.r.o.",
    "description": "Váš spolehlivý partner ve stavebnictví. Kompletní stavební práce, rekonstrukce, fasády a střechy.",
    "url": "https://www.yurijstavgroup.cz",
    "telephone": "+420608084721",
    "email": "Yurijstavgroup@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Fryčovická 458",
      "addressLocality": "Praha - Letňany",
      "postalCode": "199 00",
      "addressCountry": "CZ"
    },
    "vatID": "CZ24091812",
    "taxID": "24091812"
  };

  return (
    <html
      lang="cs" 
      className={cn("h-full", "antialiased", "scroll-smooth", geistSans.variable, geistMono.variable, inter.variable)}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-brand-bg text-foreground" suppressHydrationWarning>
        <Navigation />
        {/* OPRAVA: Zde jsme smazali md:ml-64 */}
        <main className="flex-1">
          {children}
        </main>
        <Footer />     
      </body>
    </html>
  );
}