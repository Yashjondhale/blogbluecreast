"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowRight, Clock, Folder, Newspaper, Search, Tag as TagIcon, X } from "lucide-react";
import { Post } from "@/types";
import { MOCK_CATEGORIES, MOCK_POSTS, MOCK_TAGS } from "@/sanity/mockData";

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandMenu({ isOpen, onClose }: CommandMenuProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  // Keyboard shortcut listener for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Trigger open via parent
          window.dispatchEvent(new CustomEvent("open_command_menu"));
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredPosts = query.trim()
    ? MOCK_POSTS.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        p.category.title.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5)
    : MOCK_POSTS.slice(0, 3);

  const filteredCategories = query.trim()
    ? MOCK_CATEGORIES.filter((c) =>
        c.title.toLowerCase().includes(query.toLowerCase())
      )
    : MOCK_CATEGORIES;

  const handleSelectPost = (slug: string) => {
    onClose();
    router.push(`/blog/${slug}`);
  };

  const handleSelectCategory = (slug: string) => {
    onClose();
    router.push(`/category/${slug}`);
  };

  const handleFullSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onClose();
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Quick Search"
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 p-4 pt-16 backdrop-blur-sm sm:pt-24"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <form onSubmit={handleFullSearch} className="flex items-center border-b border-slate-100 px-4 dark:border-slate-800">
          <Search className="h-5 w-5 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles, topics, authors, or categories..."
            autoFocus
            className="w-full bg-transparent px-3 py-4 text-sm text-slate-900 placeholder-slate-400 focus:outline-none dark:text-slate-100"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="h-4 w-4" />
            </button>
          ) : (
            <kbd className="hidden rounded bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-500 sm:inline-block dark:bg-slate-800 dark:text-slate-400">
              ESC
            </kbd>
          )}
        </form>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6">
          {/* Posts Section */}
          <div>
            <div className="mb-2 flex items-center justify-between text-xs font-semibold tracking-wider text-slate-400 uppercase">
              <span className="flex items-center gap-1.5">
                <Newspaper className="h-3.5 w-3.5" />
                Articles
              </span>
              {query && (
                <button
                  onClick={handleFullSearch}
                  className="text-[#1E90FF] hover:underline"
                >
                  View all results &rarr;
                </button>
              )}
            </div>

            <div className="space-y-1.5">
              {filteredPosts.map((post) => (
                <button
                  key={post._id}
                  onClick={() => handleSelectPost(post.slug)}
                  className="flex w-full items-center gap-3 rounded-xl p-2.5 text-left transition-colors hover:bg-slate-100 dark:hover:bg-slate-800/70"
                >
                  <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800">
                    <Image
                      src={post.mainImage.url}
                      alt={post.mainImage.alt}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="text-sm font-semibold text-slate-900 truncate dark:text-slate-100">
                      {post.title}
                    </h5>
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <span className="text-[#1E90FF]">{post.category.title}</span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readingTime} min
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-slate-400 opacity-0 transition-opacity group-hover:opacity-100" />
                </button>
              ))}

              {filteredPosts.length === 0 && (
                <p className="py-4 text-center text-sm text-slate-500">
                  No articles found matching &quot;{query}&quot;
                </p>
              )}
            </div>
          </div>

          {/* Categories Section */}
          <div>
            <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold tracking-wider text-slate-400 uppercase">
              <Folder className="h-3.5 w-3.5" />
              Categories & Niches
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {filteredCategories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => handleSelectCategory(cat.slug)}
                  className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/50 p-2.5 text-left text-xs font-medium text-slate-700 transition-colors hover:border-[#1E90FF] hover:bg-blue-50/30 dark:border-slate-800 dark:bg-slate-800/40 dark:text-slate-300 dark:hover:border-[#1E90FF]"
                >
                  <span>{cat.title}</span>
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: cat.color || "#1E90FF" }} />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/80 px-4 py-2.5 text-xs text-slate-500 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-400">
          <div className="flex items-center gap-3">
            <span>Press <kbd className="rounded bg-white px-1.5 py-0.5 text-[10px] font-semibold border dark:border-slate-700 dark:bg-slate-800">↵</kbd> to search</span>
            <span><kbd className="rounded bg-white px-1.5 py-0.5 text-[10px] font-semibold border dark:border-slate-700 dark:bg-slate-800">ESC</kbd> to exit</span>
          </div>
          <span className="font-medium text-[#1E90FF]">BlueCrest Instant Index</span>
        </div>
      </div>
    </div>
  );
}
