import { Author, Category, NewsArticle, Post, Tag } from "@/types";
import { client } from "./client";
import { projectId } from "./env";
import { MOCK_AUTHORS, MOCK_CATEGORIES, MOCK_NEWS, MOCK_POSTS, MOCK_TAGS } from "./mockData";

const isSanityConfigured =
  projectId &&
  projectId !== "demoprojectid" &&
  projectId.length > 5 &&
  process.env.SANITY_API_READ_TOKEN !== undefined;

export async function getAllPosts(): Promise<Post[]> {
  if (isSanityConfigured) {
    try {
      const query = `*[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
        _id,
        title,
        "slug": slug.current,
        excerpt,
        mainImage {
          "url": asset->url,
          alt,
          caption
        },
        category->{ _id, title, "slug": slug.current, color, description },
        tags[]->{ _id, title, "slug": slug.current },
        author->{ _id, name, "slug": slug.current, role, bio, "avatar": avatar.asset->url, expertise, credentials, socials },
        publishedAt,
        updatedAt,
        readingTime,
        seoTitle,
        seoDescription,
        canonicalUrl,
        noindex,
        featured,
        trending,
        body
      }`;
      const data = await client.fetch<Post[]>(query);
      if (data && data.length > 0) return data;
    } catch {
      // Fallback gracefully
    }
  }
  return MOCK_POSTS;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const all = await getAllPosts();
  return all.find((p) => p.slug === slug) || null;
}

export async function getFeaturedPosts(): Promise<Post[]> {
  const all = await getAllPosts();
  const featured = all.filter((p) => p.featured);
  return featured.length > 0 ? featured : all.slice(0, 1);
}

export async function getTrendingPosts(limit = 4): Promise<Post[]> {
  const all = await getAllPosts();
  const trending = all.filter((p) => p.trending);
  return (trending.length > 0 ? trending : all).slice(0, limit);
}

export async function getLatestPosts(limit = 6): Promise<Post[]> {
  const all = await getAllPosts();
  return all.slice(0, limit);
}

export async function getPostsByCategory(
  categorySlug: string,
  page = 1,
  limit = 12
): Promise<{ posts: Post[]; total: number; totalPages: number }> {
  const all = await getAllPosts();
  const filtered = all.filter((p) => p.category?.slug === categorySlug);
  const total = filtered.length;
  const totalPages = Math.ceil(total / limit) || 1;
  const startIndex = (page - 1) * limit;
  const posts = filtered.slice(startIndex, startIndex + limit);

  return { posts, total, totalPages };
}

export async function getPostsByTag(
  tagSlug: string,
  page = 1,
  limit = 12
): Promise<{ posts: Post[]; total: number; totalPages: number }> {
  const all = await getAllPosts();
  const filtered = all.filter((p) =>
    p.tags?.some((t) => t.slug === tagSlug)
  );
  const total = filtered.length;
  const totalPages = Math.ceil(total / limit) || 1;
  const startIndex = (page - 1) * limit;
  const posts = filtered.slice(startIndex, startIndex + limit);

  return { posts, total, totalPages };
}

export async function getPostsByAuthor(
  authorSlug: string,
  page = 1,
  limit = 12
): Promise<{ posts: Post[]; total: number; totalPages: number }> {
  const all = await getAllPosts();
  const filtered = all.filter((p) => p.author?.slug === authorSlug);
  const total = filtered.length;
  const totalPages = Math.ceil(total / limit) || 1;
  const startIndex = (page - 1) * limit;
  const posts = filtered.slice(startIndex, startIndex + limit);

  return { posts, total, totalPages };
}

export async function getPaginatedPosts(
  page = 1,
  limit = 12,
  categorySlug?: string
): Promise<{ posts: Post[]; total: number; totalPages: number }> {
  const all = await getAllPosts();
  const filtered = categorySlug
    ? all.filter((p) => p.category?.slug === categorySlug)
    : all;
  const total = filtered.length;
  const totalPages = Math.ceil(total / limit) || 1;
  const startIndex = (page - 1) * limit;
  const posts = filtered.slice(startIndex, startIndex + limit);

  return { posts, total, totalPages };
}

export async function getRelatedPosts(
  currentSlug: string,
  categorySlug?: string,
  tagSlugs: string[] = [],
  limit = 3
): Promise<Post[]> {
  const all = await getAllPosts();
  const candidates = all.filter((p) => p.slug !== currentSlug);

  // Score posts by category match and tag overlap
  const scored = candidates.map((post) => {
    let score = 0;
    if (categorySlug && post.category?.slug === categorySlug) score += 3;
    if (post.tags) {
      post.tags.forEach((tag) => {
        if (tagSlugs.includes(tag.slug)) score += 2;
      });
    }
    return { post, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.post);
}

export async function getAllCategories(): Promise<Category[]> {
  return MOCK_CATEGORIES;
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const categories = await getAllCategories();
  return categories.find((c) => c.slug === slug) || null;
}

export async function getAllAuthors(): Promise<Author[]> {
  return MOCK_AUTHORS;
}

export async function getAuthorBySlug(slug: string): Promise<Author | null> {
  const authors = await getAllAuthors();
  return authors.find((a) => a.slug === slug) || null;
}

export async function getAllTags(): Promise<Tag[]> {
  return MOCK_TAGS;
}

export async function searchPosts(query: string): Promise<Post[]> {
  if (!query || query.trim() === "") return [];
  const q = query.toLowerCase().trim();
  const all = await getAllPosts();

  return all.filter((p) => {
    const titleMatch = p.title.toLowerCase().includes(q);
    const excerptMatch = p.excerpt.toLowerCase().includes(q);
    const catMatch = p.category?.title.toLowerCase().includes(q);
    const tagMatch = p.tags?.some((t) => t.title.toLowerCase().includes(q));
    const authorMatch = p.author?.name.toLowerCase().includes(q);
    return titleMatch || excerptMatch || catMatch || tagMatch || authorMatch;
  });
}

export async function getAllNews(): Promise<NewsArticle[]> {
  if (isSanityConfigured) {
    try {
      const query = `*[_type == "news" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
        _id,
        title,
        "slug": slug.current,
        summary,
        highlights,
        "category": newsCategory,
        publishedAt,
        updatedAt,
        source,
        sourceUrl,
        author->{ _id, name, "slug": slug.current, role, bio, "avatar": avatar.asset->url },
        mainImage {
          "url": asset->url,
          alt,
          caption
        },
        body,
        isBreaking,
        tags
      }`;
      const data = await client.fetch<NewsArticle[]>(query);
      if (data && data.length > 0) return data;
    } catch {
      // Fallback to mock data gracefully
    }
  }
  return MOCK_NEWS;
}

export async function getNewsBySlug(slug: string): Promise<NewsArticle | null> {
  const all = await getAllNews();
  return all.find((n) => n.slug === slug) || null;
}

export async function getBreakingNews(): Promise<NewsArticle[]> {
  const all = await getAllNews();
  return all.filter((n) => n.isBreaking);
}

export async function getLatestNews(limit = 6): Promise<NewsArticle[]> {
  const all = await getAllNews();
  return all.slice(0, limit);
}
