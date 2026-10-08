import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { MOCK_CATEGORIES, MOCK_POSTS } from "@/sanity/mockData";

export function MegaMenu({ onClose }: { onClose: () => void }) {
  const featuredTechPost = MOCK_POSTS.find((p) => p.category.slug === "technology") || MOCK_POSTS[0];
  const featuredFinPost = MOCK_POSTS.find((p) => p.category.slug === "finance") || MOCK_POSTS[1];

  return (
    <div
      role="region"
      aria-label="Category mega menu"
      className="absolute top-full left-0 w-full border-b border-slate-200/90 bg-white/95 shadow-xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/95"
    >
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Categories Grid (Col 1-7) */}
          <div className="lg:col-span-7">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-bold tracking-wider text-[#1E90FF] uppercase">
                Explore Editorial Pillars
              </span>
              <Link
                href="/blog"
                onClick={onClose}
                className="text-xs font-medium text-slate-500 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Browse all categories &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {MOCK_CATEGORIES.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  onClick={onClose}
                  className="group rounded-xl border border-slate-100 bg-slate-50/50 p-4 transition-all hover:border-blue-200 hover:bg-blue-50/30 hover:shadow-sm dark:border-slate-800/80 dark:bg-slate-800/30 dark:hover:border-blue-900 dark:hover:bg-blue-950/20"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: cat.color || "#1E90FF" }}
                    />
                    <h4 className="font-serif text-base font-bold text-slate-900 group-hover:text-[#1E90FF] dark:text-slate-100">
                      {cat.title}
                    </h4>
                  </div>
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                    {cat.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Featured Stories Preview (Col 8-12) */}
          <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-slate-100 lg:pl-8 dark:border-slate-800">
            <span className="mb-4 flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#1E90FF] uppercase">
              <Sparkles className="h-3.5 w-3.5" />
              Editor&apos;s Highlights
            </span>

            <div className="space-y-4">
              {[featuredTechPost, featuredFinPost].map((post) => (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug}`}
                  onClick={onClose}
                  className="group flex items-center gap-3.5 rounded-xl p-2 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50"
                >
                  <div className="relative h-16 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800">
                    <Image
                      src={post.mainImage.url}
                      alt={post.mainImage.alt}
                      fill
                      sizes="80px"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-semibold tracking-wider text-[#1E90FF] uppercase">
                      {post.category.title}
                    </span>
                    <h5 className="font-serif text-sm font-bold text-slate-900 line-clamp-2 group-hover:text-[#1E90FF] dark:text-slate-100">
                      {post.title}
                    </h5>
                  </div>
                  <ArrowRight className="h-4 w-4 text-slate-400 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              ))}

              <div className="pt-2">
                <Link
                  href="/news"
                  onClick={onClose}
                  className="flex items-center justify-between rounded-xl border border-red-500/20 bg-gradient-to-r from-red-500/5 to-blue-500/5 p-3 text-xs font-semibold text-slate-800 transition-colors hover:border-[#1E90FF] dark:text-slate-200"
                >
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                    <span>Daily News Desk & Live Wire</span>
                  </div>
                  <span className="text-[#1E90FF] text-[11px]">Explore &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
