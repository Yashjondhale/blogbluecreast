import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import { Post } from "@/types";
import { formatDate } from "@/lib/utils";

interface PostCardProps {
  post: Post;
  priority?: boolean;
}

export function PostCard({ post, priority = false }: PostCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/80 dark:bg-slate-900/60 dark:hover:border-slate-700">
      {/* Thumbnail */}
      <Link
        href={`/blog/${post.slug}`}
        className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-slate-800"
      >
        <Image
          src={
            post.mainImage?.url ||
            "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
          }
          alt={post.mainImage?.alt || post.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          {/* Metadata Header */}
          <div className="flex items-center justify-between gap-2 text-xs">
            {post.category && (
              <Link
                href={`/category/${post.category.slug}`}
                className="font-semibold uppercase tracking-wider text-[#1E90FF] transition-colors hover:text-blue-700 dark:hover:text-blue-300"
              >
                {post.category.title}
              </Link>
            )}
            <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
              <Clock className="h-3 w-3" />
              {post.readingTime} min read
            </span>
          </div>

          {/* Title */}
          <h3 className="mt-3 font-serif text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-[#1E90FF] sm:text-xl dark:text-slate-100 dark:group-hover:text-[#38bdf8]">
            <Link href={`/blog/${post.slug}`} className="focus:outline-none">
              {post.title}
            </Link>
          </h3>

          {/* Excerpt */}
          <p className="mt-2.5 line-clamp-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {post.excerpt}
          </p>
        </div>

        {/* Footer: Author & Date */}
        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs dark:border-slate-800/80">
          <Link
            href={`/author/${post.author.slug}`}
            className="flex items-center gap-2 group/author"
          >
            <div className="relative h-7 w-7 flex-shrink-0 overflow-hidden rounded-full ring-1 ring-slate-200 dark:ring-slate-700">
              <Image
                src={post.author.avatar}
                alt=""
                fill
                sizes="28px"
                className="object-cover"
              />
            </div>
            <span className="font-medium text-slate-700 transition-colors group-hover/author:text-[#1E90FF] dark:text-slate-300">
              {post.author.name}
            </span>
          </Link>
          <time dateTime={post.publishedAt} className="text-slate-400 dark:text-slate-500">
            {formatDate(post.publishedAt)}
          </time>
        </div>
      </div>
    </article>
  );
}
