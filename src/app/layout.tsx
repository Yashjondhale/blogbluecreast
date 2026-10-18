import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { OrganizationJsonLd, WebsiteJsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_SITE_SETTINGS, SITE_URL } from "@/lib/constants";
import Script from "next/script";

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
    default: "BlueCreast | Modern Tech, Finance, Health & Lifestyle Journalism",
    template: "%s | BlueCreast",
  },
  description: DEFAULT_SITE_SETTINGS.description,
  applicationName: "BlueCreast",
  authors: [{ name: "BlueCreast Editorial Desk", url: SITE_URL }],
  creator: "BlueCreast",
  publisher: "BlueCreast",
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
    siteName: "BlueCreast",
    title: "BlueCreast | Modern Tech, Finance, Health & Lifestyle Journalism",
    description: DEFAULT_SITE_SETTINGS.description,
    images: [
      {
        url: `${SITE_URL}/api/og?title=${encodeURIComponent("BlueCreast - Modern Insights & Journalism")}`,
        width: 1200,
        height: 630,
        alt: "BlueCreast Publication Cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@bluecreast_in",
    creator: "@bluecreast_in",
    title: "BlueCreast | Modern Tech, Finance, Health & Lifestyle Journalism",
    description: DEFAULT_SITE_SETTINGS.description,
    images: [`${SITE_URL}/api/og?title=${encodeURIComponent("BlueCreast - Modern Insights & Journalism")}`],
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
        {/* Google AdSense */}
        <Script
          id="google-adsense"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9565997739811298"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased dark:bg-[#061126] dark:text-slate-100 flex flex-col">
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}

