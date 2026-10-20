"use client";

import { useEffect } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { getCurrentLanguageCode } from "@/lib/languages";

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}

export function GoogleTranslateProvider() {
  const pathname = usePathname();

  useEffect(() => {
    // If google translate is already loaded from previous navigation
    if (window.google?.translate?.TranslateElement) {
      try {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages:
              "en,hi,es,fr,de,ar,ja,zh-CN,mr,bn,ta,te,gu,kn,ml,pa,ur,pt,ru,it,ko,nl,tr,id,vi,th,pl,sv",
            autoDisplay: false,
          },
          "google_translate_element"
        );
      } catch (err) {
        console.debug("Re-init Google Translate:", err);
      }
    }
  }, []);

  // Re-apply language on route navigation if client is on a non-English language
  useEffect(() => {
    const activeLang = getCurrentLanguageCode();
    if (activeLang && activeLang !== "en") {
      const timer = setTimeout(() => {
        try {
          const select = document.querySelector(
            ".goog-te-combo"
          ) as HTMLSelectElement | null;
          if (select && select.value !== activeLang) {
            select.value = activeLang;
            select.dispatchEvent(new Event("change"));
          }
        } catch (err) {
          console.debug("Error re-syncing language on route change:", err);
        }
      }, 400);

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return (
    <>
      {/* Hidden element for Google Translate combo box - NOT display:none so script renders it */}
      <div
        id="google_translate_element"
        className="notranslate"
        style={{
          position: "fixed",
          top: "-9999px",
          left: "-9999px",
          width: "1px",
          height: "1px",
          opacity: 0.01,
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      {/* Callback defined before or alongside element.js */}
      <Script
        id="google-translate-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.googleTranslateElementInit = function() {
              if (window.google && window.google.translate && window.google.translate.TranslateElement) {
                new window.google.translate.TranslateElement({
                  pageLanguage: 'en',
                  includedLanguages: 'en,hi,es,fr,de,ar,ja,zh-CN,mr,bn,ta,te,gu,kn,ml,pa,ur,pt,ru,it,ko,nl,tr,id,vi,th,pl,sv',
                  autoDisplay: false
                }, 'google_translate_element');
              }
            };
          `,
        }}
      />

      {/* Google Translate API Script */}
      <Script
        id="google-translate-script"
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </>
  );
}
