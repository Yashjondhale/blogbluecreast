import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Award, Globe } from "lucide-react";
import { getAllAuthors, getAuthorBySlug, getPostsByAuthor } from "@/sanity/dataService";
import { PostCard } from "@/components/post/PostCard";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { AuthorJsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/constants";
import { LinkedinIcon, TwitterIcon } from "@/components/brand/SocialIcons";

interface AuthorPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}

export async function generateStaticParams() {
  const authors = await getAllAuthors();
  return authors.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: AuthorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const author = await getAuthorBySlug(slug);

  if (!author) return { title: "Author Not Found" };

  return {
    title: `${author.name} - Author & Editorial Profile - BlueCrest`,
    description: author.bio,
    alternates: {
      canonical: `${SITE_URL}/author/${author.slug}`,
    },
    openGraph: {
      title: `${author.name} - Author Profile`,
      description: author.bio,
      images: [{ url: author.avatar }],
    },
  };
}

export default async function AuthorPage({ params, searchParams }: AuthorPageProps) {
  const { slug } = await params;
  const { page = "1" } = await searchParams;
  const currentPage = Math.max(1, parseInt(page, 10) || 1);
  const pageSize = 12;

  const author = await getAuthorBySlug(slug);
  if (!author) notFound();

  const { posts, total } = await getPostsByAuthor(author.slug, currentPage, pageSize);

  return (
    <>
      <AuthorJsonLd author={author} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: "Authors", href: "/about#team" },
            { label: author.name },
          ]}
        />

        {/* Author E-E-A-T Profile Card */}
        <div className="rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-12 shadow-xs dark:border-slate-800 dark:bg-slate-900/60">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="relative h-28 w-28 sm:h-36 sm:w-36 flex-shrink-0 overflow-hidden rounded-3xl ring-4 ring-[#1E90FF]/20 shadow-md">
              <Image
                src={author.avatar}
                alt={author.avatarAlt || author.name}
                fill
                priority
                sizes="(max-width: 640px) 112px, 144px"
                className="object-cover"
              />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold tracking-wider text-[#1E90FF] uppercase">
                    E-E-A-T Verified Author
                  </span>
                  <h1 className="mt-1 font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100">
                    {author.name}
                  </h1>
                  {author.role && (
                    <p className="mt-1 text-sm font-semibold text-slate-600 dark:text-slate-400">
                      {author.role}
                    </p>
                  )}
                </div>

                {/* Social Handles */}
                {author.socials && (
                  <div className="flex items-center gap-2">
                    {author.socials.twitter && (
                      <a
                        href={author.socials.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${author.name} on Twitter`}
                        className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-black dark:bg-slate-800 dark:text-slate-300"
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
                        className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white dark:bg-[#0A66C2]/20 dark:text-[#38bdf8]"
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
                        className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300"
                      >
                        <Globe className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                )}
              </div>

              <p className="mt-4 text-base leading-relaxed text-slate-700 dark:text-slate-300">
                {author.bio}
              </p>

              {/* Credentials */}
              {author.credentials && (
                <div className="mt-4 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <Award className="h-4 w-4 text-amber-500 flex-shrink-0" />
                  <span className="font-medium">{author.credentials}</span>
                </div>
              )}

              {/* Expertise Tags */}
              {author.expertise && author.expertise.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {author.expertise.map((exp) => (
                    <span
                      key={exp}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Authored Articles */}
        <div className="mt-14">
          <div className="mb-8 border-b border-slate-200/80 pb-4 dark:border-slate-800/80">
            <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-slate-100">
              Published Articles by {author.name} ({total})
            </h2>
          </div>

          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          ) : (
            <p className="py-8 text-center text-slate-500">
              No articles published by this author yet.
            </p>
          )}
        </div>
      </div>
    </>
  );
}
