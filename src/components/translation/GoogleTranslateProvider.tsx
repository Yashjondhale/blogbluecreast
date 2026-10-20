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
    // Setup the initialization callback for Google Translate
    window.googleTranslateElementInit = () => {
      try {
        if (window.google?.translate?.TranslateElement) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages:
                "en,hi,es,fr,de,ar,ja,zh-CN,mr,bn,ta,te,gu,kn,ml,pa,ur,pt,ru,it,ko,nl,tr,id,vi,th,pl,sv",
              autoDisplay: false,
              layout:
                window.google.translate.TranslateElement.InlineLayout?.SIMPLE || 0,
            },
            "google_translate_element"
          );
        }
      } catch (err) {
        console.debug("Google Translate init error:", err);
      }
    };

    // If script was already loaded on previous navigations
    if (window.google?.translate?.TranslateElement) {
      window.googleTranslateElementInit();
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
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return (
    <>
      {/* Hidden element for Google Translate combo box */}
      <div
        id="google_translate_element"
        className="notranslate"
        style={{
          display: "none",
          position: "absolute",
          top: "-9999px",
          left: "-9999px",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />
      {/* Google Translate Script */}
      <Script
        id="google-translate-script"
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </>
  );
}
