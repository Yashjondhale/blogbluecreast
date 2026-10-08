"use client";

import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CookieConsent } from "./CookieConsent";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");

  if (isStudio) {
    return <div className="h-screen w-screen overflow-hidden">{children}</div>;
  }

  return (
    <>
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
    </>
  );
}
