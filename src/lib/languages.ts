export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  isPopular?: boolean;
}

export const SUPPORTED_LANGUAGES: Language[] = [
  { code: "en", name: "English", nativeName: "English", flag: "🇺🇸", isPopular: true },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", flag: "🇮🇳", isPopular: true },
  { code: "es", name: "Spanish", nativeName: "Español", flag: "🇪🇸", isPopular: true },
  { code: "fr", name: "French", nativeName: "Français", flag: "🇫🇷", isPopular: true },
  { code: "de", name: "German", nativeName: "Deutsch", flag: "🇩🇪", isPopular: true },
  { code: "ar", name: "Arabic", nativeName: "العربية", flag: "🇸🇦", isPopular: true },
  { code: "ja", name: "Japanese", nativeName: "日本語", flag: "🇯🇵", isPopular: true },
  { code: "zh-CN", name: "Chinese", nativeName: "简体中文", flag: "🇨🇳", isPopular: true },
  { code: "mr", name: "Marathi", nativeName: "मराठी", flag: "🇮🇳", isPopular: true },
  { code: "bn", name: "Bengali", nativeName: "বাংলা", flag: "🇮🇳", isPopular: true },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்", flag: "🇮🇳", isPopular: false },
  { code: "te", name: "Telugu", nativeName: "తెలుగు", flag: "🇮🇳", isPopular: false },
  { code: "gu", name: "Gujarati", nativeName: "ગુજરાતી", flag: "🇮🇳", isPopular: false },
  { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ", flag: "🇮🇳", isPopular: false },
  { code: "ml", name: "Malayalam", nativeName: "മലയാളം", flag: "🇮🇳", isPopular: false },
  { code: "pa", name: "Punjabi", nativeName: "ਪੰਜਾਬੀ", flag: "🇮🇳", isPopular: false },
  { code: "ur", name: "Urdu", nativeName: "اردو", flag: "🇵🇰", isPopular: false },
  { code: "pt", name: "Portuguese", nativeName: "Português", flag: "🇵🇹", isPopular: false },
  { code: "ru", name: "Russian", nativeName: "Русский", flag: "🇷🇺", isPopular: false },
  { code: "it", name: "Italian", nativeName: "Italiano", flag: "🇮🇹", isPopular: false },
  { code: "ko", name: "Korean", nativeName: "한국어", flag: "🇰🇷", isPopular: false },
  { code: "nl", name: "Dutch", nativeName: "Nederlands", flag: "🇳🇱", isPopular: false },
  { code: "tr", name: "Turkish", nativeName: "Türkçe", flag: "🇹🇷", isPopular: false },
  { code: "id", name: "Indonesian", nativeName: "Bahasa Indonesia", flag: "🇮🇩", isPopular: false },
  { code: "vi", name: "Vietnamese", nativeName: "Tiếng Việt", flag: "🇻🇳", isPopular: false },
  { code: "th", name: "Thai", nativeName: "ไทย", flag: "🇹🇭", isPopular: false },
  { code: "pl", name: "Polish", nativeName: "Polski", flag: "🇵🇱", isPopular: false },
  { code: "sv", name: "Swedish", nativeName: "Svenska", flag: "🇸🇪", isPopular: false },
];

export const POPULAR_LANGUAGES = SUPPORTED_LANGUAGES.filter((l) => l.isPopular);

const COOKIE_NAME = "googtrans";
const STORAGE_KEY = "bluecreast_current_language";

/**
 * Read the currently active language code from cookies or localStorage
 */
export function getCurrentLanguageCode(): string {
  if (typeof window === "undefined") return "en";

  try {
    // 1. Try googtrans cookie (format: /en/hi or /auto/hi)
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
      const [name, val] = cookie.trim().split("=");
      if (name === COOKIE_NAME && val) {
        const parts = decodeURIComponent(val).split("/");
        const code = parts[parts.length - 1];
        if (code && code !== "null" && code !== "undefined") {
          return code;
        }
      }
    }

    // 2. Try localStorage
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return stored;
  } catch (err) {
    console.debug("Error reading language preference:", err);
  }

  return "en";
}

/**
 * Get language details by its code
 */
export function getLanguageByCode(code: string): Language {
  return (
    SUPPORTED_LANGUAGES.find(
      (l) => l.code.toLowerCase() === code.toLowerCase()
    ) || SUPPORTED_LANGUAGES[0]
  );
}

/**
 * Set the Google Translate language and refresh/trigger the translation
 */
export function changeLanguage(targetCode: string): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(STORAGE_KEY, targetCode);

    const isLocalhost =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1" ||
      window.location.hostname.startsWith("192.168.");

    const cookiePath = "path=/;";

    if (targetCode === "en") {
      // Clear cookie for standard path
      document.cookie = `${COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; ${cookiePath}`;
      document.cookie = `${COOKIE_NAME}=/en/en; expires=Thu, 01 Jan 1970 00:00:00 UTC; ${cookiePath}`;
      document.cookie = `${COOKIE_NAME}=/auto/en; expires=Thu, 01 Jan 1970 00:00:00 UTC; ${cookiePath}`;

      if (!isLocalhost) {
        const rootDomain = window.location.hostname.replace(/^www\./, "");
        document.cookie = `${COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; ${cookiePath} domain=.${rootDomain};`;
        document.cookie = `${COOKIE_NAME}=/en/en; expires=Thu, 01 Jan 1970 00:00:00 UTC; ${cookiePath} domain=.${rootDomain};`;
      }

      const select = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
      if (select) {
        select.value = "en";
        select.dispatchEvent(new Event("change"));
      }

      window.dispatchEvent(
        new CustomEvent("bluecreast_language_changed", { detail: { code: "en" } })
      );

      // Clean reload to restore original DOM
      window.location.reload();
      return;
    }

    // Set cookie for target language
    const cookieVal = `/en/${targetCode}`;
    const autoCookieVal = `/auto/${targetCode}`;

    // Always set on base path
    document.cookie = `${COOKIE_NAME}=${cookieVal}; ${cookiePath}`;
    document.cookie = `${COOKIE_NAME}=${autoCookieVal}; ${cookiePath}`;

    if (!isLocalhost) {
      const rootDomain = window.location.hostname.replace(/^www\./, "");
      document.cookie = `${COOKIE_NAME}=${cookieVal}; ${cookiePath} domain=.${rootDomain};`;
      document.cookie = `${COOKIE_NAME}=${autoCookieVal}; ${cookiePath} domain=.${rootDomain};`;
    }

    // Notify listeners
    window.dispatchEvent(
      new CustomEvent("bluecreast_language_changed", {
        detail: { code: targetCode },
      })
    );

    // Try triggering Google Translate select combo directly
    const select = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
    if (select) {
      select.value = targetCode;
      select.dispatchEvent(new Event("change"));
    } else {
      // Reload so Google Translate initializes with the new cookie
      window.location.reload();
    }
  } catch (err) {
    console.error("Failed to change language:", err);
  }
}
