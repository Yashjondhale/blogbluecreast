import Image from "next/image";
import Link from "next/link";
import { Award, Globe } from "lucide-react";
import { Author } from "@/types";
import { LinkedinIcon, TwitterIcon } from "@/components/brand/SocialIcons";

interface AuthorCardProps {
  author: Author;
  compact?: boolean;
}

export function AuthorCard({ author, compact = false }: AuthorCardProps) {
  if (compact) {
    return (
      <div className="flex items-center gap-3">
        <Link href={`/author/${author.slug}`} className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-blue-500/20">
          <Image
            src={author.avatar}
            alt={author.avatarAlt || author.name}
            fill
            sizes="40px"
            className="object-cover"
          />
        </Link>
        <div>
          <Link
            href={`/author/${author.slug}`}
            className="text-sm font-semibold text-slate-900 transition-colors hover:text-blue-600 dark:text-slate-100 dark:hover:text-blue-400"
          >
            {author.name}
          </Link>
          {author.role && (
            <p className="text-xs text-slate-500 dark:text-slate-400">{author.role}</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="my-10 rounded-2xl border border-slate-200/80 bg-gradient-to-br from-slate-50 to-white p-6 shadow-xs dark:border-slate-800 dark:from-slate-900/60 dark:to-slate-900/30">
      <div className="flex flex-col sm:flex-row items-start gap-5">
        <Link
          href={`/author/${author.slug}`}
          className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl ring-2 ring-[#1E90FF]/30 transition-transform hover:scale-105"
        >
          <Image
            src={author.avatar}
            alt={author.avatarAlt || author.name}
            fill
            sizes="80px"
            className="object-cover"
          />
        </Link>

        <div className="flex-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="text-[11px] font-semibold tracking-wider text-[#1E90FF] uppercase">
                Written by &bull; E-E-A-T Verified
              </span>
              <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-slate-100">
                <Link
                  href={`/author/${author.slug}`}
                  className="hover:text-[#1E90FF] transition-colors"
                >
                  {author.name}
                </Link>
              </h3>
              {author.role && (
                <p className="text-xs font-medium text-slate-600 dark:text-slate-400">
                  {author.role}
                </p>
              )}
            </div>

            {/* Social Links */}
            {author.socials && (
              <div className="flex items-center gap-2">
                {author.socials.twitter && (
                  <a
                    href={author.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${author.name} on X`}
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200 hover:text-black dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                  >
                    <TwitterIcon className="h-4 w-4" />
                  </a>
                )}
                {author.socials.linkedin && (
                  <a
                    href={author.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${author.name} on LinkedIn`}
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0A66C2]/10 text-[#0A66C2] transition-colors hover:bg-[#0A66C2] hover:text-white dark:bg-[#0A66C2]/20 dark:text-[#38bdf8]"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                  </a>
                )}
                {author.socials.website && (
                  <a
                    href={author.socials.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${author.name} Website`}
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300"
                  >
                    <Globe className="h-4 w-4" />
                  </a>
                )}
              </div>
            )}
          </div>

          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {author.bio}
          </p>

          {/* Credentials */}
          {author.credentials && (
            <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
              <Award className="h-3.5 w-3.5 text-amber-500 flex-shrink-0" />
              <span>{author.credentials}</span>
            </div>
          )}

          {/* Expertise Tags */}
          {author.expertise && author.expertise.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {author.expertise.map((exp) => (
                <span
                  key={exp}
                  className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                >
                  {exp}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
