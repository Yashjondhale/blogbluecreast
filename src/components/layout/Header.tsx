"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { ThemeToggle } from "./ThemeToggle";
import { MegaMenu } from "./MegaMenu";
import { CommandMenu } from "@/components/search/CommandMenu";
import { SubscribeModal } from "@/components/newsletter/SubscribeModal";
import { NAV_ITEMS, PRIMARY_CATEGORIES } from "@/lib/constants";

export function Header() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleOpenCommand = () => {
      setIsSearchOpen(true);
    };

    const handleOpenSubscribe = () => {
      setIsSubscribeOpen(true);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("open_command_menu", handleOpenCommand);
    window.addEventListener("open_subscribe_modal", handleOpenSubscribe);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("open_command_menu", handleOpenCommand);
      window.removeEventListener("open_subscribe_modal", handleOpenSubscribe);
    };
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "border-b border-slate-200/80 bg-white/90 shadow-xs backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/90"
            : "border-b border-slate-200/40 bg-white/70 backdrop-blur-xs dark:border-slate-800/40 dark:bg-slate-950/70"
        }`}
      >
        <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand Logo */}
          <div className="flex items-center gap-6">
            <Logo size="md" showTagline />

            {/* Desktop MegaMenu dropdown trigger & Core links */}
            <nav className="hidden lg:flex items-center space-x-1 pl-4 border-l border-slate-200 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                <span>Topics</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isMegaMenuOpen ? "rotate-180 text-[#1E90FF]" : "text-slate-400"
                  }`}
                />
              </button>

              <Link
                href="/blog"
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                Articles
              </Link>
              <Link
                href="/news"
                className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                <span>News</span>
                <span className="flex h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
              </Link>
              <Link
                href="/services"
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Input / Command Trigger Button */}
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search articles (Cmd+K)"
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50/80 px-3 py-1.5 text-xs text-slate-700 shadow-2xs transition-colors hover:border-[#1E90FF] hover:bg-white dark:border-slate-800 dark:bg-slate-800/60 dark:text-slate-300 dark:hover:border-[#1E90FF] dark:hover:bg-slate-800"
            >
              <Search className="h-4 w-4 text-slate-400" />
              <span className="hidden sm:inline">Search...</span>
              <kbd className="hidden sm:inline-flex items-center rounded border border-slate-200 bg-white px-1.5 py-0.5 text-[10px] font-semibold text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400">
                ⌘K
              </kbd>
            </button>

            {/* Dark Mode Toggle */}
            <ThemeToggle />

            {/* Newsletter CTA Button (Desktop) */}
            <button
              type="button"
              onClick={() => setIsSubscribeOpen(true)}
              className="hidden md:inline-flex items-center rounded-xl bg-[#0B3D91] px-4 py-2 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-blue-800 dark:bg-[#1E90FF] dark:text-slate-950 dark:hover:bg-blue-400 cursor-pointer"
            >
              Subscribe
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="lg:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mega Menu Overlay */}
        {isMegaMenuOpen && <MegaMenu onClose={() => setIsMegaMenuOpen(false)} />}
      </header>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          className="lg:hidden fixed inset-x-0 top-16 z-30 border-b border-slate-200 bg-white/95 px-6 py-6 shadow-xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/95"
        >
          <div className="space-y-4">
            <div className="text-xs font-bold tracking-wider text-[#1E90FF] uppercase">
              Main Navigation
            </div>
            <nav className="flex flex-col space-y-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-lg py-2 text-base font-semibold text-slate-800 hover:text-[#1E90FF] dark:text-slate-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsSubscribeOpen(true);
                }}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0B3D91] py-2.5 text-xs font-bold text-white shadow-sm dark:bg-[#1E90FF] dark:text-slate-950 mb-4"
              >
                <span>Subscribe to Newsletter</span>
              </button>

              <div className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-3">
                All Categories
              </div>
              <div className="grid grid-cols-2 gap-2">
                {PRIMARY_CATEGORIES.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/category/${cat.slug}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2 rounded-lg bg-slate-50 p-2.5 text-xs font-medium text-slate-700 dark:bg-slate-800/50 dark:text-slate-300"
                  >
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: cat.color || "#1E90FF" }}
                    />
                    {cat.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick Search Command Modal */}
      <CommandMenu isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Newsletter Subscription Modal */}
      <SubscribeModal
        isOpen={isSubscribeOpen}
        onClose={() => setIsSubscribeOpen(false)}
      />
    </>
  );
}
