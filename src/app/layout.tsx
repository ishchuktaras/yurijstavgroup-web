import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navigation from "@/components/Navigation"; 
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import SmoothScrolling from "@/components/SmoothScrolling";

// Definice našich fontů místo původního Geist
const inter = Inter({ subsets: ['latin', 'latin-ext'], variable: '--font-inter' });
const montserrat = Montserrat({ subsets: ['latin', 'latin-ext'], variable: '--font-montserrat' });

export const metadata: Metadata = {
  title: {
    default: "Yurij Stav Group s.r.o. | Spolehlivý partner ve stavebnictví",
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": "Yurij Stav Group s.r.o.",
    "description": "Váš spolehlivý partner ve stavebnictví. Kompletní stavební práce, rekonstrukce, fasády a střechy.",
    "url": "https://www.yurijstavgroup.cz",
    "telephone": "+420608084721",
    "email": "info@yurijstavgroup.cz",
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
      className={cn("h-full", "antialiased", "scroll-smooth", inter.variable, montserrat.variable)}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-brand-bg text-white font-sans selection:bg-brand-blue/30" suppressHydrationWarning>
        {/* ZDE PŘIDÁN CHYBĚJÍCÍ OTEVÍRACÍ TAG */}
        <SmoothScrolling>
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <CookieBanner /> 
        </SmoothScrolling>   
      </body>
    </html>
  );
}