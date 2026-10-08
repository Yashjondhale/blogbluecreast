"use client";

import { useState } from "react";
import { Check, Copy, Share2 } from "lucide-react";
import { SITE_URL } from "@/lib/constants";

interface SocialShareProps {
  title: string;
  slug?: string;
  url?: string;
  className?: string;
}

export function SocialShare({ title, slug, url, className }: SocialShareProps) {
  const [copied, setCopied] = useState(false);
  const fullUrl = url || (slug ? `${SITE_URL}/blog/${slug}` : SITE_URL);

  const shareLinks = {
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(
      `*${title}*\n\nRead more on BlueCrest: ${fullUrl}`
    )}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      title
    )}&url=${encodeURIComponent(fullUrl)}&via=bluecreast_in`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      fullUrl
    )}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(
      fullUrl
    )}&text=${encodeURIComponent(title)}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className={className}>
      <div className="flex flex-wrap items-center gap-2">
        <span className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
          <Share2 className="h-3.5 w-3.5" />
          Share:
        </span>

        {/* WhatsApp (Primary for India) */}
        <a
          href={shareLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on WhatsApp"
          className="flex h-9 items-center gap-1.5 rounded-lg bg-[#25D366]/10 px-3 text-xs font-medium text-[#1da851] transition-all hover:bg-[#25D366] hover:text-white dark:bg-[#25D366]/20 dark:text-[#25D366] dark:hover:text-white"
        >
          <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.476-.15-.677.15-.201.3-.778.979-.954 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.501-1.786-1.677-2.087-.176-.3-.019-.462.132-.612.136-.135.301-.35.452-.526.15-.175.2-.3.301-.5.1-.2.05-.376-.025-.526-.075-.15-.677-1.632-.928-2.235-.245-.588-.493-.508-.677-.518-.175-.008-.376-.01-.577-.01-.2 0-.526.075-.802.376-.276.3-1.054 1.03-1.054 2.511s1.079 2.911 1.23 3.112c.15.2 2.124 3.243 5.145 4.548.719.31 1.28.496 1.718.635.723.23 1.38.198 1.901.12.58-.088 1.78-.727 2.03-1.429.251-.702.251-1.303.176-1.429-.076-.126-.276-.201-.577-.351zM12.04 2C6.518 2 2.03 6.478 2.03 12c0 1.93.551 3.731 1.506 5.257L2 22l4.89-1.499c1.47.85 3.17 1.339 5.15 1.339 5.522 0 10.01-4.478 10.01-10s-4.488-10-10.01-10z" />
          </svg>
          WhatsApp
        </a>

        {/* X / Twitter */}
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on X"
          className="flex h-9 items-center gap-1.5 rounded-lg bg-slate-100 px-3 text-xs font-medium text-slate-800 transition-all hover:bg-slate-900 hover:text-white dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
        >
          <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          Post
        </a>

        {/* LinkedIn */}
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
          className="flex h-9 items-center gap-1.5 rounded-lg bg-[#0A66C2]/10 px-3 text-xs font-medium text-[#0A66C2] transition-all hover:bg-[#0A66C2] hover:text-white dark:bg-[#0A66C2]/20 dark:text-[#38bdf8] dark:hover:text-white"
        >
          <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          LinkedIn
        </a>

        {/* Telegram */}
        <a
          href={shareLinks.telegram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Telegram"
          className="flex h-9 items-center gap-1.5 rounded-lg bg-[#229ED9]/10 px-3 text-xs font-medium text-[#229ED9] transition-all hover:bg-[#229ED9] hover:text-white dark:bg-[#229ED9]/20"
        >
          <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.536-.196 1.006.128.832.949z" />
          </svg>
          Telegram
        </a>

        {/* Copy Link */}
        <button
          type="button"
          onClick={copyToClipboard}
          aria-label="Copy article link"
          className="flex h-9 items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 text-xs font-medium text-slate-700 shadow-xs transition-all hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-500" />
              <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5 text-slate-500 dark:text-slate-400" />
              <span>Copy Link</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
