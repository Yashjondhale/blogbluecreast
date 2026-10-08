import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { OrganizationJsonLd, WebsiteJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_SITE_SETTINGS, SITE_URL } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0B3D91" },
    { media: "(prefers-color-scheme: dark)", color: "#061126" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "BlueCrest | Modern Tech, Finance, Health & Lifestyle Journalism",
    template: "%s | BlueCrest",
  },
  description: DEFAULT_SITE_SETTINGS.description,
  applicationName: "BlueCrest",
  authors: [{ name: "BlueCrest Editorial Desk", url: SITE_URL }],
  creator: "BlueCrest",
  publisher: "BlueCrest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
    },
    types: {
      "application/rss+xml": "/rss.xml",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "BlueCrest",
    title: "BlueCrest | Modern Tech, Finance, Health & Lifestyle Journalism",
    description: DEFAULT_SITE_SETTINGS.description,
    images: [
      {
        url: `${SITE_URL}/api/og?title=${encodeURIComponent("BlueCrest - Modern Insights & Journalism")}`,
        width: 1200,
        height: 630,
        alt: "BlueCrest Publication Cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@bluecreast_in",
    creator: "@bluecreast_in",
    title: "BlueCrest | Modern Tech, Finance, Health & Lifestyle Journalism",
    description: DEFAULT_SITE_SETTINGS.description,
    images: [`${SITE_URL}/api/og?title=${encodeURIComponent("BlueCrest - Modern Insights & Journalism")}`],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/favicon.svg" },
    ],
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-token",
    yandex: "yandex-verification-token",
    other: {
      "msvalidate.01": ["bing-verification-token"],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" data-scroll-behavior="smooth" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        <WebsiteJsonLd />
        <OrganizationJsonLd />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased dark:bg-[#061126] dark:text-slate-100 flex flex-col">
        {/* WCAG Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-[#0B3D91] focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>

        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
