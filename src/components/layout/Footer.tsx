import Link from "next/link";
import { Rss } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { FOOTER_LINKS } from "@/lib/constants";
import { GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "@/components/brand/SocialIcons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-100/90 pt-16 pb-12 transition-colors dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info & Mission (Col 1-2) */}
          <div className="lg:col-span-2">
            <Logo size="md" showTagline />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              BlueCrest is an independent, multi-niche publication delivering rigorous technical journalism, wealth strategy, and evidence-based living guides. Built for longevity, precision, and deep inquiry.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3 text-slate-700 dark:text-slate-300">
              <a
                href="https://twitter.com/bluecreast_in"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="BlueCrest on Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-slate-200 transition-colors hover:bg-slate-200 hover:text-black dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800"
              >
                <TwitterIcon className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/company/bluecreast"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="BlueCrest on LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-slate-200 transition-colors hover:bg-slate-200 hover:text-[#0A66C2] dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/bluecreast"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="BlueCrest on GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-slate-200 transition-colors hover:bg-slate-200 hover:text-black dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com/bluecreast.in"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="BlueCrest on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-slate-200 transition-colors hover:bg-slate-200 hover:text-pink-600 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="/rss.xml"
                aria-label="BlueCrest RSS Feed"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-slate-200 transition-colors hover:bg-orange-100 hover:text-orange-600 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800"
              >
                <Rss className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Categories Links */}
          <div>
            <h3 className="font-serif text-sm font-bold text-slate-950 uppercase tracking-wider dark:text-slate-100">
              Categories
            </h3>
            <ul className="mt-4 space-y-1 text-sm">
              {FOOTER_LINKS.categories.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-block py-1.5 text-slate-700 transition-colors hover:text-[#0B3D91] dark:text-slate-300 dark:hover:text-[#38bdf8]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Editorial & Company Links */}
          <div>
            <h3 className="font-serif text-sm font-bold text-slate-950 uppercase tracking-wider dark:text-slate-100">
              Editorial & Team
            </h3>
            <ul className="mt-4 space-y-1 text-sm">
              {FOOTER_LINKS.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center py-1.5 text-slate-700 transition-colors hover:text-[#0B3D91] dark:text-slate-300 dark:hover:text-[#38bdf8]"
                  >
                    <span>{item.label}</span>
                    {item.href === "/careers" && (
                      <span className="ml-2 inline-flex items-center rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-semibold text-[#0B3D91] dark:bg-blue-900/60 dark:text-blue-300">
                        Hiring
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Crawlers */}
          <div>
            <h3 className="font-serif text-sm font-bold text-slate-950 uppercase tracking-wider dark:text-slate-100">
              Trust & Discovery
            </h3>
            <ul className="mt-4 space-y-1 text-sm">
              {FOOTER_LINKS.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-block py-1.5 text-slate-700 transition-colors hover:text-[#0B3D91] dark:text-slate-300 dark:hover:text-[#38bdf8]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/llms.txt"
                  className="inline-flex items-center gap-1.5 py-1.5 text-slate-700 transition-colors hover:text-[#0B3D91] dark:text-slate-300 dark:hover:text-[#38bdf8]"
                >
                  <span className="rounded bg-blue-100 px-1 py-0.5 text-[10px] font-mono text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    AI
                  </span>
                  llms.txt Index
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between border-t border-slate-200 pt-8 text-xs text-slate-700 dark:border-slate-800 dark:text-slate-300">
          <p>
            &copy; {currentYear} BlueCrest (bluecreast.in). All rights reserved.
          </p>
          <div className="mt-3 sm:mt-0 flex items-center space-x-4">
            <Link href="/privacy-policy" className="py-1 hover:text-slate-950 dark:hover:text-white">
              Privacy
            </Link>
            <span>&bull;</span>
            <Link href="/terms" className="py-1 hover:text-slate-950 dark:hover:text-white">
              Terms
            </Link>
            <span>&bull;</span>
            <Link href="/sitemap.xml" className="py-1 hover:text-slate-950 dark:hover:text-white">
              Sitemap
            </Link>
            <span>&bull;</span>
            <Link href="/rss.xml" className="py-1 hover:text-slate-950 dark:hover:text-white">
              RSS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
