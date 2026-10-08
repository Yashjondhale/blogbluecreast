import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Sparkles } from "lucide-react";
import { Post } from "@/types";
import { formatDate } from "@/lib/utils";

interface HeroPostProps {
  post: Post;
}

export function HeroPost({ post }: HeroPostProps) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xl transition-all duration-300 dark:border-slate-800 dark:bg-slate-900/60">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Large Image Column */}
        <div className="relative aspect-[16/10] lg:aspect-auto lg:col-span-7 min-h-[320px] sm:min-h-[420px] overflow-hidden bg-slate-900">
          <Image
            src={post.mainImage.url}
            alt={post.mainImage.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
          <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 rounded-full bg-blue-600/90 px-3.5 py-1 text-xs font-semibold text-white shadow-md backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Featured Analysis</span>
          </div>
        </div>

        {/* Narrative Column */}
        <div className="flex flex-col justify-between p-6 sm:p-10 lg:col-span-5">
          <div>
            <div className="flex items-center gap-3 text-xs font-semibold tracking-wider uppercase">
              <Link
                href={`/category/${post.category.slug}`}
                className="text-[#1E90FF] transition-colors hover:text-blue-700 dark:hover:text-blue-300"
              >
                {post.category.title}
              </Link>
              <span className="text-slate-300 dark:text-slate-700">&bull;</span>
              <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                <Clock className="h-3 w-3" />
                {post.readingTime} min read
              </span>
            </div>

            <h2 className="mt-4 font-serif text-2xl font-bold tracking-tight text-slate-900 transition-colors group-hover:text-[#1E90FF] sm:text-3xl lg:text-4xl dark:text-white dark:group-hover:text-[#38bdf8]">
              <Link href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h2>

            <p className="mt-4 line-clamp-3 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
              {post.excerpt}
            </p>
          </div>

          <div className="mt-8 border-t border-slate-100 pt-6 dark:border-slate-800">
            <div className="flex items-center justify-between">
              <Link
                href={`/author/${post.author.slug}`}
                className="flex items-center gap-3 group/author"
              >
                <div className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-[#1E90FF]/30">
                  <Image
                    src={post.author.avatar}
                    alt=""
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="block text-sm font-semibold text-slate-900 transition-colors group-hover/author:text-[#1E90FF] dark:text-white">
                    {post.author.name}
                  </span>
                  <time dateTime={post.publishedAt} className="text-xs text-slate-600 dark:text-slate-400">
                    {formatDate(post.publishedAt)}
                  </time>
                </div>
              </Link>

              <Link
                href={`/blog/${post.slug}`}
                className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-semibold text-white transition-all hover:bg-[#1E90FF] dark:bg-white dark:text-slate-900 dark:hover:bg-[#1E90FF] dark:hover:text-white"
              >
                Read Story
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
